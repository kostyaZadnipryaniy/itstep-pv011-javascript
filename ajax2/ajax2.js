let urlString = `https://jsonplaceholder.typicode.com/posts?_start=0&_end=25`
let responce
let posts = document.getElementById('conteiner')
let content
let pagin = document.getElementsByClassName('page-link')

let getResponce = async () =>{
  loader.style.display = 'flex'
    responce = await fetch(urlString)
    content = await responce.json()
    loader.style.display = 'none'
    for (let key in content) {
        posts.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">CARD ${content[key].id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${content[key].title}</h6>
              <p class="card-text">${content[key].body}</p>
            </div>
          </div>
        `
               
    }
    }
    getResponce()
    
for (let key in pagin) {
    if(key<4){
        pagin[key].addEventListener('click', e => {
            e.preventDefault
            urlString = `https://jsonplaceholder.typicode.com/posts?_start=${0+25*key}&_end=${25+25*key}`
        posts.innerHTML =''
            getResponce()
        })
    }
    
}



