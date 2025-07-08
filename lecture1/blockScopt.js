var a=100;
let b=200;
const c=300;
{
    var a=10; //this is called shadowing
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); //var is globally so value is change
console.log(b); // but let and const is blovked scope so let and const create a new scope 
console.log(c);