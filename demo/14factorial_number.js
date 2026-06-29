function FactorialNumber(num){
    let fact=1;

    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}

console.log(FactorialNumber(5));
console.log(FactorialNumber(7))