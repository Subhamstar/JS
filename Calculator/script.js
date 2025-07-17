function calculate(){
    const n1=parseFloat(document.getElementById('num1').value);
    const n2=parseFloat(document.getElementById('num2').value);
    const op=document.getElementById('operator').value.trim();
    let result;

    if(isNaN(n1)||isNaN(n2))result="Please enter a right value";
    else{
        switch(op){
            case '+':
                result=n1+n2;
                break;
            case '-':
                result=n1-n2;
                break;
            case '*':
                result=n1*n2;
                break;
            case '/':
                result=n1/n2;
                break;
            default:
                result="Use only +,_,*,/";
        }
    }
    document.getElementById('result').innerText=result;
}