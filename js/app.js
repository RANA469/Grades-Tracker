'use strict'

function Student(Course, studentName) {
    this.Course = Course;
    this.studentName = studentName;
    this.studentGrade = studentgrade();
    Student.prototype.allCourses.push(this);
}

Student.prototype.allCourses = [];

var form = document.getElementById('form');
form.addEventListener('submit', addCourse);
console.log(form);
creatT();


function addCourse(event) {
    event.preventDefault();
    var studentName = event.target.studentName.value;
    var theCourse = event.target.Course.value;

    var studentCourse = new Student(theCourse, studentName);
    console.log(Student.prototype.allCourses);
    console.log(addCourse);
    Student.prototype.render();


}

function studentgrade() {
    return Math.floor(Math.random() * 100) + 1;
}


function creatT() {
    var table = document.getElementById('table');
    var header = document.createElement('tr');
    table.appendChild(header);
    console.log(creatT);

    var headerS = document.createElement('th');
    header.textContent = "student Name";
    header.appendChild(headerS);

    var headerG = document.createElement('th');
    headerG.textContent = "student Grade";
    header.appendChild(headerG);

    var headerC = document.createElement('th');
    headerC.textContent = "Course";
    header.appendChild(headerC);
    console.log(creatT);
}


Student.prototype.render=function () {
    // var table = document.getElementById(table);
    var header = document.createElement('tr');
    table.appendChild(header);

    var headerS = document.createElement('td');
    header.textContent = this.course;
    header.appendChild(headerS);

    var headerG = document.createElement('td');
    headerG.textContent = this.studentName;
    header.appendChild(headerG);

    var headerC = document.createElement('td');
    headerC.textContent = this.studentGrade;
    header.appendChild(headerC);
    // console.log(creatData);
}

// function setItem() {
//     localStorage.setItem('grade', JSON.stringify(Student.prototype.allCourses));


// }


// function getItem() {

//     JSON.parse(localStorage.getItem('grade'));
//     for (var i = 0; i < Student.prototype.allCourses.length; i++)
// }
// if (typeof (Storage) !== "undefined") {
//     // Code for localStorage
// } else {
//     // No web storage Support.
// }