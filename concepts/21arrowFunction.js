//arrow function: no specific name

//1 parameter function:
const squareNum=num=> num*num;
console.log(squareNum((10))); //100

//no parameter:
const msg =()=>{
    console.log("Hello"); //Hello
}
msg();

const msg1=()=> "Good Morning";
console.log(msg1()); //Good Morning

//2 parameters
const add = (a,b)=>{
    return a + b;
}
console.log(add(4,5));  //9

const person={
    firstName:"John",
    lastName:"Pet",
    gender:"male",
    phoneNum:"123456789"
}
const fullName = person=>`${person.firstName} ${person.lastName}`
const data = fullName(person)
console.log(data); //John Pet

const greet=(username="guest",age=0)=> `Hello, ${username}! you are ${age} years old`
const g= greet();
console.log(g); //Hello, guest! you are 0 years old

const g1=greet("John",30);
console.log(g1) //Hello, guest! you are 0 years old

//arrow function with rest arguments or ... parameters, varargs
const sum = (...numbers) => numbers.reduce((acc,num)=>acc+num,0);
console.log(sum(1,2,3,4,5));  //15

//default and rest parameter
const BrowserInfo =(browser='chrome', ...details)=>{
    console.log(`Browser: ${browser}`)
    console.log('other details:', details)
}
BrowserInfo(); //Browser: chrome, other details: []
BrowserInfo('firefox', 'headless mode, mozilla browser')  //Browser: firefox , other details: [ 'headless mode, mozilla browser' ]

//max number using Math
const findMaxValue = (a,b,c)=>{
   return Math.max(a,b,c)
}
console.log(findMaxValue(10,25,36)) //36
