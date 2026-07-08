/*
we have individual object for one class and if value of the variable is ame for all the objects
1. every variable in object level will occupy certain amount of memory - memory wastage
2. we cannot modify the value in all the places at once.
--to overcome these problems we will use static keyword.
 */

class Test {
    static a=100;
    b=200;

    static m1(){
        console.log("This m1 static method");
    }

    m2(){
        console.log("This m2 non static method");
    }
}

//1. we can directly access static variables and methods using class name
