// Function composition in JavaScript is the process of combining smaller functions to build 
// more complex ones, where the output of one function becomes the input of another.

function add(a,b){
    return a+b;
}

function square(a){
    return a*a;
}
function composeTwoFunction(fn1,fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    }
}
let task=composeTwoFunction(add,square);
console.log(task(2,3));
