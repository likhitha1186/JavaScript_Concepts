function NumberPalindrome(num){
    let lastDigit, rev=0, originalNum=num;
    while (num>0) {
        lastDigit= num%10;
        rev=rev*10+lastDigit;
        num=Math.floor(num/10);
    }
    if(rev === originalNum) return num + " is palindrome";
    return num + " is not a palindrome"
}
console.log(NumberReverse(123456))

function NumberReverseUsingBuiltinFunc(num){
    let originalNum=num;
    let rev= Number(num.toString().split('').reverse().join(''))

    if(rev === originalNum) return num + " is palindrome";
    return num + " is not a palindrome"
}
console.log(NumberReverseUsingBuiltinFunc(123456))