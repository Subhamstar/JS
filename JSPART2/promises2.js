const cart=["shoes","pants","kurta"];
 
// <-----------TYPE-1--------------> 
// const promise=createOrder(cart); //orderId
// // console.log(promise);
// promise.then(function (orderId){
//     // proceedToPayment(orderId);
//     console.log(orderId);
// })
// <--------- TYPE-2-------------->

createOrder(cart) //orderId
// console.log(promise);
    .then(function (orderId){
        // proceedToPayment(orderId);
        console.log(orderId);
        return orderId;
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(orderId){ //called all time
        console.log("No Matter what happens,I will defininetly be called ..")
    })
 //if catch function is called then any  .then called then
//  then function clalled all time they not nedd error handleing
// call all time aftet catch is called 


// /producer
function createOrder(cart){

    const pr=new Promise(function(resolve,reject){ 
        if(!validateCart(cart)){
            const err=new Error("Cart is not valid");
            reject(err);
        }
        const orderId=12345;
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful");
    })
}

function validateCart(cart){
    return true;
}

 