const profileContainer = document.getElementById('profile__container')
const profileForm = document.forms[0]
const reposContainer = document.getElementById('repos__container')
const pagContainer = document.getElementById('pag__container')
const loader = document.getElementById('loader')

let api = null
let pagResult = ''
let pageCount = 3

loader.style.display = 'none'

class ProfileCard {
    constructor(obj) {
        this.login = obj.login
        this.avatar_url = obj.avatar_url
        this.name = obj.name
        this.bio = obj.bio
        this.public_repos = obj.public_repos
        this.followers = obj.followers
        this.following = obj.following
    }

    render(container) {
        container.innerHTML = `
        <div class="col-md-3">
        <div class="card mb-2">
            <img src="${this.avatar_url}" class="card-img-top" alt="${this.avatar_url}">
            <div class="card-body">
            <h5 class="card-title">${this.login}</h5>
            <p class="card-text">${this.bio}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Public repos: ${this.public_repos}</li>
                <li class="list-group-item">Followers: ${this.followers}</li>
                <li class="list-group-item">Following: ${this.following}</li>
             </ul>
            <a href="https://github.com/${this.login}" target="_blank" class="btn btn-primary mt-2">Go to Github</a>
                <button class="btn btn-success mt-2" id="repo_btn">See repositories</button>
            </div>
        </div>
        </div>
        `
    }
}

class Api {
    #currentPage = 1
    #baseUrl = 'https://api.github.com/users/'

    constructor(reposPerPage = 4) {
        this.reposPerPage = reposPerPage
        this.profileCard = null
        this.reposPageCount = 0
    }

    getUser(userName) {

        pagContainer.innerHTML = '', reposContainer.innerHTML = ''

        const $this = this
        const xml = new XMLHttpRequest()

        xml.open('GET', `${this.#baseUrl}${userName}`, true)

        xml.send(null)

        xml.onreadystatechange = function () {
            switch (this.readyState) {
                case 3:
                    loader.style.display = 'flex'
                    break
                case 4:
                    setTimeout(() => {
                        loader.style.display = 'none'
                    }, 1000)

                    const response = JSON.parse(this.responseText)
                    switch (this.status) {
                        case 200:
                            // if response finished successfully
                            $this.profileCard = new ProfileCard(response)
                            $this.profileCard.render(profileContainer)


                            $this.reposPageCount = Math.ceil($this.profileCard.public_repos / $this.reposPerPage)

                            pagResult = ''

                            for (let i = 0; i < $this.reposPageCount; i++) {
                                if (i >= pageCount - 3 && i < pageCount) {
                                    pagResult += `<li class="page-item"><a class="page-link" href="#">${i + 1}</a></li>`
                                }
                            }

                            const repoBtn = document.getElementById('repo_btn')

                            repoBtn.addEventListener('click', $this.getRepoList.bind($this))

                            break;
                        case 404:
                            // handle errors (if user not found)
                            alert(`${this.status}, ${response.message}`)
                            break;
                    }
                    break
            }
        }
    }

    getRepoList() {
        if (pagResult) {
            let hasNextRepoList = !!!(pageCount < 0 || pageCount > this.reposPageCount)

            pagContainer.innerHTML = `
                <nav aria-label="Page navigation example" class="d-flex justify-content-center">
                <ul class="pagination">
                <li class="page-item  ${pageCount - 3 <= 0 ? 'disabled' : ''}">
                    <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                ${pagResult}
                <li class="page-item  ${pageCount >= this.reposPageCount ? 'disabled' : ''}">
                    <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                </ul>
                </nav> 
            `

            const pageItems = document.getElementsByClassName('page-item')

            for (let i = 0; i < pageItems.length; i++) {
                pageItems[i].addEventListener('click', e => {
                    e.preventDefault()

                    const currentPage = e.target.textContent.trim()

                    if (Object.is(+currentPage, NaN)) {
                        switch (currentPage) {
                            case '»':
                                pageCount += 3
                                break;
                            case '«':
                                pageCount -= 3
                                break;
                        }

                        pagResult = ''

                        if (pageCount <= 0) {
                            pageCount = 0
                        } else if (pageCount > this.reposPageCount) {
                            pageCount = this.reposPageCount
                        }

                        for (let i = 0; i < this.reposPageCount; i++) {
                            if (i >= pageCount - 3 && i < pageCount) {
                                pagResult += `<li class="page-item"><a class="page-link" href="#">${i + 1}</a></li>`
                            }
                        }

                        this.#currentPage = pageCount - 2

                        console.log(this.#currentPage)


                    } else if (typeof +currentPage === 'number') {
                        this.#currentPage = +currentPage
                    }

                    if (hasNextRepoList) this.getRepoList()
                })
            }
        }

        loader.style.display = 'flex'

        const xml = new XMLHttpRequest()
        xml.open('GET', `https://api.github.com/users/${this.profileCard.login}/repos?page=${this.#currentPage}&per_page=${this.reposPerPage}`)
        xml.send(null)
        xml.onload = function () {
            setTimeout(() => {
                loader.style.display = 'none'
            }, 1000)
            const response = JSON.parse(this.responseText) || []

            const repoListHtml = response.reduce((acc, repo) => {
                return acc + `
                <div class="col-md-3">
                    <div class="card mb-2">
                        <div class="card-body">
                        <h5 class="card-title">${repo.name}</h5>
                        <p class="card-text">${repo.id}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Watchers: ${repo.watchers}</li>
                            <li class="list-group-item">Forks: ${repo.forks}</li>
                            <li class="list-group-item">Disabled: ${repo.disabled}</li>
                        </ul>
                        <a href="${repo.clone_url}" target="_blank" class="btn btn-success mt-2">Follow</a>
                        </div>
                    </div>
                </div>
                `
            }, '')

            reposContainer.innerHTML = repoListHtml
        }
        xml.onerror = function () {
            alert(this.status, this.responseText)
        }
    }
}

profileForm.addEventListener('submit', e => {
    e.preventDefault()

    const searchQuery = e.target.elements['search'].value

    if (!searchQuery) {
        alert('Search field is required!')
        return
    }

    api = new Api()

    api.getUser(searchQuery)

})