 this
 window
//  when all javascript page is null then js engine make global execution context that have this,window like keywords

var a=10;
function b(){
    var x=10;
}
console.log(a); // 10
console.log(b); // [Function: b]
console.log(this); // { a: 10, b: [Function: b] }
console.log(window); // { a: 10, b: [Function: b] }
// console.log(this===window); // true  
// console.log(this===globalThis); // true
// console.log(this===global); // true
// console.log(this===self); // true
// console.log(this===globalThis); // true
console,log(window.a); // 10
console.log(window.b); // [Function: b]



// javascript is looslly typed language
// javascript is dynamic typed language

var a;
console.log(a); // undefined
a=10;
console.log(a); // 10
a="hello";
console.log(a); // hello  


// javascript is single threaded language