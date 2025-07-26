// function changeText(event){
//     console.log(event);
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="SincosTani ❤️";
// }


// let fpara=document.getElementById("fpara");
// fpara.addEventListener('click',changeText);
// fpara.removeEventListener('click',changeText);

// let anchor = document.getElementById("fachor");
// anchor.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchor.textContent = "Hoheya Jii"; 
// });


// let paras=document.querySelectorAll('#wrapper p');
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener ('click',function(){
//         alert("You have Clicked on paras "+(i+1));
//     })
// }

// document.getElementById('grandparent').addEventListener('click',()=>{
//     console.log("Grandparent is called  !");
// })
// document.getElementById('parent').addEventListener('click',()=>{
//     console.log("Parent is called  !!");
// })
// document.getElementById('child').addEventListener('click',()=>{
//     console.log("Child is called  !!!");
// })
// o/p- child-parent-grandparent

document.getElementById('grandparent').addEventListener('click',()=>{
    console.log("Grandparent is called  !");
},true)
document.getElementById('parent').addEventListener('click',()=>{
    console.log("Parent is called  !!");
},true)
document.getElementById('child').addEventListener('click',()=>{
    console.log("Child is called  !!!");
},true)
//using event capturing over here
// o/p grandparent-parent-child
