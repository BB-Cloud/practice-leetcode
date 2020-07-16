function SuperType(name) { 
    this.name = name;
}
function SubType() {
    SuperType.call(this, "Nicholas");
    this.age = 29; 
}

SuperType.prototype.say = function() {
    console.log(1, this.name);
}
var instance = new SubType();

console.log(instance.name);
console.log(instance.say());