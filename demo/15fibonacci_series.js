function FibonacciNumber(num){
    if(num==0) return num;
    if(num==1) return num;
    return FibonacciNumber(num-1)+ FibonacciNumber(num-2)
}
console.log(FibonacciNumber(5))

function FibonacciNumberSeries(num){
    let a=0,b=1,c;
    for(let i=1; i<=num;i++){
        console.log(a+ " ")
        c=a+b;
        a=b;
        b=c;
    }
    console.log()
    return c
}
console.log(FibonacciNumberSeries(5));