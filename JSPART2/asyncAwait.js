const p=new Promise((resolve,reject)=>{
    resolve("Promise Resolved Value !!");
});


async function getData(){
    return p;
}

 

// async function getData(){
//     return "Namste";
// }
const data=getData();
data.then((data)=>{
    console.log(data);
});
// console.log(data);


// <----------Async Await---------------------->