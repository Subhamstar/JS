setTimeout(() => {
    console.log("timer ..")
}, (2000));

function x(y){
    console.log("X");
    y();
}

x(function y(x){
    console.log("Y");
});
