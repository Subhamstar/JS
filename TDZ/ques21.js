const fetchData=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Data Received"),1000);
})
fetchData
    .then(data=>console.log(data))      // success
    .catch(err=>console.log(err))       //error
    .finally(err=>console.log("Done")); //always run 
