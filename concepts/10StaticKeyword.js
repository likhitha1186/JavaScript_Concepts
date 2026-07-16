/*
we have individual object for one class and if value of the variable is same for all the objects
1. every variable in object level will occupy certain amount of memory - memory wastage
2. we cannot modify the value in all the places at once.
--to overcome these problems we will use static keyword.

static variable/functions/methods : call it by using class name
non static variable/functions/methods : call it by using objects reference name
 */

class Test {
    static a=100;
    b=200;

    static m1(){
        console.log("This m1 static method");
    }

    m2(){
        console.log("This m2 non-static method");
    }
}

//1. we can directly access static variables and methods using class name
console.log(Test.a); //100
console.log(Test.b); //undefined

Test.a=1230;
console.log(Test.a)  //1230

Test.m1(); // This m1 static method
//Test.m2(); // error: Test.m2 is not a function. we cannot access nonstatic methods and variable using class name directly.

//2. we can access nonstatic variables and methods using objects.
let test= new Test();
console.log(test.b); //200
test.m2();  //This m2 non-static method


class Car{
    static wheel=4;

    constructor(name, model, price){
        this.name =name;
        this.model=model;
        this.price=price;
    }

    static stop(){
        console.log('car ---- stop')
    }

    drive(){
        console.log(this.name + " is drivig")
    }
}
let c1= new Car("Honda","Civic",50);
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${c1.wheel}`)  //Honda, Civic, 50, undefined
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${Car.wheel}`)  //Honda, Civic, 50, 4
console.log(Car.wheel);  //4
Car.stop()   //car ---- stop
c1.drive(); //Honda is drivig