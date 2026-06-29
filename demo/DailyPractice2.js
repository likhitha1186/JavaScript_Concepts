function printting(name){
      console.log("Good Morning",name)
}
printting("Likhitha");
console.log("****************************")

function addNumber(a,b){
    return a+b;
}
console.log(addNumber(10,20));
console.log("****************************");

function greaterNumber(a,b,c){
    if(a>b && a>c) return a + " is greater";
    else if(b>a && b>c) return b+ " is greater";
    else return c + " is greater";
}
console.log(greaterNumber(10,50,100));
console.log("****************************");

function print1To10(){
     for(let i=1;i<=10;i++){
        console.log(i);
     }
}
print1To10();
console.log("********************************");

function positiveNegetive(num){
    if(num>0) return num + " is positive number"
    if(num<0) return num + " is negetive number";
    else return num + " is a zero"
}
console.log(positiveNegetive(10));
console.log(positiveNegetive(-45));
console.log(positiveNegetive(0));console.log("********************************");

function multiplication(num){
    for(let i=1;i<=10;i++){
        console.log(num + " * " + i + " = " + (num*i));
    }
}
multiplication(10);
console.log("********************************");

function sumNaturalNum(){
    let sum=0;
    for(let i=1;i<=10;i++){
        sum += i;
    }
    console.log(sum)
}
sumNaturalNum();
console.log("********************************");

function checkNumberISZero(num){
    if(num===0) return num + " is a zero";
    else return num + " is not a zero";
}
console.log(checkNumberISZero(0));
console.log(checkNumberISZero(10));
console.log("********************************");

function evenOrOdd(num){
    if(num/2 == 0 ) return num + " is a even number";
    else return num + " is a odd number";
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(3));
console.log("********************************");

function reverseNum(num){
    let rev =0, lastDigit;
    while(num>0){
        lastDigit = num %10;
        rev = rev * 10+lastDigit;
        num = Math.floor(num/10);
    }
    return rev;
}
console.log(reverseNum(123));
console.log("********************************");

function reverseNumbersUsingBuiltIn(num){
    return rev= Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNumbersUsingBuiltIn(123));
console.log("********************************");

function reverseNumbers(num){
    let rev = Number(Math.abs(num).toString().split("").reverse().join(""));
    return num>0?rev:-rev;
}
console.log(reverseNumbers(123));
console.log(reverseNumbers(-123));
console.log("********************************");

function palindromeNum(num){
    let rev=0, lastDigit, originalNum=num;
    while(num>0){
        lastDigit = num%10;
        rev = rev*10+lastDigit;
        num=Math.floor(num/10);
    }
    if(rev===originalNum) return originalNum + " is a palindrome number";
    else return originalNum + " is not a palindrome number";
}
console.log(palindromeNum(123321));
console.log(palindromeNum(123));
console.log("********************************");

function palindromeNumbersWithBuiltInFunction(num){
    let rev = Number(num.toString().split("").reverse().join(""));
    if(rev===num) return num + " is a palindrome number";
    else return num + " is not a palindrome number";
}
console.log(palindromeNumbersWithBuiltInFunction(121));
console.log(palindromeNumbersWithBuiltInFunction(12));
console.log("********************************");

function reverseString(str){
    let rev="";
    for(let i = str.length-1;i>=0;i--){
        rev = rev+ str.charAt(i);
    }
    console.log(rev);
}
reverseString("Likhitha");
console.log("********************************");

function reverseStringUsingBuiltInFunc(str){
    return rev = str.split("").reverse().join("");
}
console.log(reverseStringUsingBuiltInFunc("Likhitha"))
console.log("********************************");

function factorialNum(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log(fact);
}
factorialNum(5);
console.log("********************************");

function FibonacciNumber(num){
    if(num==0) return num;
    if(num==1) return num;
    return FibonacciNumber(num-1)+FibonacciNumber(num-2);
}
console.log(FibonacciNumber(7));
console.log("********************************");

function FibonacciNumberSeries(num){
    let a=0,b=1,c;
    for(let i=1;i<num;i++){
        console.log(a+"");
        c=a+b;
        a=b;
        b=c;
    }
    console.log("sum:",c)
}
FibonacciNumberSeries(7);
console.log("********************************");

function swappingNum(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a,b);
}
swappingNum(10,20)
console.log("********************************");

function PrimeNumbers(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0)
            count++;
    }
    if(count==2) return num + " is a prime number"
    else return num + " is not a prime number";
}
console.log(PrimeNumbers(25));
console.log(PrimeNumbers(29));
console.log("********************************");

function primeNumberSeries(num){
    for(let i=2;i<num;i++){
        let count=0;
        for(let j=1;j<=i;j++){
            if(i%j==0)
                count++;
        }
        if(count==2)
             console.log(i);
    }
}
primeNumberSeries(29)
console.log("********************************");

function primeNumberSeriesBetween(){
    let a=12, b=29;
    for(let i=a;i<=29;i++){
        let count=0;
        for(let j=1;j<=i;j++){
            if(i%j==0){
                count++;
            }
        }
        if(count==2)
            console.log(i);
    }
}
primeNumberSeriesBetween();
console.log("************************************")

function CapitalAndSmallLetters(){
    let sentence = " I Love you Shashi Kumar";
    let words = sentence.split("");
    let caps="", small="";

    for(let i= 0; i<=words.length;i++){
        let word = words[i];
        if(word>='a'&& word<='z')
            small = small+word;
        if(word>='A'&& word<='Z')
            caps= caps+word;
    }
    return { small, caps};
}
console.log(CapitalAndSmallLetters());
console.log("************************************")

function LargestWordSentence(){
    let sentence = " I Love you Shashi Kumar";
    let words = sentence.split(" ");
    let largest="";

    for(let word of words){
        if(word.length>=largest.length)
            largest=word;
    }
    return largest;
}
console.log(LargestWordSentence());
console.log("************************************");

function vowelAndConsonant(){
    let sentence= "I Love you Shashi Kumar";
    let words= sentence.split("");
    let vowels= 'aeiouAEIOU'
    let vowel="", consonant ="";

    for(let i=0;i<words.length;i++){
        let word=words[i];
        if(word.match(/[a-zA=Z]/)){
            if(vowels.includes(word))
                vowel+= word;
            else
                consonant= consonant+word;
        }
    }
    return {vowel, consonant};
}
console.log(vowelAndConsonant());
console.log("******************************")