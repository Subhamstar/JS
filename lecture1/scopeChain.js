// function a(){
//     console.log(b);
    
// }
// let b=10;
// // a(); 
// function a(){
//     c();
//     function c(){
//         console.log(b);
//     }

// }
// var b=10;
// a();  //scope : where you can access a variable


// Global exection context is created when the javascript engine starts executing the code.
        //  |memory|Code|
        //  |      |    |
        //  |      |    |
        //  |      |    |
        //  |      |    |
        //  |      |    |




function a(){
    console.log(b);
}
var b=10;
a();