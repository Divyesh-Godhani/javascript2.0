async function myweather(){

let delhiwhether = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Delhi weather 27");
    }, 1000);
})

let mumbaiwhether = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("mumbai weather 38");
    }, 4000);
})

let delhiwhetherw = await delhiwhether;
let mumbaiwhetherw = await mumbaiwhether;

console.log(delhiwhetherw);
console.log(mumbaiwhetherw);

}
myweather();