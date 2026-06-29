function print(name){
   console.log("Hello World!");
   console.log("My name is :", name);
}
print("Likhitha")

function addNumbers(a,b){
    console.log("Given number are:", a,b);
    return a+b;
}
console.log(addNumbers(10,20));

function greaterNumber(a,b,c){
    console.log("Given numbers are",a,b,c);
    if(a>=b && a>=c) return a+ " is greater";
    if(b>=a && b>=c) return b + " is greater";
    return c + " is greater";
}
console.log(greaterNumber(10,78,99));

function print1To10(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
print1To10();

function positiveOrNegativeNum(num){
    if(num>0) return num + " is a positive number";
    if(num<0) return num + " ia a negative number";
    return num + " is zero";
}
console.log(positiveOrNegativeNum(0));
console.log(positiveOrNegativeNum(45));
console.log(positiveOrNegativeNum(-78));

function MultiplicationTableOfNum(num){
    for(let i=1;i<=10;i++){
        console.log(num + " * "+ i + " = " + (num *i ));
    }
}
MultiplicationTableOfNum(10);

function SumOfNauralNumbers(){
    let sum=0;
    for(let i=1;i<=10;i++){
        sum+=i;
    }
    console.log(sum);
}
SumOfNauralNumbers();

function checkNumberIsZero(num){
    if(num==0) return num + " is zero";
    return num + " is not zero";
}
console.log(checkNumberIsZero(89));
console.log(checkNumberIsZero(0));

function evenOrOdd(num){
    if(num%2==0) return num + " is even number";
    return num + " is odd number";
}
console.log(evenOrOdd(15));
console.log(evenOrOdd(22));

function stringReverse(str){
    let rev="";
    for(let i = str.length-1; i>=0; i--){
        rev = rev+ str.charAt(i)
    }
    console.log(rev)
}
stringReverse("Likhitha");

function stringReverseUsingBuiltInFunc(str){
    let rev = str.split("").reverse().join("");
    console.log(rev)
}
stringReverseUsingBuiltInFunc("Likhitha");

function stringPalindrome(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev = rev + str.charAt(i);
    }
    if(rev === str) return str+ " is a palindrome string";
    return str + " is not a palindrome";
}
console.log(stringPalindrome("level"));
console.log(stringPalindrome("date"));

function stringPalindromeUsingBuiltInFunc(str){
    let rev = str.split("").reverse().join("");
    if(rev === str ) return str + " is palindrome string";
    return str + " is not a palindrome string";
}
console.log(stringPalindromeUsingBuiltInFunc("mom"));
console.log(stringPalindromeUsingBuiltInFunc("mother"));

function reverseNumbers(num){
    let rev=0, lastDigit;
    while(num>0){
        lastDigit = num %10;
        rev = rev *10+ lastDigit;
        num =Math.floor(num/10);
    }
    console.log(rev);
}
reverseNumbers(123456);

function reverseNumberUsingBuiltInFunc(num){
    let rev = Number(num.toString().split("").reverse().join(""));
    console.log(rev)
}
reverseNumberUsingBuiltInFunc(123456);

function ReverseNumbers(num){
    let rev= Number(Math.abs(num).toString().split("").reverse().join(""));
    return num>=0?rev:-rev
}
console.log(ReverseNumbers(123456));
console.log(ReverseNumbers(-123456));

function palindromeNumber(num){
    let rev=0,lastDigit, originalNum=num;
    while(num>0){
        lastDigit= num % 10;
        rev = rev *10+ lastDigit;
        num = Math.floor(num/10);
    }
    if(rev === originalNum) return originalNum + " is a palindrome number";
    return originalNum + " is not a palindrome number";
}
console.log(palindromeNumber(123321));
console.log(palindromeNumber(123));

function palindromeNumbersWithBuiltInFunction(num){
    let originalNum=num;
    let rev = Number(num.toString().split("").reverse().join(""));

    if(rev === originalNum) return originalNum + " is  a palindrome number";
    return originalNum + " is not a palindrome number";
}
console.log(palindromeNumbersWithBuiltInFunction(121));
console.log(palindromeNumbersWithBuiltInFunction(456));

function FactorialNumbers(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact =fact * i;
    }
    console.log(fact);
}
FactorialNumbers(5);

function FibonacciNumbers(num){
    if(num == 0) return num;
    if(num == 1) return num;
    return FibonacciNumbers(num-1)+ FibonacciNumbers(num-2);
}
console.log(FibonacciNumbers(5));

function FibonacciNumberSeries(num){
    let a=0,b=1,c;
    for(let i =1;i<= num ; i++){
        console.log(a+"");
        c=a+b;
        a=b;
        b=c;
    }
    console.log();
}
FibonacciNumberSeries(5);

function swappingNum(a,b){
    console.log("Given numbers are:", a,b)
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a,b)
}
swappingNum(10,20)

function PrimeNumbers(num){
    let count=0;
    for(let i=1; i<=num;i++){
        if(num % i ==0){
            count++;
        }
    }
    if(count==2){
        console.log(num + " is a prime number")
    }
    else{
        console.log(num + " is not a prime number")
    }
}
PrimeNumbers(10);
PrimeNumbers(59);

function PrimeNumbersSeries(num){
    for(let i = 2; i<= num; i++){
        let count =0;
        for(let j=1; j<=i;j++){
            if(i % j == 0){
                count++;
            }
        }
        if(count==2){
            console.log(i);
        }
    }
}
PrimeNumbersSeries(29);

function CapitalAndSmallLetters(){
    let sentence = "My husband name is Shashi Kumar ";
    let words = sentence.split("");
    let caps="", small="";

    for(let i=0; i<words.length;i++){
        let word = words[i];
        if(word>='a'&& word<='z'){
            small+=word;
        }else if(word>='A'&& word<='Z'){
            caps+= word;
        }
    }
    console.log("Capital letters are :", caps);
    console.log("Small letters : ", small);
}
CapitalAndSmallLetters();

function LargestWordSentence(){
    let sentence = " My Husband name is Shashi Kumar";
    let words = sentence.split(" ");
    let largest="";

    for(let word of words){
        if(word.length>largest.length){
            largest=word;
        }
    }
    console.log(largest);
}
LargestWordSentence();

function vowelsAndConsonant(){
    let sentence = " My husband name is Shashi Kumar ";
    let words = sentence.split("");
    let vowels = "aeiouAEIOU ";
    let vowelHolder="", consonantHolder="";

    for(let i =0; i<words.length;i++){
        let word = words[i];
        if(word.match(/[a-zA-Z]/)){
            if(vowels.includes(word)){
                vowelHolder+= word;
            }else{
                consonantHolder+=word;
            }
        }
    }
    console.log("vowels are:", vowelHolder);
    console.log("consonants are :", consonantHolder);
}
vowelsAndConsonant()