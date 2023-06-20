// Closure :~

// closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from its outer scope even after the outer function has finished executing.

function outerfunction(){
    outervariable = "Hello ";

    function innerfunction(){
        console.log(outervariable + "world");
    }

    return innerfunction();
}

let closure = outerfunction();
console.log(closure);