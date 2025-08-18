// higher order function 
// In JavaScript, a higher-order function is a function that either takes another function as an argument,
// returns a function, or does both. This makes JavaScript very flexible because functions are treated 
// as first-class citizens.
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

// const double = multiplier(2);
// console.log(double(5));  


console.log(multiplier(8)(3));
