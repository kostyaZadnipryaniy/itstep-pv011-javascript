// <!-- (1 изображение)
// Создать html-страницу для ввода имени пользователя.
// Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input

// (2 изображение)
// Создать html-страницу с кнопкой Открыть и модальным
// окном. На модальном окне должен быть текст и кнопка Закрыть.
// Изначально модальное окно не отображается. При клике на
// кнопку Открыть появляется модальное окно, на кнопку Закрыть –
// исчезает. 

// (3 изображение)
// Создать html-страницу со списком книг.
// При щелчке на книгу, цвет фона должен меняться на оранжевый.
// Учтите, что при повторном щелчке на другую книгу, предыдущей –
// необходимо возвращать прежний цвет. 

let inputt = document.querySelector('.inputWithNoNumbers')

inputt.addEventListener('input', (e) => {
    let letter = e.target.value
    let result = letter.match(/[0-9]/);
    console.log(result)
  
})