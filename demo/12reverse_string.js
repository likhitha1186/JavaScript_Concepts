function Stringreverse(){
         let str = "level", rev="";
         for(let i=str.length-1;i>=0;i--){
            rev = rev+ str.charAt(i);
         }
         return rev;
}

console.log(Stringreverse())

console.log("*********************************")

function StringReverseWithBuiltInFunc(str){
   
   let rev = str.split("").reverse().join("")
   return rev;
   
}
console.log(StringReverseWithBuiltInFunc("malayalam"));
console.log(StringReverseWithBuiltInFunc("mother"))