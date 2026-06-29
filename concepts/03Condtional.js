//control statements: means that we can control the flow of execution of our code based on certain conditions or loops.
/* Types of control statements
1. Conditional statements: if, if-else, if-else-if, switch
2. Looping statements: for, while, do-while
3. Jumping statements: break, continue, return
*/
//1. conditional statements: allows us to execute a block of code based on a certain condition  
//if condtition: means that if the condition is true, then the block of code will be executed, otherwise it will be skipped.
var age=18;
if(age>=18){
    console.log("You are eligible to vote");
};

//if-else condition: means that if the condition is true, then the block of code will be executed, otherwise the else block will be executed.
var age=16;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

//if-else-if condition: means that if the first condition is true, then the block of code will be executed, otherwise it will check the next condition and so on.
var marks=75;   
if(marks>=90){
    console.log("You got A grade");
}
else if(marks>=80){
    console.log("You got B grade");
}
else if(marks>=70){
    console.log("You got C grade");
}       

//switch condition: means that it will check the value of a variable and execute the block of code based on the matching case.
var day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

//2. looping statements: allows us to execute a block of code multiple times based on a certain condition
//while loop: means that it will execute the block of code as long as the condition is true.
// whuile(condition){
//     //block of code
// }  starting and ending contion we should know before executing the loop.

let i=1;
while(i<=10){
    console.log(i);
    i++;
}
console.log("***************");
//do-while loop: means that it will execute the block of code at least once and then check the condition, if the condition is true, then it will execute the block of code again, otherwise it will exit the loop.
/*
do{
statements;
}while(condition);
*/
let j=100;
do{
    console.log(j);
    j++;
}while(j<=10); // do-while loop will execute the block of code at least once even if the condition is false.
console.log("***************");

//for loop: means that it will execute the block of code a certain number of times based on the condition.
/*
for(initialization; condition; increment/decrement){
    //block of code
}
*/

for(let k=1;k<=10;k++){
    console.log(k);
}
console.log("***************");

//3. jumping statements: allows us to jump out of a loop or a function based on a certain condition
//break statement: means that it will exit the loop or switch statement based on a certain condition.
for(let l=1;l<=10;l++){
    if(l==5)
        break; //break statement will exit the loop when l is equal to 5;
    console.log(l);
}
console.log("***************");

//continue statement: means that it will skip the current iteration of the loop and move to the next iteration based on a certain condition.
for(let m=1;m<=10;m++){
    if(m==5)
        continue;
    console.log(m); //continue statement will skip the iteration when m is equal to 5;  
}
console.log("***************");