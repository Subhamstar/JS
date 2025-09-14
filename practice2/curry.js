// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(2,3,5));


// Currying is a technique in JavaScript where a function with multiple arguments is transformed 
// into nested functions, each taking a single argument, allowing partial application of functions.
function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(add(3)(6)(5));