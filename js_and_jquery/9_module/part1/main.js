const profileContainer = document.getElementById('profile__container')
const profileForm = document.forms[0]

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
            </div>
        </div>
        </div>
        `
    }
}

profileForm.addEventListener('submit', e => {
    e.preventDefault()

    const searchQuery = e.target.elements['search'].value

    if (!searchQuery) {
        alert('Search field is required!')
        return
    }
    
    const xml = new XMLHttpRequest()

    xml.open('GET', `https://api.github.com/users/${searchQuery}`, true)

    xml.send(null)

    xml.onreadystatechange = function() {
        switch(this.readyState) {
            case 3:
                console.log('Loading...')
                break
            case 4:
                const response = JSON.parse(this.responseText)
                switch(this.status) {
                    case 200:
                        // if response finished successfully
                        new ProfileCard(response).render(profileContainer)
                        break;
                    case 404:
                        // handle errors (if user not found)
                        alert(`${this.status}, ${response.message}`)
                        break;
                }
                break 
        }
    }
})