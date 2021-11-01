// const tds = [...document.getElementsByTagName('td')]
// const cells = tds.splice(0, 3)

// for (let i = 0; i < tds.length; i++) {
//     tds[i].addEventListener('mouseenter', function(e) {
//         // for (let i = 0; i < tds.length; i++) {
//         //     tds[i].style.backgroundColor = 'transparent'
//         // }
//         e.target.style.backgroundColor = 'orange'
//     })
//     tds[i].addEventListener('mouseleave', function(e) {
//         // for (let i = 0; i < tds.length; i++) {
//         //     tds[i].style.backgroundColor = 'transparent'
//         // }
//         e.target.style.backgroundColor = 'transparent'
//     })
// }


// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault()
// })

const buttons = document.getElementsByTagName('button')
const resultInput = document.getElementById('result')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e){
        switch(e.target.innerHTML) {
            case 'C':
                resultInput.value = '0'
                break
            case '&lt;-':
                resultInput.value = resultInput.value.slice(0, resultInput.value.length - 1)
                break
            case '=':
                resultInput.value = eval(resultInput.value)
                break
            default:
                resultInput.value += e.target.innerHTML
        }
        // if (e.target.innerHTML === 'C') {
        //     resultInput.value = '0'
        //     return
        // }
        // if (e.target.innerHTML === '&lt;-') {
        
        //     return
        // }
        // if (e.target.innerHTML === '=') {
        //     resultInput.value = eval(resultInput.value)
        //     return
        // }
        // resultInput.value += e.target.innerHTML
    })
}

const upBtn = document.getElementById('up_btn')

upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})