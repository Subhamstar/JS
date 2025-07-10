setTimeout(function (){
    console.log("timer");
},5000);
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
})
// with thi callback function and setTimeout function we can achive javascript is asynchronous function