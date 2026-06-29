function Print(name){
    console.log("Hello World!");
    console.log("My name is", name)
}
Print("Likhitha")

function addNumber(a,b){
    console.log("Given Numbers are:", a,b)
    console.log(a+b);
}
addNumber(50,78);

function GreaterNumber(a,b,c){
    console.log("Given numbers are :",a,b,c)
    if(a>=b && a>=c) console.log(a+ "is greater")
    if(b>=a&&b>=c) console.log(b+" is greater");
    console.log(c+ " is greater");
}
GreaterNumber(55,74,789)

function Print1To10(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
Print1To10();

function PositiveNegativeNumber(num){
    if(num>0) return num + "is positive number";
    if(num<0) return num + " is negative number";
    return num + "is zero"
}
PositiveNegativeNumber(10);
PositiveNegativeNumber(0);
PositiveNegativeNumber(-78);

function MultiplicationTable(num){
    for(let i=1;i<=10; i++){
        console.log(num + "*" + i + "=" + (num*i))  
    }
}
MultiplicationTable(10);

function SumOfNauralNumbers(){
    let sum=0;
    for(let i=1;i<=10;i++){
        sum+=i;
    }
    console.log(sum)
}
SumOfNauralNumbers();

function NumberIsZero(num){
    if(num==0) console.log(num + " is zero")
    else console.log(num + " is not zero")
}
NumberIsZero(-10);
NumberIsZero(45);
NumberIsZero(0);

function EvenOrOdd(num){
    if(num % 2 == 0) console.log(num+ " is even number")
    else console.log(num + " is odd number")
}
EvenOrOdd(10);
EvenOrOdd(49);

function reverseString(str){
    console.log("Given string :", str)
    let rev="";
    for(let i=str.length-1; i>=0; i--){
        rev= rev+ str.charAt(i)
    }
    console.log(rev)
}
reverseString("Likhitha")

function reverseStringWithBuiltInFunction(str){
    let rev= str.split("").reverse().join("");
    console.log(rev)
}
reverseStringWithBuiltInFunction("Likhitha")

function PalindromeString(str){
     let rev="";
     for(let i=str.length-1; i>=0; i--){
        rev= rev+ str.charAt(i);
     }
     if(rev===str) return str + " is a Palindrome String"
     return str + " is not a Palindrome String"
}
console.log(PalindromeString("level"));
console.log(PalindromeString("medam"))

function PalindromeStringWithBuiltInFunc(str){
    let rev= str.split("").reverse().join("");

     if(rev===str) return str + " is a Palindrome String"
     return str + " is not a Palindrome String"
}
console.log(PalindromeStringWithBuiltInFunc("POP"));
console.log(PalindromeStringWithBuiltInFunc("DATA"));

function reverseNumber(num){
    console.log("Given number is:", num);
    let rev=0, lastDigit;
    while(num>0){
        lastDigit=num%10;
        rev=rev*10+lastDigit;
        num=Math.floor(num/10);
    }
    return rev;
}
console.log(reverseNumber(123));

console.log("************")

function reversenumberWithBuiltInFunction(num){
    let rev = Number(Math.abs(num).toString().split("").reverse().join(""));
    return num<0? -rev : rev;
}
console.log(reversenumberWithBuiltInFunction(654321));
console.log(reversenumberWithBuiltInFunction(-654321));

function palindromeNumber(num){
    let rev=0, lastDigit, originalNum=num;
    while(num>0){
        lastDigit=num%10;
        rev=rev*10+lastDigit;
        num=Math.floor(num/10);
    }
     if(rev===originalNum) return originalNum + " is a Palindrome String"
     return originalNum + " is not a Palindrome String"
}
console.log(palindromeNumber(123321));
console.log(palindromeNumber(123))


function palindromeNumberWithBuiltInFunction(num){
    let rev = Number(num.toString().split("").reverse().join(""))
     if(rev===num) return num + " is a Palindrome String"
     return num + " is not a Palindrome String"
}

console.log(palindromeNumberWithBuiltInFunction(123321));
console.log(palindromeNumberWithBuiltInFunction(123))


function FactorialNumber(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact = fact*i;
    }
    console.log(fact)
}
FactorialNumber(5);

function FibonacciNumber(num){
    if(num==0) return num;
    if(num==1) return num;
    return FibonacciNumber(num-1)+ FibonacciNumber(num-2)
}
console.log(FibonacciNumber(5));

function FibonacciNumberSeries(num){
    let a=0,b=1,c;
    for(let i =1;i<=num;i++){
        console.log(a+ "");
        c=a+b;
        a=b;b=c;
    }
    console.log()
}
FibonacciNumberSeries(5)

function SwapTwoNumbers(a,b){
    console.log("Given numbers are", a,b)
    a=a+b;
    b=a-b;
    a=a-b;
    return [a,b]
}
console.log(SwapTwoNumbers(10,25))

function PrimeNumber(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
    if(count==2){
        console.log(num + " is a prime number")
    }
    else{
        console.log(num + " is not a prime number")
    }
}
PrimeNumber(25);
PrimeNumber(11);

function PrimeNumberSeries(num){
    for(let i=2;i<=num;i++){
        let count=0;
        for(let j=1; j<=i;j++){
            if(i % j == 0){
                count++
            }
            
        }
        if(count==2)
        {
         console.log(i)
        } 
   }
}
PrimeNumberSeries(25);


function CapitalAndSmall(){
    let sentence= "My name is Likhitha P K";
    let words = sentence.split("");
    let caps="", small="";

    for(let i=0; i<words.length;i++){
        let word=words[i];
        if(word>="a"&& word<='z'){
            small+=word;
        }else if(word>="A" && word<="Z"){
            caps+=word;
        }
    }
        console.log("capital letters are:", caps)
            console.log("small letters are:", small)

}
CapitalAndSmall();

function LargestWord(){
    let sentence =" My name is Likhitha P K";
    let words=sentence.split(" ");
    let largest ="";

    for(let word of words){
        if(word.length> largest.length){
            largest=word;
    }
    }
    console.log(largest);
}
LargestWord();

function vowelsAndConsonant(){
    let sentence = "I love you";
    let words= sentence.split("");
    let vowels= "aeiouAEIOU";
    let vowelHolder="", consonantHolder="";

    for(let i=0;i<words.length;i++){
        let word= words[i];
        if(word.match(/[a-zA-z]/)){
            if(vowels.includes(word)){
                vowelHolder+= word;
            }else{
                consonantHolder+=word;
            }
        }
    }
    console.log("consonants are:", consonantHolder);
    console.log("vowels are:", vowelHolder);
}
vowelsAndConsonant()