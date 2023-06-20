// Memory

// memory refers to the space where values, variables, objects, and other data are stored during program execution. JavaScript has an automatic memory management system that handles the allocation and deallocation of memory for you.

// Throughout the execution of the program, JavaScript's memory management system handles the allocation and deallocation of memory for these variables and their respective values. When a variable is no longer needed or goes out of scope, JavaScript automatically frees up the memory associated with it.

// It's important to note that JavaScript's memory management is automatic, and developers do not have direct control over memory allocation or deallocation. The JavaScript engine takes care of managing memory behind the scenes, allowing developers to focus on writing their code without worrying about memory management details.

var name = "nomy";
var age = 50;
var number = [1,2,3,4,5];
var person = { name :"john",age : 25}

function greet(){
    var message = "Hello " + name + "!";
    console.log(message);
}
greet();

