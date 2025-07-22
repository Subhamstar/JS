console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
},5000);
console.log("End");  //this takes 5s

let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<=startDate+10000){
    endDate=new Date().getTime();  //this takes 10s
}
console.log("While Expires");