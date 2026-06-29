function NumberReverse(num){
    let lastDigit, rev=0;
    while (num>0) {
        lastDigit= num%10;
        rev=rev*10+lastDigit;
        num=Math.floor(num/10);
    }
    return rev;
}
console.log(NumberReverse(123456))


function NumberReverseUsingBuiltinFunc(num){
    return Number(num.toString().split('').reverse().join(''))
}
console.log(NumberReverseUsingBuiltinFunc(123456))

function NumberReverseForNegative(num) {
    if (num >= 0) return num;
    return -Number(Math.abs(num).toString().split('').reverse().join(''));
  }
  
  console.log(NumberReverseForNegative(123456));   // 123456
  console.log(NumberReverseForNegative(-456123));  // -321654
  console.log(NumberReverseForNegative(-1200));    // -21
  console.log(NumberReverseForNegative(-98.76));   // -67.89  


  function NumberReverseFunc(num) {
    let rev = Number(Math.abs(num).toString().split('').reverse().join(''));
    return num < 0 ? -rev : rev;
  }
  
  console.log(NumberReverseFunc(123456));   // 654321
  console.log(NumberReverseFunc(-456123));  // -321654
  console.log(NumberReverseFunc(1200));     // 21
  console.log(NumberReverseFunc(-98.76));   // -67.89
  
console.log("***************************************************************");

function bothPositiveAndNegative(num){
    let rev = Number(Math.abs(num).toString().split('').reverse().join(''))
    return num < 0 ? -rev : rev;
}
console.log(bothPositiveAndNegative(-654321))
console.log(bothPositiveAndNegative(654321));
