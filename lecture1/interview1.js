//<------------------ Closer------------------->
// 1.what is Closer?
// closer is a combination of function of and its lexical scope bundle together 
//  each and every function access its lexical environment  and executed other schope 
//  : code snippet
// function outer(){
//     var a=10;
//     function inner(){ // inner have access the lexical outer environment in this environment this is closer 
//         console.log(a);
//     }
//     return inner; // this will return the inner function which has access to the outer function's scope
// }
// outer()(); // this will call the outer function and return the inner function which will print the value of a

// function outer(b){  //this also cl=alled closer beacuase b is outside of the scope in the inner function  so bis treated as the same way
//     var a=10;
//     function inner(){ // inner have access the lexical outer environment in this environment this is closer 
//         console.log(a,b);
//     }
//     return inner; // this will return the inner function which has access to the outer function's scope
// }
// outer("heelo..")(); // this will call the outer function and return the inner function which will print the value of a

//  Relation of schope chaine of closer
// function outest(){
//     var c=100;
//     function outer(b){  //this also cl=alled closer beacuase b is outside of the scope in the inner function  so bis treated as the same way
//         var a=10;
//         function inner(){ // inner have access the lexical outer environment in this environment this is closer 
//             console.log(a,b,c);
//         }
//         return inner; // this will return the inner function which has access to the outer function's scope
//     }
//     return outer; // this will return the outer function which has access to the outer function's scope
// }
// outest()("heelo..")(); // this will call the outer function and return the inner function which will print the value of a



//Advantages of closers
// 1.function currying
// 2.data hiding suppose we like other function other piece of code
// 3.partial application
// 4.memoization

// privacy and data hiding example
// function counter(){
//     var count=0;
//     function incrementCounter(){
//         count++;
//     }
// }
// console.log(count);  //this gives refference error because of data hiding 

//Access it
// function counter(){
//     var count=0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// // console.log(count);  //this gives refference error because of data hiding 
// var counter1=counter();
// counter1(); // this will increment the count by 1
// counter1(); // this will increment the count by 1


// var counter2=counter();
// counter2(); // this will increment the count by 1
// counter2(); // this will increment the count by 1


// for better way to access the count and decrement the count
// we can use this keyword to access the count and decrement the count
// this is called function constructor
// function counter(){
//     var count=0;
//     this.incrementCounter=function(){
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter=function(){
//         count--;
//         console.log(count);
//     }
// }

// var counter1=new counter();
// counter1.incrementCounter(); // this will increment the count by 1
// counter1.incrementCounter(); // this will increment the count by 1



// Disadvantages of Closers
//  consume lot of memory if not handle properly then can leads to memory heaks

// what is garbage callactior ??
// In JavaScript, Garbage Collection (GC) is an automatic memory management feature that helps free up memory that is no longer needed by a program. JavaScript uses a garbage collector to identify and remove unused objects, ensuring efficient memory usage and preventing memory leaks.

function a(){
    var x=0,z=10;
    return function b(){
        console.log(x);
    }
}
var y=a();  //when it executed then z will removed by memory
