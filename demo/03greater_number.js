function GreaterNumber(a,b,c){
    console.log("numbers are : ", a,b,c)
    if(a>b && a>c) return a   + " is greater";
    if(b>a && b>c) return b  + " is greater";
    return c + " is greater";
}  
console.log(GreaterNumber(10,500,789))