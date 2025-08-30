// a Promises in js an eventual completion or failure of async operation
// it s have 3 state : pending,fulfilled,rejected
let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Data resolved"),1000)
})
promise.then(result=>console.log("result"))
.catch(err=>console.log(err));