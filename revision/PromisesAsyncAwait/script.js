async function getData(){
    let result= await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(result)
}
getData();