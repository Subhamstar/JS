"use strict";


// console.log(this);  //globalObject
// // in browser this===window, node.js this==={}

// function x(){
//     // the value depends on strict or non strict mode
//     console.log(this);
// }
// x(); //Non Strict :prints window ,Strict:prints undefined
// window.x();



// this inside a object`s method

// const obj={
//     a:10,
//     x:function (){
//         console.log(this); // here this is called methid 
//     }
// };
// obj.x();


// const obj={
//     a:10,
//     x:function (){
//         console.log(this.a);  //10
//     }
// };
// obj.x();


// Call Apply and bind methods
// const student={
//     name:"Akshay",
//     printName:function (){
//         console.log(this.name);
//     }
// }
// const student2={
//     name:"Deepika",
// }

// student.printName.call(student2);



// under Arrow Function
const obj={
    a:10,
    x:()=>{
        console.log(this);
    },
};

obj.x();