// const cart=["shoes","pants","kurta"];
// createOrder(cart,function(orderId){
//     processedToPayment(orderId);
// });
// const promise=createOrder(cart);
// promises.then(function(orderId){
//     processedToPayment(orderId);
// });


// const GITHUB_API="https://api.github.com/users/subhamstar";

// const user=fetch(GITHUB_API);
// user.then(function(data){
//     console.log(data);
// })

// A promises in js is an object that represent the eventual completion of(or failure) in an asynchronous Operation.
//callback hell  -> Pyramid of doom
const cart=["shoes","pants","kurta"];
createOrder(cart,function(orderId){
    processedToPaymenrt(orderId,function (paymentInfo){
        dhowOrderSummery(paymentInfo,function(){
            updateWalletBalance();
        })
    })
});

createOrder(cart)
    .then((orderId) =>processedToPaymenrt(orderId))
    .then((paymentInfo)=>showOrderSummary(paymentInfo))
    .then((paymentInfo)=>updateWalletBalance(paymentInfo));
