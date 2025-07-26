const person={
    name:"Subham",
    age:21,
}
// const {name,age}=person;
// console.log(name);
// console.log(age);


const {name,age,id=2411}=person;
console.log(name);
console.log(id);