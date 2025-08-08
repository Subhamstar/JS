// Promises Question 1 
// function a(){
//     console.log("A")
// }

// setTimeout(()=>console.log("B"),0);

// a();

// console.log("C");
// Promise.resolve().then(()=>console.log("D"));



//  Question 2  // callback queue /Task Queue
// console.log("A");
// console.log("B");
// setTimeout(()=>console.log("C"),5*1000);
// console.log("D");



//question3
// ⭐✨ setTimeout/set Intervals/fetch is present in browsers (window object)  ⭐✨




//question4

async function getData() {
    return 2;
}
console.log("A");
console.log("B");
setTimeout(()=>console.log("C"),5*1000);
getData().then(()=>{console.log("I got the data")});
console.log("D");