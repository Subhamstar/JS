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
