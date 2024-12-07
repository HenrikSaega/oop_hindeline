const Person = require('./Person')

class Student extends Person{
    constructor(name){
        super(name)
        this.id = null
        this.grades = []
    } 

    setId(){
        if(this.id === null){
            this.id = Math.random()
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
    getAverageGrade(){
        if((this.grades).length === 0){
            return -1;
        } else{
            let sum = this.grades.reduce((acc, currecntValue) => {return acc + currecntValue.grade}, 0)
            return sum / this.grades.length
        }
    }
    description(){
        return `Student ${this.name}`
    }
}

module.exports = Student