function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;  // hete a is override 
    return y; // return not a value its return reference for this reason a is override and return a=100;
}
var z=x();
console.log(z);
z();