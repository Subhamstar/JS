function x(){
   for(var i=1;i<=5;i++) {
    function close(x){
    setTimeout(function (){
        console.log(x);// its reverence to i not to i
    },x*1000);
    console.log("Subham Das");
    }
    close(i);
    }
}
x();