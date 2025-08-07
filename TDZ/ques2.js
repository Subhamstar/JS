myFun();
var myFun=function (){ //in memory creation time this "Undefined"
    console.log("First..");
}
myFun();
function myFun(){
    console.log("Second..");
}
myFun();

//