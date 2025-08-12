//  var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
     
// }
       
// var getName = obj.getName;
       
// var obj2 = {name:"akshay", getName };
// obj2.getName();   

var obj1 = {
    address : "Mumbai,India",
    getAddress: function(){
    console.log(this.address); 
  }
}
   
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
obj2.getAddress();    //this gives error 