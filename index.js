const Person = require('./classes/Person')
const Student = require('./classes/Student')
const Course = require('./classes/Course')
const School = require('./classes/School')

const school = new School("Awesome School")
const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)

school.addStudent(student1)
school.addStudent(student2)

console.log(student1)
console.log(student2)

//we cannot add one student twice
school.addStudent(student1)

console.log("Number of students in school => " + school.getStudents().length + "\n")  // 2

const course1 = new Course("Math")
const course2 = new Course("Physics")

console.log("\n".repeat(2))
school.addCourse(course1)
school.addCourse(course2)

console.log(school)
//we cannot add one course twice
school.addCourse(course1)
console.log("Number of courses => " + school.getCourses().length+"\n\n") // 2

school.addStudentGrade(student1, course1, 5)
school.addStudentGrade(student1, course2, 4)
school.addStudentGrade(student2, course1, 5)

console.log(student1)
console.log(student2)


const student3 = new Student("Cocoo Turner")
student3.setDateOfBirth(2000)

//cannot add grades to the student who is not in the school
school.addStudentGrade(student3, course1, 5)
school.addStudentGrade(student3, course1, 5)
school.addStudentGrade(student3, course2, 4)


console.log("Cocoo Turner ei olnud koolis ning ei saanud hindeid. Koguhinnete arv => " + student3.getGrades().length) // 0

school.addStudent(student3)
school.addStudentGrade(student3, course1, 5)
school.addStudentGrade(student3, course2, 4)


//SIIN ON VIGA SISSE TULNUD. KUI ÜLEMISED KAKS KURSUST MITTE MÄRKIDA SIIS ON HINNETE ARV 0
//ME EI SAA ANDA TALLE HINDEID KUI TEDA KOOLISÜSTEEMIS KIRJAS EI OLE NING KUI TEDA LISADA SIIS EI SAA ANDA TALLE VAREM ANTUD HINDEID KUNA SÜSTEEMIST TA PUUDUS
console.log("Cocoo Turner on nüüd kahel kursusel ning koguhinnete arv => " + student3.getGrades().length+"\n\n") // 2
console.log("Cocoo Turneri hinded => ")
console.log(student3.getGrades())
console.log("\n")

console.log(course1.getGrades())  

console.log("Students ordered by average grade:")
console.log("Student - avg grade")
console.log("-".repeat(30))

console.log(JSON.stringify(school.getStudentsOrderedByAverageGrade(), null, 2))
console.log("-".repeat(30))

//console.log(student1.getAverageGrade()) => 4.5
//console.log(student2.getAverageGrade()) => 5
//console.log(student3.getAverageGrade()) => 4.5
//console.log(student1 instanceof Student) => true
//console.log(student2 instanceof Student) => true
//console.log(student3 instanceof Student) => true

school.students.forEach((student) => {
    console.log(student.name, student.getAverageGrade())
})

console.log("Course average grades")
school.getCourses().forEach((course) => {
    console.log(course.name, course.getAverageGrade())
})