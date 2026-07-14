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
    name:"John",
    gender:"male",
    phoneNum:"123456789"
}
const details = person=>`${person.name} ${person.gender}`
const data = details(person)
console.log(data); //John male

