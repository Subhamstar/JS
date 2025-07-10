// let count=0;  // but let is global variable so thsis this is nort good solution for this we ues closers 
// document.getElementById("clickMe").addEventListener("click",function xyz(){
//  console.log("Button Clicked",++count);
 
//     // this is an anonymous function, it does not have a name   
//     this.textContent = "Clicked!"; // this refers to the button element that was clicked


// });
// callback function is store someware but when it is called its automatically comes back


function attachEventLiseners(){
    let count=0;  // but let is global variable so thsis this is nort good solution for this we ues closers 
    document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button Clicked",++count);
        // this is an anonymous function, it does not have a name   
        this.textContent = "Clicked!"; // this refers to the button element that was clicked
    });
}
attachEventLiseners();



// why remove event listener is important?
// because if we don't remove the event listener it will keep adding the event listener every time we click the button
// and it will keep increasing the count every time we click the button
// so we need to remove the event listener after we click the button once
//its vary heavy on the browser and it will slow down the browser
