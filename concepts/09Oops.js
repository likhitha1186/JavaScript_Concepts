//class and object:
/*
class is a collections of variables and methods.
class is a logical entity which contains variable and methods
Object is physical entity and an instance of class.
Method contains statements. Sometimes method can accept arguments
class also contains constructor .
constructor will be called when you create object for the class.
methods contains set of statements and perform some operations.
 */

class Employee{
    t
    setDetails(){
        this.eid=101;  //this represents class.
        this.ename="Smitha";
        this.department= "Gaming"
    }

    display(){
        console.log(this.eid, this.ename, this.department); //101 Smitha Gaming
    }
}
let emp=new Employee();
emp.setDetails();
emp.display();



class Employee1{
    t
    setDetails(eid, ename, department){
        this.eid=eid;  //this represents class.
        this.ename=ename;
        this.department= department;
    }

    display(){
        console.log(this.eid, this.ename, this.department); //102 Smith IT
    }
}
let emp1=new Employee1();
emp1.setDetails(102, "Smith", "IT");
emp1.display();

class Employee2{
    t
    constructor(eid, ename, department){  //constructor is just like method but difference is constructor is only used for initializing the data.
        this.eid=eid;  //this represents class.
        this.ename=ename;
        this.department= department;
    }

    display(){
        console.log(this.eid, this.ename, this.department); //102 Smith IT
    }
}
let emp2=new Employee2(105,"John", "HR"); // constructor is invoked automatically when the object is invoked
emp2.display(); //105 John HR :

let emp3=new Employee2(107,"James", "HR");
emp3.display(); //107 James HR
let emp4=new Employee2(109,"David", "IT");
emp4.display() //109 David IT
let emp5=new Employee2(115,"Mark", "Gaming");
emp5.display(); //115 Mark Gaming.
