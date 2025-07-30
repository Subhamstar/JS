// 1.what is Anonymous Function ?
// a function with out  a name it salso called anonymous function 


setTimeout(function(){
    console.log("This runs after 2 second ..");
},2000);


const sum=(a,b)=>a+b;
console.log(sum(3,23));




// 2.what are first class function ?  -->Function are treated like values 
const sayHi=function(){
    console.log("HII !!");
}
sayHi();




//function statement
// A function statement, also called a function declaration, 
// is a function defined with the function keyword and a name.
// It is hoisted, so it can be called even before it's defined in the code.
great();
function great(){
    console.log("Got placed !!🪴");
}


// a(); // this will call the function a and print "hello from a"
// function a(){
//     console.log("hello from a");
// }
// a();






//function expression
// A function expression is when a function is assigned to a variable.
// It can be anonymous or named, but unlike function statements, function 
// expressions are not hoisted, so you can’t call them before they are defined.

const greetExpr=function(){
    console.log("Hi");//this function are treated like a value and this is not hoisted 
};





// b();this is called hoisting, it will give error because b is not defined yet

// var b=function(){
//     console.log("hello from b");
// }
// b();

// //Annnymos Function
// function(){

// }







// Difference betwwn Parameter and argumnt
// var b=function(param1,param2){ // param1 and param2 is called is parameter
//     console.log("heelo");
// }
// a(1,2); //this is called 

// Parameter :  A variable listed in Function defination
// Argumnet : The actual value paessed when calling the function 






// Arraow function
// Arrow function is Shorter synex for writing functions,introducd in ES6
const add1=(a,b)=>a+b;
console.log(add1(8,4));


const add2= function(a,b){
    return a+b;    
}
console.log(add2(9,123));
