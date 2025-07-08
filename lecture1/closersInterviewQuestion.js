// function x(){
//  var i=1;
//  setTimeout(function(){  // this is a closure, it has access to the outer function's scope  
//     console.log(i);
//  },1000);   
//  console.log("hello");
// }
// x();  
// o/p : heelo afetr 1  section 1 will n=be print



// function x(){
//  var i=1;
//  for(var i=1;i<=5;i++)
//  setTimeout(function(){  // this is a closure, it has access to the outer function's scope  
//     console.log(i);  //this is referencing the last value of i which is 6, so it will print 6 five times  and this is reference
//  },i*1000);   
//  console.log("hello");
// }   this is use var so it will not create a new scope
// function x(){
//  var i=1;
//  for(let i=1;i<=5;i++)  //let is block scope and create a new copy every time
//  setTimeout(function(){  // this is a closure, it has access to the outer function's scope  
//     console.log(i);  //this is referencing the last value of i which is 6, so it will print 6 five times  and this is reference
//  },i*1000);   
//  console.log("hello");
// }
// x();  

// the output is 66666 because of the closer

function x(){
 var i=1;
 for(var i=1;i<=5;i++){  //let is block scope and create a new copy every time
    function closer(i){  // when use var then i use closer for evry state we use new scope 
    setTimeout(function(){  // this is a closure, it has access to the outer function's scope  
        console.log(i);  //this is referencing the last value of i which is 6, so it will print 6 five times  and this is reference
    },i*1000);   
    console.log("hello");
    }
    closer(i);  // this will call the closer function and it will create a new scope for i
    // this will create a new scope for i and it will print the value of i
    
  // this will print the value of i for each iteration
  // so it will print 1, 2, 3, 4,
  // and 5 after 1 second, 2 seconds, 3 seconds, 4 seconds, and 5 seconds respectively
  // so the output will be 1, 2, 3, 4,
  }
}
x();  
