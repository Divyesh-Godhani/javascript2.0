// Event Loop 

//  the event loop is a mechanism that allows for asynchronous and non-blocking processing of events and tasks. It ensures that JavaScript remains single-threaded while handling multiple tasks efficiently. The event loop continuously monitors the execution stack and the task queue, processing tasks in a specific order.

console.log("start");

setTimeout(() => {
    console.log("timeout callback");
}, 0);

Promise.resolve().then(function(){
    console.log("promise resolve");
})

console.log("end");