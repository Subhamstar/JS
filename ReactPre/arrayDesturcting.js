// const arr=[1,2,3];
// const[a,b,c]=arr;
// console.log(a);
// console.log(b);
// console.log(c);


// const arr=[1,2,3];

// const[x,,z]=arr;
// console.log(x);   //1
// console.log(z);   //3



// const arr=[5];
// const[x=1,y=2]=arr;
// console.log(x);
// console.log(y);



// <------- Reverse An Array ----->
// let a=1;
// let b=2;
// [a,b]=[b,a];
// console.log(a);    //2
// console.log(b);    //1


const arr=[1,2,3,4,5];
const [first,...rest]=arr;
console.log(first);
console.log(rest);