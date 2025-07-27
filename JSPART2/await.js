// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved Value !!");
//     },10000);
//     // resolve("Promise Resolved Value !!");
// })


// //await can only be used inside an async function
// async function handlePromise(){
//     //JS Engine was waiting for program
//     console.log("Hello World !!");
//     const val1=await p;
//     console.log("Namaste JabvaScript 1 !!");
//     console.log(val1);


//     const val2=await p;
//     console.log("Namaste JabvaScript 2 !!");
//     console.log(val2);
// }
// handlePromise();




// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved Value !!");
//     },5000);
//     // resolve("Promise Resolved Value !!");
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved Value !!");
//     },10000);
//     // resolve("Promise Resolved Value !!");
// })


//await can only be used inside an async function
// async function handlePromise(){
//     //JS Engine was waiting for program
//     console.log("Hello World !!");
//     const val1=await p1;
//     console.log("Namaste JabvaScript 1 !!");
//     console.log(val1);


//     const val2=await p2;
//     console.log("Namaste JabvaScript 2 !!");
//     console.log(val2);
// }
// handlePromise();



// function getData(){
//     p.then((res)=>console.log(res));
//     console.log("Namaste JavaScript");
// }

// getData();



// <---------------Daily Use------------------->
  
// const API_URL="https://api.github.com/users/subhamstar";

// async function handlePromise(){
//    const data=  await fetch(API_URL);
//    const jsonValue= await data.json();
//    console.log(jsonValue);
// }
// handlePromise();


const API_URL="https://api.github.com/users/s0975uar";

// type 1 handle error
// async function fetchPromise(){
//     try{
//         const data=await fetch(API_URL);
//         const jsonValue=await data.json();
//         console.log(jsonValue);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// fetchPromise();


//type 2 handle error
async function fetchPromise(){
    const data=await fetch(API_URL);
    const jsonValue=await data.json();
    console.log(jsonValue);
}
fetchPromise().catch((err)=>console.log(err));


