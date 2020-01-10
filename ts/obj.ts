class Student{
    name:string
    rollno:number   
    age:number
    constructor(name:string,rollno:number,age:number)
        this.name=name
        this.rollno=rollno
        this.age=age

}
let student1=new Student()
student1.name="maya"
student1.rollno=30
student1.age=13
console.log("NAME:",student1.name)
console.log("ROLLNO:",student1.rollno)
console.log("AGE:",student1.age)

