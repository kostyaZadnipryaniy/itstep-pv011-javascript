const a = { name: 'Alex', age: new Date(1975, 0, 1) }

// Convert JavaScript object to JSON string
const a1 = JSON.stringify(a)
console.log(a1)

// JSON parsing existing string
const a2 = JSON.parse(a1)
console.log(a2)

// JSON formatting
console.log(JSON.stringify(a2, null, 4))
document.write(JSON.stringify(a2, null, 4))

// toJSON example
const person = {
    name: 'John',
    age: 22,
    toJSON() {
        return this.name
    }
}
console.log(JSON.stringify(person))

// reviver example
const shape = {
    x: 10,
    y: 20,
    created: new Date(2021, 0, 1)
}

const shape1 = JSON.stringify(shape)
console.log(shape1)

const shape2 = JSON.parse(shape1, function(key, value){
    if (key === 'created') {
        return new Date(value)
    }
    return value
})
console.log(shape2)