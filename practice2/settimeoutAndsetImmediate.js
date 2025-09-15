setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

// setTimeout(fn, 0) schedules a callback after a minimum delay, so it goes into the timer queue and can be delayed. 
// setImmediate(fn) runs the callback immediately after the current I/O cycle, in the check phase of the event loop, 
// making it more predictable for running code right after I/O.