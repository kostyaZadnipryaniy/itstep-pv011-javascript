let text 
let requestURL
let func = ()=>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestURL)
    xhr.responseType = 'json'
    xhr.onload = () => {
        let a = xhr.response
        for (let i = 0; i < a.length; i++) {
            document.getElementById('sortable').insertAdjacentHTML("beforeEnd", `<tr>
            <td>${a[i].userId}</td>
            <td>${a[i].id}</td>
            <td>${a[i].title}</td>
            <td>${a[i].body}</td>
            </tr>`)
        }
    }
    
    
    xhr.onerror = () => {
    console.log(xhr.response)
    }
    xhr.send()}
document.getElementById('bAll').addEventListener('click', () => {document.getElementById('sortable').innerHTML = '';requestURL = `https://jsonplaceholder.typicode.com/posts`;func()})
document.getElementById('bUser').addEventListener('click', () => {document.getElementById('sortable').innerHTML = '';text = document.getElementById('text').value;requestURL = `https://jsonplaceholder.typicode.com/posts?userId=${text}`;func()})
document.getElementById('bId').addEventListener('click', () => {document.getElementById('sortable').innerHTML = '';text = document.getElementById('text').value;requestURL = `https://jsonplaceholder.typicode.com/posts?id=${text}`;func()})
document.getElementById('bTitle').addEventListener('click', () => {document.getElementById('sortable').innerHTML = '';text = document.getElementById('text').value;requestURL = `https://jsonplaceholder.typicode.com/posts?title_like=${text}`;func()})
document.getElementById('bBody').addEventListener('click', () => {document.getElementById('sortable').innerHTML = '';text = document.getElementById('text').value;requestURL = `https://jsonplaceholder.typicode.com/posts?body_like=${text}`;func()})
