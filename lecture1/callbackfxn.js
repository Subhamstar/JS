// setTimeout(function (){
//     console.log("timer");
// },5000);
// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// })
// with thi callback function and setTimeout function we can achive javascript is asynchronous function



function x(){
    // var i=10;
    for(var i=1;i<10;i++){
    setTimeout(function(){
        console.log(i);// here i is closers
    },3000)
    console.log("Hello");
}
}
x();