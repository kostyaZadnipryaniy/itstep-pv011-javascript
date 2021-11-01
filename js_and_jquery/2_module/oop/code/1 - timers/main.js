// arrow fn style
// setTimeout(() => {
//     console.log("Hello World")
// }, 1000)

// // es5 style
// setTimeout(function(){
//     console.log("Hello JavaScript")
// }, 500)

// // extended case
// function foobar() {
//     console.log("Foo".repeat(10))
// }

// setTimeout(foobar, 500)

// // pass parametrs using bind method
// function sum(a, b) {
//     console.log(a + b)
// }

// setTimeout(sum.bind(null, 10, 6), 1000)

// let t1 = null 

// function showN(n) {
//     console.log(n)
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         clearTimeout(t1)
//         break
//     }
//     t1 = setTimeout(showN.bind(null, i), i * 1000)
// }

// let i = 0

// setInterval(() => {
//     console.log(i)
//     i++
// }, 1000)

// let i = 0

// setInterval(function() {
//     console.log(i)
//     i++
// }, 1000)

// let i = 0, interval = null

// interval = setInterval(() => {
//     if (i === 3) clearInterval(interval)
//     console.log(i)
//     i++
// }, 1000)

// setInterval(() => {
//     document.body.innerHTML = new Date().toLocaleTimeString()
// }, 1000)