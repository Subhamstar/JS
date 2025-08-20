const btn=document.getElementById("btn");
const username=document.getElementById("username");
const userage=document.getElementById("userage");
const user=document.getElementById("u-name");
const age=document.getElementById("u-age");
btn.addEventListener("click",()=>{
    const value=username.value;
    localStorage.setItem("name",value);
    localStorage.setItem("age",userage.value);
    location.reload();
})

window.addEventListener("load",()=>{
    const value=localStorage.getItem("name");
    const uage=localStorage.getItem("age");
    user.innerText=value; 
    age.innerText=uage;
})