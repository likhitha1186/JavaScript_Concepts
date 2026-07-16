//1. find unique value from an array.
const array=[1,2,2,3,4,8,6,8,1,4,9,7,3]
const uniqueArray=[...new Set(array)]   //... spread operator
console.log(uniqueArray)

//2. int to string
const num=25;
const numStr=num + '';  //'25'
console.log(numStr+10)
//or
const numStr1 =String(num);
console.log(numStr+10)//2510

//3. Float to integer number
const floatNum = 3.25;
const intNum= parseInt(floatNum);
console.log(intNum) //3

//4. check if a variable is a Number
const value =56;
if(typeof value === 'number' && !isNaN(value)){
    console.log(value + ' is a number')
}
else{
    console.log(value + " is not a number")
}

//5. swap variable
let a=5, b=42;
[a,b]=[b,a];
console.log(a,b)  //42 5

//6. chech if an object as an specific property.
const person={
    name:"John",
    age:"25"
}
if(person.hasOwnProperty('age')){
    console.log("person has property")  //person has property
}
if(person.hasOwnProperty('gender')){
    console.log("person does not have property")
}

//7. remove falsy value from the array :(false, 0, ==, numm, undefined, NaN)
const values = [0,2,5,3,false,5,3,num,null, undefined,NaN,8]
const newArray = values.filter(Boolean);
console.log(newArray) //[2,3,5,3,25,8]

//8. String --> upercase, lowercase
const str="Good Morning John"
const upperCase= str.toUpperCase(str)
const lowerCase = str.toLowerCase(str);
console.log(upperCase)
console.log(lowerCase)

//9. check array conatis specific values
const lang=["java", "JavaScript","Python","Ruby"]
if(lang.includes('JavaScript')){
    console.log("Yes")
}

//10. check if array is Empty:
const emptyArray=[];
if(emptyArray.length==0){
    console.log("Yes")
}

//11. generate random number
const min=10, max=25;
const randomNumber = Math.floor(Math.random()*(max-min+1))
console.log(randomNumber)

