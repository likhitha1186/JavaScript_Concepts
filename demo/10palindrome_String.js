function StringPalindrome(){
         let str = "level", rev="";
         for(let i=str.length-1;i>=0;i--){
            rev = rev+ str.charAt(i);
         }
         if(rev === str) return str + " is a Palindrome string";
         return str + " is not a palindrome string"
}

console.log(StringPalindrome())

console.log("*********************************")

function StringPalindromeWithBuiltInFunc(str){
   
   let rev = str.split("").reverse().join("")
   if(rev === str) return str + " is a Palindrome string";
   return str + " is not a palindrome string"
   
}
console.log(StringPalindromeWithBuiltInFunc("malayalam"));
console.log(StringPalindromeWithBuiltInFunc("mother"))