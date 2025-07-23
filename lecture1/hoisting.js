 // console.log(x); // 7
// getName(); // Subham Kumar
// console.log(getName)
// var x=7;
// function getName(){
//     console.log("Subham Kumar");
// }
// console.log(x); // 7
// getName(); // Subham Kumar
// console.log(getName)
// Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.
// 
// 
// 
// differnece brteween undefined and not defined
// 1. Undefined: A variable that has been declared but not assigned a value is considered
// undefined. It exists in the scope but has no value.
// 2. Not Defined: A variable that has not been declared at all is considered not
// defined. Attempting to access it will result in a ReferenceError.
// 
// 

// <-------------------------------NEW-CODE----------------------------->
// console.log(getName); // undefined
// getName(); // TypeError: getName is not a function
var getName=()=>{
    console.log("Subham Kumar");  //when we use arrow function it will not hoist,it like variable
}
console.log(getName); // undefined
getName(); // TypeError: getName is not a function
// console.log(x); // ReferenceError: x is not defined
// console.log(getName); // ReferenceError: getName is not defined

// var getname2=7;
// console.log(getname2); // 7






// <---------------------------------------CALLSTACK--------------------------------------------->
// Call Stack is a data structure that keeps track of function calls in a program. It operates on a Last In, First Out (LIFO) principle, meaning the last function called is the first one to be executed.
// When a function is called, it is added to the top of the call stack. When the function completes its execution, it is removed from the stack. If a function calls another function, the new function is added to the top of the stack, and so on.    
// If an error occurs during the execution of a function, it can cause the call stack to unwind, leading to an error message that indicates where the problem occurred. 
// The call stack is essential for managing function execution, handling recursion, and tracking the flow of a program. It helps in debugging by providing information about the sequence of function calls leading to an error.    
