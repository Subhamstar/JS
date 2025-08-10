document.getElementById("parent").addEventListener("click",()=>{
    console.log("Parent Clicked");
})
document.getElementById("child").addEventListener("click",()=>{
    console.log("Child Clicked");
})


// Event bubbling is the process where an event starts at the target 
// element and bubbles up through its ancestors in the DOM hierarchy.