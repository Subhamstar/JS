const arr1=[1,2,3,4];
const arr2=[...arr1,5,6];
console.log(arr2);  // add or merging or append  in array

const nums=[1,2,3,4];
console.log(Math.max(...nums));// return max value form nums array

const name="subham";
const chars=[...name];
console.log(chars);// spread the string 

const ab="Subham";
const abc=[...[ab,"Das"]].join(" ");

console.log(abc);