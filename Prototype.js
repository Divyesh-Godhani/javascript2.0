// Prototype

//prototype is an object that serves as a blueprint for other objects. It is a mechanism through which object inheritance is implemented. Every JavaScript object has a prototype, which can be either another object or null. When you access a property or method on an object, JavaScript checks if the object itself has that property or method. If not, it looks up the prototype chain until it finds the property or reaches the end of the chain.

// create a constructor function

function Person(name,age){
    this.name = name;
    this.age = age;
}

// Add a method to the prototype of the person constructor

Person.prototype.sayhello = function() {
    console.log('hello, my name is ' + this.name); 
}

// Create an instance of Person
var john = new Person('John', 25);

// Access properties

console.log(john.name);
console.log(john.age);

// Call the method defined in the prototype

john.sayhello();