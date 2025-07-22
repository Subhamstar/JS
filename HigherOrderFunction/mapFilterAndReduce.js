//  <-------------MAP-------------------->

// const arr=[5,1,3,2,6];


// //Double=[10,2,6,8,12]

// // Triple=[15,3,9,6,18]

// // Binary=["101","1","11","10","110"]


// function double(x){
//     return 2*x;
// }

// function triple(x){
//     return 3*x;
// }
// function binary(x){
//     return x.toString(2);
// }
// const output=arr.map(double);
// console.log(output);
// console.log(arr.map(triple));
// console.log(arr.map(binary));


// <--------------Filter----------------->




// const arr=[5,1,3,2,6];
// function isOdd(x){
//     return x%2;
// }
// const output=arr.filter(isOdd);
// console.log(output);

// console.log(arr.filter((x)=> x<3));







// <-------------------Reduce-------------->


// const arr=[5,1,3,2,6];
// function findSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));
// const output=arr.reduce(function(acc,curr){ //acc=accumulator // curr=current 
//     acc=Math.max(acc,curr);
//     return acc;
// },0)
// console.log(output);