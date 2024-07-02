const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}

const marks = student.marks;
console.log(marks);

const math = marks.math;
console.log(math);

const chemistry = student['marks']['chemistry'];
console.log(chemistry);

const subject = 'physics';
//const subjectMarks = student['marks'][subject]; correct also
const subjectMarks = student.marks[subject];
console.log(subjectMarks);

/*
wrong
common mistake
const subjectMarks = student.marks.subject
*/