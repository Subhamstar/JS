console.log(this);  // window in js browser




const person = {
  name: "Subham",
  greet() {
    console.log(this.name);
  }
};

person.greet(); // Subham
