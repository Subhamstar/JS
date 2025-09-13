function sum(a,b){
    return a+b;
}
function solve(a,b,exp){
    return exp(a,b);
}
console.log(solve(8,9,sum));