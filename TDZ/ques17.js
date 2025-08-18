function greet(name){
    return `Hello, ${name}`;
}
function User(callback){
    let name="Subham";
    return  callback(name);
}
console.log(User(greet));