function PositiveNegative(num){
    if(num > 0) return num + " is positive";
    if(num < 0) return num + " is negative";
    return num + " is zero";
}

console.log(PositiveNegative(10));
console.log(PositiveNegative(-7));
console.log(PositiveNegative(0))