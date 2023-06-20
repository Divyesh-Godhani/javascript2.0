// Promises

//a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations more easily by providing a more structured and manageable way to work with them.

// Promises have three states:

// Pending: The initial state. The promise is still undergoing the asynchronous operation.

// Fulfilled: The asynchronous operation completed successfully, and the promise has a resulting value.

// Rejected: The asynchronous operation failed, and the promise has a reason for the failure.


let mypromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const randomnumber = Math.random();
        if(randomnumber < 0.5){
            resolve(randomnumber);
        }else{
            reject("error : random number is two high");
        }
    }, 2000);
});

// consuming the promise

mypromise
.then((result) => {
    console.log("fulfiled",result);
})
.catch((error) => {
    console.log('rejected',error);
})