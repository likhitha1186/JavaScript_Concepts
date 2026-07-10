/*
Prototype is an object that is associated with every function and object by default.
If we want to add new properties at later stage to a function/class , we can take the help of prototype.

A prototype is an object that JavaScript automatically associates with every function and class.
It allows us to add shared properties and methods that are available to all instances without duplicating them in every object.
 When a property or method is not found on an object, JavaScript looks for it on the prototype—this is called the prototype chain.
In modern Playwright projects, we usually use ES6 classes, and class methods are automatically stored on the prototype, so we don't often modify prototypes manually.
 */

//adding new property to the function
function  Exam(){
    this.subjectName="JavaScript";
    this.marks = "100"
}

let exam = new Exam();
console.log(exam.subjectName, exam.marks); //JavaScript 100

exam.examDate="";
console.log(exam.subjectName, exam.marks, exam.examDate); //JavaScript 100 10-05-2023

exam1 = new Exam();
console.log(exam1.subjectName, exam1.marks, exam1.examDate); //JavaScript 100 undefined

Exam.prototype.examDate= "10-05-2026";
console.log(exam1.subjectName, exam1.marks, exam1.examDate); //JavaScript 100 10-05-2026

//adding new property to the class

class Movie{
        constructor(movieName, actor){
            this.movieName =movieName;
            this.actor = actor;
        }
}
Movie.prototype.movieLanguage = "Kannada";

movie = new Movie("Toxic", "Yash");
console.log(movie.movieName, movie.actor, movie.movieLanguage); //Toxic Yash Kannada

movie2 = new Movie("Raj", "Puneeth RajKumar");
console.log(movie2.movieName, movie2.actor, movie2.movieLanguage);  //Raj Puneeth RajKumar Kannada

//adding function to the class by using Prototype.
class Student{
    constructor(sName, sRollNum){
        this.sName = sName;
        this.sRollNum = sRollNum;
    }
}
Student.prototype.sAge = "11";

Student.prototype.display= function (){
    console.log(this.sName, this.sAge, this.sRollNum);
}
stu1= new Student("Likhi","101");
console.log(stu1.sName, stu1.sAge,stu1.sRollNum); //Likhi 11 101
stu1.display(); ////Likhi 11 101

stu2= new Student("John","100");
console.log(stu2.sName, stu2.sAge,stu2.sRollNum); //John 11 100
stu2.display(); ////John 11 100
