const radius=[3,1,2,4];
// const calculateArea=function (radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push((Math.PI*radius[i]*radius[i]).toFixed(2));
//     }
//     return output;
// }
// console.log("Hi");




const area=function(radius){
    return Math.PI*radius*radius;
}
const circum=function(radius){
    return Math.PI*2*radius;
}
const diaMeter=function(radius){
    return 2*radius;
}

const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,diaMeter));
console.log(calculate(radius,circum));
console.log(calculate(radius,area));


// console.log(calculateArea(radius));



// Functional programming is a style where we build programs using pure 
// functions, avoid changing data directly, and rely on immutable values. 
// In JavaScript, it’s supported because functions are first-class citizens,
// meaning we can pass them around, return them, and compose them together.
// Instead of loops and mutating arrays, we use methods like map, filter,
// and reduce to transform data in a clear, predictable way. This makes code
// easier to test, debug, and maintain.
