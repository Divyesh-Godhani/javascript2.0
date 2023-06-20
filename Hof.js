// HOF - Higher Order Function

// A Higher-Order Function is a function that takes one or more functions as arguments and/or returns a function as its result.

// Example 1:

function greet(name){
    console.log("Hello " + name + "!");
}

function inputuser(callback){
    let name = prompt("enter your name");
    callback(name);
}
inputuser(greet);

// Example 2:

function mutiplyby(factor){
    return function(number){
        return number * factor;
    }
}

let double = mutiplyby(2);
console.log(double(5));