console.log(12==13);

console.log(12=="12"); //it can check only value but donot check type 
console.log(12==="12")

console.log(12!=12);
console.log(12!=="12");


console.log(0.1+0.2 !== 0.3);  //store double presision

console.log([]== ![]);    // ![]js understand that [] is empty so return true ans for ! operator becomes false and fist one thins that this is ""or 0 so  
// //     "=="    -> it compaires values after performing type conversion if needed
// //     "==="   -> it checks both value and type without converting



console.log(typeof null);    //object
console.log([] + []);      // ""
console.log(true + true);  //2

console.log("b" + "a" + +"a"+"a");    //"ba"+NaN +"a" 