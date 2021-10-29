function Circle(radius = 0)
{
	this.radius = radius;
}

Circle.prototype.getRad = function() {
	return this.radius;
}

Circle.prototype.setRad = function(radius) {
	this.radius = radius;
}

Circle.prototype.getDiam = function() {
	return 2*(this.radius);
}

Circle.prototype.getSquare = function() {
	return (Math.PI * this.radius)**2;
}

Circle.prototype.getLen = function() {
	return this.radius * 2 * Math.PI;	
}

const obj = new Circle(5);
console.log(obj.getRad());
obj.setRad(6);
console.log(obj.getRad());
console.log(obj.getDiam());
console.log(obj.getSquare());
console.log(obj.getLen());