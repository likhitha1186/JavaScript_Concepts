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

//object creation:
//1. object literals: when ever we will create an an object we have to write using curly braces {} 
const user={
    "name":"smith",
    "age":25,
    "country":"US"
}
console.log(user.name) //smith
console.log(user.country) //US

//2. using Constructor function:
function Car(brand, model, price){
    this.brand=brand;
    this.model=model;
    this.price=price;
};
const car=new Car("BMW","520d",100000)
console.log(car.brand)  //BMW
console.log(car.price)  //100000
console.log(car.model)  //520d

const car1= new Car("Audi","Q7",153252);
console.log(car1.brand, car1.model, car1.price)  //Audi Q7 153252

//3. class style:
class Customer{
    constructor(name, product){
        this.name=name;  //instance variable
        this.product=product;
    }

    display(){
        console.log(`${this.product} is the new product `) //Samsung Laptop is the new product 
    }
}
const customer1= new Customer("Smith", "Samsung Laptop")
console.log(customer1.name, customer1.product)  //Smith Samsung Laptop
customer1.display();

// 4. Object.create() method: is allow you to to create an object with an specified prototype object.
//with some prototype

const EmployeePrototype={
    printInfo:function(){
        console.log(`hello employee name is ${this.name}`)  //hello employee name is John
    }
}
const employee = Object.create(EmployeePrototype)
employee.name="John";
employee.printInfo()


//5. using Factory functions: is an special function which return an objects.
//and it will allows you to create an multiple instance of an objects.

function createDept(deptName, HOD){
    return{
        deptName:deptName,
        HOD:HOD,
        printInfo:function(){
            console.log(`Good morning, department name is ${this.deptName}`)  //hello employee name is John
         }       
    }
}
let dept = createDept("Physics","John")
let dept1 = createDept("Maths","Smith")
dept.printInfo();  //Good morning, department name is Physics
dept1.printInfo();  //Good morning, department name is Maths
console.log(dept.deptName, dept.HOD) //Physics John

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
