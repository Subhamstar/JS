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



// function x(){
//     // var i=10;
//     for(var i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);// here i is closers
//     },i*1000)
//     // console.log("Hello");
// }
// }
// x();

// function x(){
//     // var i=10;
//     for(let i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);// here i is closers
//     },i*1000)
//     // console.log("Hello");
// }
// }
// x();

// function x(){
//     // var i=10;
//     for(var i=1;i<=5;i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);// here i is closers
//             },i*1000)
//         }
//         close(i);
//     }
//     // console.log("Hello");
// }
// x();




// callback Function 
// ---->> callback function passed an argument to another function and it executeted latter after some operation completes or under certain execution


// function hello(name,callback){
//     console.log("Hii",name);
//     callback();
// }
// var hi=function(){
//     console.log("Bye Bye  !!");
// }
// hello("Subham",hi);


//callback is function passeed is a argument another function   \\
function sum(a,b){
    console.log(a+b);
}

function calculate(a,b,sumcall){
    sumcall(a,b);
}
sum(4,6,sum);







l