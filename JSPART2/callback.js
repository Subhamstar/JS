const cart=["shoes","pants","kurta"]

api.createOrder(cart, function(){
    api.processedPayment( function(){
        api.showOrderSummery(function(){
            api.updateWallet();
        });
    });
})

