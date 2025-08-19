// DEbounce
// Debouncing is a technique used to limit the execution of a function.
// It ensures that a function is only executed after a certain delay has passed since the last time it was invoked.
// If the function is triggered again before that delay, the timer resets.




function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // reset timer if function called again
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example Usage:
const handleSearch = debounce((query) => {
  console.log("API Call with query:", query);
}, 1000);

// Simulate typing:
handleSearch("H");
handleSearch("He");
handleSearch("Hel");
handleSearch("Hell");
handleSearch("Hello"); 
// Only last call "Hello" executes after 1 second
