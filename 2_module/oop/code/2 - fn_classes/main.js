// // es5 class are functions ??? 
// function Car(name, price) {
//     this.name = name
//     this.price = price
// }

// const a = Car('BMW', 2000)

// console.log(a, a?.name, a?.price)

// let's use new operator to create instance of Car
// function Car(name, price) {
//     this.name = name
//     this.price = price
// }

// const a = new Car('BMW', 2000)

// console.log(a, a?.name, a?.price)

// use prototype patching option
// function Car(name, price) {
//     this.name = name
//     this.price = price
// }

// Car.prototype.getName = function() {
//     return this.name
// }

// Car.prototype.getPrice = function() {
//     return this.price
// }

// const a = new Car('BMW', 2000)

// console.log(a.getName(), a.getPrice())

// use getters and setters
// function Car(name, price) {
//     this.name = name
//     this.price = price
// }

// Object.defineProperties(Car.prototype, {
//     name: {
//         set(v) {
//             this._name = `Model: ${v}`
//         },
//         get() {
//             return this._name
//         }
//     },
//     price:  {
//         set(v) {
//             this._price = `Price: ${v}`
//         },
//         get() {
//             return this._price
//         }
//     }
// })

// const a = new Car('BMW', 2000)

// console.log(a.name, a.price)

// ES5 INHERITANCE and POLY without methods

// function Animal(name, age) {
//     this.name = name
//     this.age = age 
// }

// function Pig(name, age) {
//     Animal.call(this, name, age)
// }

// const p1 = new Pig("Josh", 23)
// console.log(p1)


// seems good but we have some problems in this case
// function Animal(name, age) {
//     this.name = name
//     this.age = age 
// }

// Animal.prototype.getInfo = function() {
//     console.log('Info: %s, %s', this.name, this.age)
// }

// Pig.prototype = Animal.prototype // Pig.prototype = { ...Animal.prototype}

// function Pig(name, age) {
//     Animal.call(this, name, age)
// }

// Pig.prototype.getInfo = function() {
//     console.log('Info from Pig: %s, %s', this.name, this.age)
// }

// const p1 = new Pig("Josh", 23)
// p1.getInfo()
// console.log(p1)

// const a = new Animal("Ana", 20)
// a.getInfo()


// ES5 INCAPSULATION

// function Animal(name, age) {

//     let prefix = "Name"

//     this.name = `${prefix}: ${name}`
//     this.age = age 
// }


// const a = new Animal('John', 22)
// console.log(a)
// console.log(a.prefix)

