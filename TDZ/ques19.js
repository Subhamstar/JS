// Callback Function bext Answer
function sum(a,b){
    console.log(a+b);
}
function calculate(a,b,sumCall){
    sumCall(a,b);
}
calculate(8,9,sum);
