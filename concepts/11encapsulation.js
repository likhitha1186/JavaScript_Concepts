/*
Encapsulation : wrapping of data and functions under sinlge unit. 
it is the  mechanism that binds together  code and data.
the js encapsulation is a process if binding the data i.e variable with the function acting on that data.
and we  are working on these variables using nethods.  
*/

class employee{
    constructor(){
        let name, age;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name=name;
    }

    getAge(){
        return this.age;
    }

    setAge(age){
        this.age=age;
    }
}

let emp=new employee();
emp.setName("Likhitha")
emp.setAge(24);

console.log(emp.getName(), emp.getAge()); //Likhitha 24
