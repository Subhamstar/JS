// const users=[
//     {firstName:"Akshay",lastname:"Saini",age:26},
//     {firstName:"Donald",lastname:"Trump",age:71},
//     {firstName:"Elon",lastname:"Mask",age:55},
//     {firstName:"Deepeka",lastname:"Padukon",age:26},
// ];

///list of full name ["akshay saini","donald tramp"....]


// function add(x){
//     return x.firstName+" "+x.lastname;
// }
// const output=users.map(add);
// console.log(output);


// hoe many age is same like here26
// {26:2,71:1,50:1}

// const output=users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=++acc[curr.age];    
//     } else {
//         acc[curr.age]=1;
//     }   
//     return acc;
// },{});

// console.log(output);

// console.log(users.filter((x)=>x.age<30).map((x)=>x.firstName))










// <----------------------------Practice--------------------------------->
const arr=[1,2,3,4].map(num=>num*2);//creating a array by applying function each other
// arr.map(num=>num*2);
console.log(arr);




const even=[1,2,3,4,5,6,7,8].filter(num=>num%2===0);   ///retutn a new array only the items that match the condition
console.log(even);




const sum=[1,2,3,4].reduce((total,num)=>total+num,0);  //reduce the array in single value
console.log(sum);