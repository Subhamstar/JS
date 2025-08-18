function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const log = debounce(() => console.log("Typing..."), 1000);
log(); log(); log(); // // Only last one executes after 1 sec
