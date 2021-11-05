const filmsData = JSON.parse(FILMS_DATA)

class App {
    constructor(rootContainer, filmsData){
        this.filmList = []
        this.rootContainer = rootContainer
        this.addForm = document.querySelector('.add-form')

        this.init(filmsData)
    }

    get filmContainer() {
        return this.rootContainer.children[0].children[0].children[0]
    }

    init(filmsData) {
        let counter = 0
        for (const f of filmsData) {
            const film = new Film(f.russian_name, f.original_name, f.year, f.actors)
            this.filmList.push(film)
            film.render(this.filmContainer, counter)
            counter++
        }
        this.bindEvents()
    }

    getInputValue(e, key) {
        // return e.target.elements[key] && e.target.elements[key].value
        return  e.target.elements[key]?.value
    }

    handleFilmAdd(e) {
        e.preventDefault()
  
        const originalName = this.getInputValue(e, 'original_name')
        const russianName =  this.getInputValue(e, 'russian_name')
        const year = this.getInputValue(e, 'year')
        const actors =  this.getInputValue(e, 'actors')

        const newFilm = new Film(russianName, originalName, year, actors)
        this.filmList.unshift(newFilm)
        newFilm.render(this.filmContainer)
    }

    bindEvents() {
        this.addForm.addEventListener('submit', this.handleFilmAdd.bind(this))
    }
}

class Film {
    constructor(russianName = '', originalName = '', year = new Date(), actors = '') {
        this.russianName = russianName
        this.originalName = originalName
        this.year = year
        this.actors = actors.split(',')
    }

    render(root, index) {
        root.insertAdjacentHTML("afterbegin",  `
        <form class="col-md-3 form-${index}">
            <input type="hidden" value="${index}" name="id" />
            <div class="card mb-3">
                <div class="card-body">
                <h5 class="card-title" title=${this.originalName}>${this.russianName}</h5>
                <p class="card-text">Year: ${this.year}</p>
                <p class="card-text" title="${String(this.actors)}">Actors: ${String(this.actors)}</p>
                <button class="btn btn-danger">X</button>
            </div>
        </form>
        `);
        const deleteBtn = document.querySelector(`.form-${index}`)
        deleteBtn.addEventListener('submit', e => {
            e.preventDefault()
            // const filmIndex = e.target.elements['id'].value
            deleteBtn.remove()
        })
    }
}

new App(
    document.querySelector('.wrapper'),
    filmsData
)