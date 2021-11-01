// // Basic char - Abstract Product A
// function Chair(material, price) {
//     this.material = material
//     this.price = price
// }
// // Basic car - Abstract Product B
// function Car(model, price) {
//     this.model = model
//     this.price = price
// }

// // Log info to console A
// Chair.prototype.logInfo = function() {
//     console.log('Car Info %s, %s', this.model, this.price)
// }

// // Log info to console B
// Chair.prototype.logInfo = function() {
//     console.log('Chair Info %s, %s', this.material, this.price)
// }

// // Set prototype inheritance
// ModernChair.prototype = {...Chair.prototype}
// OldChair.prototype = {...Chair.prototype}
// ModernCar.prototype = {...Car.prototype}
// OldCar.prototype = {...Car.prototype}

// // ProductA1
// function ModernChair(material, price) {
//     Chair.call(this, material, price)
// }

// ModernChair.prototype.setDiscount = function(value) {
//     this.price = this.price - (this.price * value / 100)
// }
// ModernChair.prototype.logInfo = function() {
//     console.log('Modern Info %s, %s', this.material, this.price)
// }

// // ProductA2
// function ModernCar(model, price) {
//     Car.call(this, model, price)
// }
// ModernCar.prototype.logInfo = function() {
//     console.log('Modern Car Info %s, %s', this.model, this.price)
// }

// // ProductB2
// function OldChair(material, price) {
//     this.gurantee = false
//     Chair.call(this, material, price)
// } 

// OldChair.prototype.setGurantee = function() {
//     this.gurantee = !this.gurantee
// }
// OldChair.prototype.logInfo = function() {
//     console.log('Old Info %s, %s', this.material, this.price)
// }

// // ProductB2
// function OldCar(model, price) {
//     Car.call(this, model, price)
// }
// OldCar.prototype.logInfo = function() {
//     console.log('MOld Car Info %s, %s', this.model, this.price)
// }

// // Concrete Factory 1
// function ModernFactory() {}
// ModernFactory.prototype.createModernChair = function() {
//     return new ModernChair()
// }
// ModernFactory.prototype.createModernCar = function() {
//     return new ModernCar()
// }

// // Concrete Factory 2
// function OldFactory() {}

// OldFactory.prototype.createOldChair = function() {
//     return new OldChair()
// }
// OldFactory.prototype.createOldCar = function() {
//     return new OldCar()
// }


// // const m = new ModernChair('wood', 200)
// // m.logInfo()
// // m.setDiscount(50)
// // m.logInfo()

// // const o = new OldChair('wood', 200)
// // o.logInfo()