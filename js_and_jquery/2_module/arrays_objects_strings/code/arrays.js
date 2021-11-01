// array initialization

// const a = [1, 2, 3] 
// console.log(a)

// const a = Array(10)
// console.log(a[0])

// const a = Array(10, 2)
// console.log(a)

// const a = Array('Tom')
// console.log(a)

// add / remove elements
// const a = [1, 2, 3] 
// const len = a.push(22)
// console.log(a, len)

// const a = [1, 2, 3] 
// const len = a.pop()
// console.log(a, len)

// add / remove from start
// const a = [1, 2, 3] 
// const len = a.unshift(22)
// console.log(a, len)

// const a = [1, 2, 3] 
// const len = a.shift()
// console.log(a, len)

// remove element by index

// const a = [1, 2, 3] 
// const len = a.splice(1, 1)
// console.log(a, len)

// const a = [1, 2, 3] 
// const len = a.splice(1, 2)
// console.log(a, len)

// const a = [1, 2, 3] 
// const len = a.splice(1, 2, 'John', 'Tom')
// console.log(a, len)

// cut array

// const a = [1, 2, 3, 4, 5] 
// const len = a.slice(2, a.length + 1)
// console.log(len)

// array values assignment

// const a = [1, 2, 3]
// console.log(a[0], a[9])
// a[0] = 22
// console.log(a)
// a[100] = -1
// console.log(a)

// arrays methods 

// extensible
// const a = [10, 2, 3, 18] 
// a.forEach(function(item, index, arr){
//     console.log(item, index, arr)
// })

// short version

// const a = [10, 2, 3, 18] 
// a.forEach(console.log)

// const a = [10, 1, 8, 9]

// const res = a.map(function(item, index, arr){
//     console.log(index, arr)
//     return item ** 2
// })

// console.log(res)

// remove duplicates from array by using filter
// const a = [2, 10, 10, 1, 3, 4, 4, 3, 2, 8, 7]


// // 0 === 0 -> true
// // 1 === 1 => true
// // 2 === 1 => false

// const res = a.filter(function(item, index, arr){
//     return index === arr.indexOf(item)
// })

// console.log(res)

// const a = [2, 1, 3, 4, 4, 3, 2, 8, 7]

// const res = a.find(function(item){
//     return item > 2
// })

// console.log(res)

// const a = [2, 1, 3, 4, 4, 3, -1, 2, 8, 7]

// const res = a.lastIndexOf(-1)
// console.log(res)

// // sort array to asc
// const a = [2, 1, 3, 4, 4, 3, -1, 2, 8, 7]

// const res = a.sort()
// console.log(res)

// sort array to desc
// const a = [2, 1, 3, 4, 4, 3, -1, 2, 8, 7]
// const res = a.sort()
// console.log(res.reverse())

// const a = [2, 1, 3, 4, 4, 3, -1, 2, 8, 7]
// const res = a.sort(function(a, b) {
//     const diff = a - b 
//     if (diff > 0) {
//         return 1
//     } else if (diff < 0) {
//         return -1
//     } else {
//         return 0
//     }
// })

// console.log(res)
// sort persons by age
// const a = [
//     {
//         name: 'John',
//         age: 25
//     },
//     {
//         name: 'Alex',
//         age: 22
//     },
//     {
//         name: 'Tom',
//         age: 20
//     },
//     {
//         name: 'Zack',
//         age: 19
//     }
// ]

// const res = a.sort(function(a, b){
//     return b.age - a.age
// })

// console.log(res)

// sort persons by name

// const res = a.sort(function(a, b) {
//     if (a.name > b.name) {
//         return -1
//     } else if (a.name < b.name) {
//         return 1
//     } else {
//         return 0
//     }
// })

// console.log(res)

// calc sum
// const a = Array.from(Array(101).keys())

// const res = a.reduce(function(acc, item){
//     return acc + item 
// }, 100)

// console.log(res)

// concat two arrays
// const a = [1, 2, 3]
// const b = [4, 5, 6] 
// console.log(a.concat(b))
// console.log([...a, ...b])

// flat array

// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// const res = arr.reduce(function(acc, item) {
//     return acc.concat(item)
// })

// console.log(res)

// const arr = [[1, 2, [10, 2, [2, 6, 7]]], [4, 5, 6], [7, 8, 9]]
// console.log(arr.flat(Infinity))

// const a = [1, 2, 3]
// console.log(a.join(''))

// const a = 'John'
// console.log([...a].reverse().join(''))

// objects

// const obj = new Object({ a: 1})
// const obj1 = { a: 1}
// console.log(obj1)

// define functions like class getters
// const a = {
//     name: 'Alex',
//     age: 22,
//     getName() {
//         console.log(this.name, this.age)
//     }
// }

// a.getName()

// define function by using FE
// const a = {
//     name: 'Alex',
//     age: 22,
//     getName: function () {
//         console.log(this.name, this.age)
//     }
// }

// a.getName()

// define function by using arrow syntax
// const a = {
//     name: 'Alex',
//     age: 22,
//     getName: () => {
//         console.log(this)
//         console.log(this.name, this.age)
//     }
// }

// a.getName()

// const name = Symbol('name')

// const a = { name: 'John', age: 22 }
// const b = { [name]: 'Kherson', skill: 'JavaScript', [Symbol('name')]: 'Akella' }

// console.log(Object.assign(a, b))
// console.log({...a, ...b})

// make arrays and objects copies

// const a = [1, 2, 3] 
// const b = a.slice()
// b[0] = 100
// console.log(a, b)

// const a = [1, 2, 3] 
// const b = [...a]
// b[0] = 100
// console.log(a, b)

// const a = [1, 2, 3] 
// const b = JSON.parse(JSON.stringify(a))
// b[0] = 100
// console.log(a, b)

// const a = { name: 'Alex' }
// const b = {...a} 
// b.name = 'John'

// const a = { name: 'Alex' }
// const b = Object.assign({}, a) 
// b.name = 'John'
// console.log(a, b)

// const a = { name: 'Alex' }
// const b = JSON.parse(JSON.stringify(a)) 
// b.name = 'John'
// console.log(a, b)


// const a = 'John'

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// console.log(a.slice(0, 2))

// a[0] = 'B'
// console.log(a)

// console.log('B' + a.slice(1, a.length))

// console.log(a.repeat(7))

// console.log(a.startsWith('A'))
// console.log(a.endsWith('q'))

// console.log(a.indexOf('h'))

// console.log(a.padStart(10))
// console.log(a.padEnd(20))

// console.log(a.includes('J'))

// const b = '😀a'

// console.log(b.length, b[0], b[1])

// console.log('a' > 'A')

// const a = 'john snow'
// console.log(a.slice(-1, 3))
// console.log(a.substring(-10, 3))
// console.log(a.substr(5, 5))

// const a = (Math.random() * 10)
// console.log(Math.floor(a), a)
// console.log(Math.ceil(a), a)
// console.log(Math.abs(-10))
// console.log(Math.round(10.3))
// console.log(Math.pow(2, 3), 2 ** 3)
// console.log(Math.sqrt(100))
// console.log(100 ** (1/2))
console.log(Math.trunc(0.99), Math.floor(3.99))