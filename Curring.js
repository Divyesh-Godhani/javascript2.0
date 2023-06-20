// curring

// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It allows you to create more specialized functions by partially applying arguments to a function and returning a new function that takes the remaining arguments.

// regular function without curring

function add(a,b,c){
    return a+b+c;
}
console.log(add(1,2,3)); // output is 6

// Curried version of the add function

function curryadd(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}
console.log(curryadd(1)(2)(3)); // output is 6

// Partially applying arguments

const addtwo = curryadd(2);
console.log(addtwo(3)(4)); // output is 9