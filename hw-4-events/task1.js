// <!-- (1 изображение)
// Создать html-страницу для ввода имени пользователя.
// Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input



let inputt = document.querySelector('.inputWithNoNumbers')

inputt.addEventListener('input', (e) => {
    console.log(e.target.value)
    for (let i = 0; i <= 9; i++) {
        if (e.target.value[e.target.value.length - 1] == i) {
           e.target.value = e.target.value.slice(0, e.target.value.length-1)
        }
        
    }
})