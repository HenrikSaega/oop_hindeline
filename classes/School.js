class School{
    constructor(name){
        this.name = name
        this.students = []
        this.courses = []
    } 

    addCourse(course){
        if(this.courses.indexOf(course) === -1){
            this.courses.push(course)
        }
    }
    addStudent(student){
        if(student.age() > 18){
            if(this.courses.indexOf(student) === -1){
                student.setId(Math.random().toString)
                this.students.push(student)
            }
        }
    }
    addStudentGrade(student, course, grade){
        if(this.courses.indexOf(student) !== -1 && (this.courses.indexOf(course) !== -1)){
            student.addGrade(crouse, grade)
            course.addGrade(student. grade)
        }
    }
}



module.exports = School