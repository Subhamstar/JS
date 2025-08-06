function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();
}
x();
// A closure is a feature in JavaScript where a function "remembers" the variables from its lexical scope,even if the function is executed outside that scop




// function  x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// <---------------closer---------->
// closer is a function binded tigether to its lexical scope
// it is a function that has access to its own scope, the outer function's scope,



// function  x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     // return y;
//     // y(); // this will print 7
//     // because y has access to its own scope and the outer function's scope
//     return y;
// }
// var z=x();
// console.log(z); // [Function: y]
// z();  // this is called closure, it is a function that has access to its own scope, the outer function's scope, and the global scope
// function along with their lexical scope is called closure
// closure is a function that has access to its own scope, the outer function's scope,

// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();


// uses of closures:
//  module Design Pattern
// -Currying
// -Function Like once
//memoize
// -Iteratoors
//  and many more
