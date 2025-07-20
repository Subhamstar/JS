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

function x(){
    // var i=10;
    for(var i=1;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i);// here i is closers
            },i*1000)
        }
        close(i);
    }
    // console.log("Hello");
}
x();