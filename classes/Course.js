const Student = require("./Student")

class Course{
    constructor(name){
        this.name = name
        this.grades = []
    } 
    getGrades(){
        return this.grades
    }

    addGrade(course, grade){
        const newGrade ={
            course: course,
            grade: grade
        }
        this.grades.push(newGrade)
    }
    getAverageGrade(){
        if(this.grades.length === 0){
            return -1
        }
        let sum = this.grades.reduce((acc, currentValue) => acc + currentValue.grade, 0)
        return sum / this.grades.length
    }
    description(){
        return `Student ${this.name}`
    }
}

module.exports = Course