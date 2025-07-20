

// setTimeout(function(){
//     console.log("timer");
// },5000);
// function x(y){
//     console.log("X");
//     y();
// }
// x(function y(){
//     console.log("Y");
// });


function attachEventListener(){
    let count=1;
    document.getElementById("clickMe").addEventListener("click",function (){
        document.getElementById("result").innerText="XOXO",
        document.getElementById("clickMe").innerText="Clicked";
        document.getElementById("count").innerText=count++;
        const bgColors = ['red', 'green', 'blue', 'yellow', 'purple','orange','skyblue','pink','babypink'];
        const randomIndex=Math.floor(Math.random()*bgColors.length);
        document.body.style.backgroundColor = bgColors[randomIndex];

    });
}
attachEventListener();  //this is called closer for data heiding in block scope 
