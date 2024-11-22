const Person = require('./Person')

class Student extends Person{
    constructor(name){
        super(name)
        this.id = null
        this.grades = []
    } 

    setId(id){
        if(this.id === null){
            this.id = id
        }
    }
    getId(){
        return this.id
    }
    addGrade(course, grade){
        const newGrade = {
            course: course.name,
            grade: grade
        }
        this.grades.push(newGrade)
    }
    getGrades(){
        return this.grades
    }
    GetAverageGrade(){
        if(this.grades === 0){
            return -1;
        } else{
            return 0
        }
    }
}

module.exports = Student