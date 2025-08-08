// questin 1 
var variable =10;
(()=>{
    console.log(variable);
    variable=20;
    console.log(variable);
})();
console.log(variable);
var variable=30;


//question 2
foo=30;
console.log("FOO",foo);
var foo=100;
console.log("FOO",foo);




//question 3
var variable=10;
(()=>{
    foo=100;
    console.log(variable);
    var foo=100;
    variable=20;
    console.log(variable);
})();
console.log(foo);
console.log(variable);
var variable=30;





