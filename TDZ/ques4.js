for(var i=0;i<10;i++){
    setTimeout(()=>console.log(i),i*1000);
}
// // print : - 10 10 10 10 10 10 10 10 10 10

for(let i=0;i<10;i++){
    setTimeout(()=>console.log(i),1000);
}
//  print : - 1,2 3,4 ....10

for(var i=0;i<10;i++){
    function ab(j){
        setTimeout(()=>console.log(j),j*1000);  // everytime copy of i
    }
    ab(i);
}