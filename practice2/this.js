// console.log(this);  // window in js browser




const person = {
  name: "Subham",
  greet() {
    console.log(this.name);
  }
};

person.greet(); // Subham




function show() {
  console.log(this);
}
show(); // Window (or undefined in strict mode)


function greet() {
  console.log(this.name);
}

const user = { name: "Subham" };

greet.call(user);  // Subham
greet.apply(user); // Subham
greet.bind(user)(); // Subham



// In global scope → this refers to the global object (window in browsers).
// Inside an object method → this refers to that object.
// In arrow functions → this is lexically bound (takes value from surrounding scope).