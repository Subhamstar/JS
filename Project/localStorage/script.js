const btn=document.getElementById("btn");
const username=document.getElementById("username");
const user=document.getElementById("u-name");
btn.addEventListener("click",()=>{
    const value=username.value;
    localStorage.setItem("name",value);
    location.reload();
})

window.addEventListener("load",()=>{
    const value=localStorage.getItem("name");
    user.innerText=value; 
})