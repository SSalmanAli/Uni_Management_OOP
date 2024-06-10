class Person {
    namePerson: string
    agePerson: number

    constructor(n1:string , Age:number){
    this.namePerson = n1
    this.agePerson = Age
}
}


class Student extends Person {
    rollNumber: number 
    courses: Courses[] = []

    constructor(n1:string , Age:number , Rn:number){
        super(n1 , Age)
    this.rollNumber = Rn
}

registerForCourses (course:Courses){
this.courses.push(course);
}
}

class Instructor extends Person{
    salary: number 
    courses: Courses[] = []

    constructor(n1:string , Age:number , money:number){
        super(n1 ,Age)
    this.salary = money
}

Assigncourse (course:Courses){
this.courses.push(course);
}
}


let Salman = new Student("salman" , 17 , 7000)
let Moiz = new Student("Moiz" , 17 , 7400)

const hamza = new Instructor("Hamah" , 21 , 5000) 
const bari = new Instructor("Bari" , 26 , 1000)

class Courses {
    id:number
    name:string
    
    student:Student[] = []
    instructor:Instructor[] = []
    
    constructor (ide:number , name1:string){
        this.id = ide
        this.name = name1
        }

    addStudent(std:Student){
        this.student.push(std)
        std.registerForCourses(this)
}

    setInstructor(ins:Instructor){
        this.instructor.push(ins)
        ins.Assigncourse(this)
}
}


class Department {
    name:string
    courses:Courses[] = []

    constructor(departmentName:string){
        this.name = departmentName
    }

    addCourse(course:Courses){
        this.courses.push(course)
    }
}


const CA = new Courses(123456 , "CA")
const CBA = new Courses(654321 , "CBA")
//add student
CBA.addStudent(Salman)
CBA.addStudent(Moiz)

CA.addStudent(Salman)

//add instructor
CA.setInstructor(bari)
CBA.setInstructor(hamza)

const Department1 = new Department("Math")

Department1.addCourse(CA)

console.log(Department1.courses[0]);
console.log("Course ID:", Department1.courses[0].id);
console.log("Course Name:", Department1.courses[0].name); 
console.log("Students in Course:", Department1.courses[0].student); 
console.log("Instructors in Course:", Department1.courses[0].instructor);

