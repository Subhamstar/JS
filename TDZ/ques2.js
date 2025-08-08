myFun();
var myFun=function (){ //in memory creation time this "Undefined"
    // when this is created then this is "Undefined"
    console.log("First..");
}
myFun();
function myFun(){
    console.log("Second..");
}
myFun(); //overwrite

//