console.log("Start");
setTimeout(function cbT(){
    console.log("CB settimeOut");
},5000);
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(function cbF(){
    console.log("CB Netflix");
})
.catch(function errorHandler() {
    console.log("Fetch failed");
});
console.log("end");