const users=[
    {firstName:"Akshay",lastname:"Saini",age:26},
    {firstName:"Donald",lastname:"Trump",age:71},
    {firstName:"Elon",lastname:"Mask",age:55},
    {firstName:"Deepeka",lastname:"Padukon",age:26},
];

///list of full name ["akshay saini","donald tramp"....]


// function add(x){
//     return x.firstName+" "+x.lastname;
// }
// const output=users.map(add);
// console.log(output);


// hoe many age is same like here26
// {26:2,71:1,50:1}

const output=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];    
    } else {
        acc[curr.age]=1;
    }   
    return acc;
},{});

console.log(output);

console.log(users.filter((x)=>x.age<30).map((x)=>x.firstName))