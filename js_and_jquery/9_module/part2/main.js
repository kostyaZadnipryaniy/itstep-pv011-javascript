const profileContainer = document.getElementById('profile__container')
const profileForm = document.forms[0]
const reposContainer = document.getElementById('repos__container')
const pagContainer = document.getElementById('pag__container')

let api = null

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
        this.loading = false
        this.profileCard = null
    }

    getUser(userName) {
        const $this = this
        const xml = new XMLHttpRequest()

        xml.open('GET', `${this.#baseUrl}${userName}`, true)
    
        xml.send(null)
    
        xml.onreadystatechange = function() {
            switch(this.readyState) {
                case 3:
                    $this.loading = true
                    break
                case 4:
                    $this.loading = false

                    const response = JSON.parse(this.responseText)
                    switch(this.status) {
                        case 200:
                            // if response finished successfully
                            $this.profileCard = new ProfileCard(response)
                            $this.profileCard.render(profileContainer)


                            const reposPageCount = Math.ceil($this.profileCard.public_repos / $this.reposPerPage)

                            let pagResult = ''
                            for (let i = 0; i < reposPageCount; i++) {
                                pagResult += `<li class="page-item"><a class="page-link" href="#">${i + 1}</a></li>`
                            }

                            pagContainer.innerHTML = `
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                    </li>
                                    ${pagResult}
                                    <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav> 
                            `

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
        const xml = new XMLHttpRequest()
        xml.open('GET', `https://api.github.com/users/${this.profileCard.login}/repos?page=${this.#currentPage}&per_page=${this.reposPerPage}`)
        xml.send(null)
        xml.onload = function() {
            const response = JSON.parse(this.responseText)
            console.log(response)
        }
        xml.onerror = function() {
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