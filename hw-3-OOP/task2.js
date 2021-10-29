function ExtendedDate() {
    const x = new Date()
    x.__proto__ = ExtendedDate.prototype;
    return x;
}
  
ExtendedDate.prototype.__proto__ = Date.prototype;
  
ExtendedDate.prototype.writeDate = function() {
    console.log(this.getDate(), this.toLocaleString('default', { month: 'long' }));
};

ExtendedDate.prototype.checkDate = function(dateParam) {
    if (this > dateParam) 
    console.log("прошедшая")
    else if (this < dateParam)
    console.log("будущая")
    else
    console.log("одинаковая")
};
ExtendedDate.prototype.isLeapYear = function() {
    let year = this.getFullYear();
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
      return "Високосный";
    else 
        return "Не високосный";
}
ExtendedDate.prototype.nextDate = function() {

this.setDate(this.getDate() + 1);  
    return  this.toString();
}

date = new ExtendedDate();
date2 = new Date();
date.writeDate();
date.checkDate(date2);
console.log(date.isLeapYear())
console.log(date.nextDate())