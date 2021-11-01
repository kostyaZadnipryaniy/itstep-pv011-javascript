// class Person {
//     constructor(name, age) {
//         this._name = name
//         this._age = age
//     }
//     get name() {
//         return this._name
//     }
//     get age() {
//         return this._age
//     }
//     set name(v) {
//         this._name = v
//     }
//     set age(v) {
//         this._age = v
//     }
// }
// const p = new Person('Alex', 22)
// console.log(p)
// console.log(p.name, p.age)
// p.name = 'John'
// p.age = 25
// console.log(p.name, p.age)



// class Person {
//     #id = new Date().getTime()

//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.#getCurrentTime()
//     }

//     getId() {
//         return this.#id
//     }

//     #getCurrentTime() {
//         console.log(new Date().toLocaleTimeString())
//     }

// }
// const p = new Person('Alex', 22)
// console.log(p.#id)
// console.log(p.getId())


// class Person {
//     #id = new Date().getTime()

//     static getCurrentTime() {
//         return new Date().toLocaleTimeString()
//     }

//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     getId() {
//         return this.#id
//     }
// }

// const p = new Person('Alex', 22)
// console.log(Person.getCurrentTime())

// inheritance
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age 
//     }
//     logInfo() {
//        console.log('Person Info %s %s', this.name, this.age) 
//     }
// }

// class Student extends Person {

//     #id = new Date().getTime()

//     constructor(name, age){
//         super(name, age)
//     }
    
//     getId() {
//         return this.#id
//     }
// }

// class Teacher extends Person {
//     constructor(name, age) {
//         super(name, age)
//     }
// }

// const t = new Teacher('Alex', 40)
// t.logInfo()
// console.log(t.getId())

