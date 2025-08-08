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




//question4   Promises 

// async function getData() {
//     return 2;
// }
// console.log("A");
// console.log("B");
// setTimeout(()=>console.log("C"),5*1000);
// getData().then(()=>{console.log("I got the data")});
// console.log("D");







//Question 5:  API

API="https://official-joke-api.appspot.com/jokes/random/9"
console.log("A");
console.log("B");
setTimeout(()=>console.log("C"),5*1000);
fetch(API)
  .then(res => res.json()) // Convert response to JSON
  .then(jokes => {
    jokes.forEach(joke => {
      console.log(`${joke.setup} - ${joke.punchline}`);
    });
  })
 .catch(err => console.error("Error fetching jokes:", err))
console.log("D");