// arrow fns
// const person = {
//     name: 'Alex',
//     age: 22,
//     getName: () => {
//         console.log(this.age)
//     }
// }

// person.getName()

// arrow with class
// class Person1 {
//     #name = 'John'
//     getName() {
//         return this.#name
//     }
// }

// class Person2 {
//     #name = 'John'
//     getName = () => {
//         return this.#name
//     }
// }

// const p1 = new Person1()
// const p2 = new Person2()
// console.log(p1.getName(), p2.getName())
// console.log(p1, p2)

// array fn with arguments

// const getName = () => {
//     console.log(arguments[0])
// }

// getName('Nikita')

// const person = () => {}
// const p = new person()

// Promises

let counter = 1

// function foobar() {
//     setTimeout(() => {
//         console.log(`Counter ${counter}`)
//         ++counter
//         setTimeout(() => {
//             console.log(`Counter ${counter}`)
//             ++counter
//             setTimeout(() => {
//                 console.log(`Counter ${counter}`)
//                 ++counter
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

// foobar()

// function foobar() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(counter)
//             reject('Abracadabra')
//             resolve(++counter)
//         }, 1000)
//     })
// }

// setTimeout(() => {
//     console.log(3)
// })

// foobar()
//     .then(foobar)
//     .then(foobar)
//     .catch((e) => console.log(e))
//     .finally(_ => console.log('Finish'))

// console.log(counter)
