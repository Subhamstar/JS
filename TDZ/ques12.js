// rest oprartor
// Purpose: Collect multiple elements into a single array or object.
// Used in function parameters to gather remaining arguments.
// Used in destructuring to get remaining properties or array elements.
const [first,...rest]=[2,4,5,7,9];
console.log(first);    // output will be 2
console.log(rest);


// spread operator
// Purpose: Expand an array or object into individual elements.
// Used in function calls to pass array elements.
// Used in array/object literals to copy or merge.
const arr=[3,4,6,9,1,3,1];
const arr2=[...arr,0,10,45];
console.log(arr2)