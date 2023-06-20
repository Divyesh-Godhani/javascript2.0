// Call Stack :~

// call stack is a mechanism used by the JavaScript engine to keep track of function calls. It follows a Last-In-First-Out (LIFO) structure, meaning that the last function that gets pushed into the stack is the first one to be popped out and executed.


function mutiply(a,b){
    return a * b;
}

function add(a,b){
    var sum = a + b;
    var product = mutiply(a,b);
    return sum + product;
}

function calculate(){
    var result = add(2,3);
    console.log(result);
}
calculate();