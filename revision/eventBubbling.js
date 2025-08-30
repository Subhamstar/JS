document.getElementById("parent").addEventListener("click",()=>{
    console.log("Parent Clicked");
})

// “Event bubbling is how events propagate in the DOM. When an event occurs on a child element, 
// it first runs its own event handler and then moves up to its parent, grandparent, 
// and so on until it reaches the document root.

document.getElementById("child").addEventListener("click",()=>{
    console.log("Child Clicked");
})


// Event bubbling is the process where an event starts at the target 
// element and bubbles up through its ancestors in the DOM hierarchy.