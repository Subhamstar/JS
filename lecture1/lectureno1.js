// alert("Subham");
console.log("Hello World"); 
console.log("Subham"); 
console.log("This is my first JavaScript code");


// Variable declaration 
age=24
console.log(age); // 24
age=age+1; // 25
console.log(age); // 25
price=199.90
console.log(price); // 199.9
// String variable
name="Subham";
console.log(name); // Subham

x=null;
y=undefined;
console.log(x); // null
console.log(y); // undefined
console.log(typeof x); // object
console.log(typeof y); // undefined

console.log(console); //uncaught TypeError:


//let var const
let name1 = "Subham";
console.log(name1); // Subham
name1 = "Shubham";
console.log(name1); // Shubham
const name2 = "Subham";
console.log(name2); // Subham
// name2 = "Shubham"; // TypeError: Assignment to constant variable.
const PI = 3.14;
console.log(PI); // 3.14    
// PI = 3.14159; // TypeError: Assignment to constant variable.
// var is function scoped
var name3 = "Subham";   
console.log(name3); // Subham
name3 = "Shubham";
console.log(name3); // Shubham
// var can be redeclared
var name3 = "Shubham Kumar";
console.log(name3); // Shubham Kumar
// let is block scoped
let name4 = "Subham";   
console.log(name4); // Subham
name4 = "Shubham";  
console.log(name4); // Shubham
// let cannot be redeclared
// let name4 = "Shubham Kumar"; // SyntaxError: Identifier 'name4' has already been declared
// const is block scoped 


const student = {  //key:value
    name: "Subham",
    age: 24,
    course: "JavaScript",
    isEnrolled: true
};
console.log(student); // { name: 'Subham', age: 24, course: 'JavaScript', isEnrolled: true }
console.log(student.name); // Subham    
console.log(typeof student); // object
student.age = 25; // updating the age property
console.log(student.age); // 25



// ??number  and Math 
const score=100
console.log(score); // 100
console.log(typeof score); // number


const number=new Number(10);
console.log(number); // [Number: 10]
console.log(typeof number); // object

console.log(number.toString()); // '10'
console.log(number.valueOf()); // 10
const str=number.toString();
console.log(str); // '10'
console.log(typeof str); // string
console.log(str.length); // 2
// console.log(str.charAt(0)); // '1'
// console.log(str.charAt(1)); // '0'
// console.log(str.indexOf('1')); // 0
// console.log(str.indexOf('0')); // 1
// console.log(str.includes('1')); // true
// console.log(str); // '10'

// const otherNumber=123.8955
// console.log(otherNumber.toFixed(2)); // '123.90'
// console.log(otherNumber.toPrecision(4)); // '123.9'
// console.log(otherNumber.toPrecision(3)); // '124'


// const hundreds=1000000;
// console,log(hundreds.toLocaleString()); // '1,000,000'
// console.log(hundreds.toLocaleString('en-US')); // '1,000,000  



//++++++++++++++ Maths ++++++++++++++++
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 100); // random number between 0 and 100 