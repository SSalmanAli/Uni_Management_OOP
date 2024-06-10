class Person {
    namePerson;
    agePerson;
    constructor(n1, Age) {
        this.namePerson = n1;
        this.agePerson = Age;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(n1, Age, Rn) {
        super(n1, Age);
        this.rollNumber = Rn;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(n1, Age, money) {
        super(n1, Age);
        this.salary = money;
    }
    Assigncourse(course) {
        this.courses.push(course);
    }
}
let Salman = new Student("salman", 17, 7000);
let Moiz = new Student("Moiz", 17, 7400);
const hamza = new Instructor("Hamah", 21, 5000);
const bari = new Instructor("Bari", 26, 1000);
class Courses {
    id;
    name;
    student = [];
    instructor = [];
    constructor(ide, name1) {
        this.id = ide;
        this.name = name1;
    }
    addStudent(std) {
        this.student.push(std);
        std.registerForCourses(this);
    }
    setInstructor(ins) {
        this.instructor.push(ins);
        ins.Assigncourse(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(departmentName) {
        this.name = departmentName;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const CA = new Courses(123456, "CA");
const CBA = new Courses(654321, "CBA");
//add student
CBA.addStudent(Salman);
CBA.addStudent(Moiz);
CA.addStudent(Salman);
//add instructor
CA.setInstructor(bari);
CBA.setInstructor(hamza);
const Department1 = new Department("Math");
Department1.addCourse(CA);
// console.log(Department1.courses[0]); // Logging the entire Courses object
// console.log("Course ID:", Department1.courses[0].id); // Logging the course ID
// console.log("Course Name:", Department1.courses[0].name); // Logging the course name
// console.log("Students in Course:", Department1.courses[0].student); // Logging the students array
// console.log("Instructors in Course:", Department1.courses[0].instructor);
console.dir(Department1.courses[0]);
export {};
