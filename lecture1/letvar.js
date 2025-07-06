// let&const declareation is hoisted to the top of the block scope, but they are not initialized.
console.log(b); //undefined
// var declaration is hoisted to the top of the function scope, and it is initialized to undefined.
// let and const are block scoped, var is function scoped.
// var is hoisted to the top of the function scope, and it is initialized to undefined

// let a=10;
// var b;
// b=20;
// console.log(b);


// console,log(a);  // ReferenceError: Cannot access 'a' before initialization
// // console.log(b); // undefined
// let a=10;
// var b=20;
// console.log(window.a); //   // window.a is the global variable a this giver resfferen error



// let a=10;
// let a=20;   this gives syntex error a has already been declared
// console.log(a);


var a=10;
var a=20;  // this is allowed because var is function scoped and it is hoisted to the top of the function scope
console.log(a); // 20



// const declaration
// const a=10;
// const a=20;  // this gives syntex error a has already been declared
// console.log(a); // 10



// let a;
// const b; // const b=10;  // this gives syntex error b must be initialized