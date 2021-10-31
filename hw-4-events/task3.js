

// (3 изображение)
// Создать html-страницу со списком книг.
// При щелчке на книгу, цвет фона должен меняться на оранжевый.
// Учтите, что при повторном щелчке на другую книгу, предыдущей –
// необходимо возвращать прежний цвет. 

let book =[...document.getElementsByTagName('li')]
console.log(book)

for(iterator of book) {    
    iterator.addEventListener("click", e => {
        for (iterator2 of book) {
            iterator2.style.backgroundColor = "transparent"
        }
        e.target.style.backgroundColor = "orange";        
    })
}


