// console.log(this);  //print all window object 

// const obj={
//     fn1:function() {
//         console.log(this);
//     },
//     fn2:()=>{
//         console.log(this);
//     },
// };

// obj.fn1();  // this print obj 
// obj.fn2();  // this print window object






// const person={
//     name:"subham",
//     fn1:function(){
//         console.log(this); 
//     }
// }

// // person.fn1();  // this frint whole person
// person.fn1.call();





const obj={
    name:"Subham",
    print:()=>{
        console.log(this.name);
    },
    print2:function (){
        console.log(this.name);
    }
}
obj.print(); // undefined will be print  
obj.print2();