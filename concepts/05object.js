//object in js: a collection of key-value pairs, where each key is a string (or Symbol) and each value is any valid JavaScript value (including functions).
//objet is an enttity that has properties and methods. Properties are values associated with an object, and methods are functions associated with an object.
let person={
    name: "Likhitha",
    age: 24,
    gender:"female"
};
console.log(person.name); //output: Likhitha
console.log(person.age); //output: 24

person.age=25
console.log(person.age); //output: 25

//accessing object properties: there are two ways to access the properties of an object: dot notation and bracket notation.
//1. dot notation: objectName.propertyName
console.log(person.name); //output: Likhitha   

//2. bracket notation: objectName["propertyName"]
console.log(person["age"]); //output: 25

//adding new properties to an object
person.city="Banglore"; //person["city"]="Banglore"
console.log(person.city); //output: Banglore

//updating existing properties of an object
person["age"]=26; //person.age=26
console.log(person.age); //output: 26

//deleting properties from an object
delete person["city"]; //delete person.city
console.log(person.city); //output: undefined

console.log(person); //output: { name: 'Likhitha', age: 26, gender: 'female' }      

//reading object properties using for...in loop
for(let details in person){
    console.log(details) //prints only the keys of the object

    console.log(person[details]) //prints the values of the object

    console.log(details+" "+ person[details]) //prints the key-value pairs of the object
}

//how to define methods in an object: methods are functions that are associated with an object. They can be defined using function expressions or arrow functions.
let employee={
    name:"John",
    age:28,
    gender:"male",
    basicSalary: 50000,

    //method defined using function expression
    bonus: function(){
    return ((this.basicSalary*10)/100);
    }
}
console.log(employee.bonus()); //output: 5000
console.log(employee["name"]); //output: John

