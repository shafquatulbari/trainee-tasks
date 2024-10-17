// create an array of student objects with the following properties
const students = [
    { name: "Alice", age: 20, grade: 90 },
    { name: "Bob", age: 21, grade: 80 },
    { name: "Charlie", age: 22, grade: 70 },
    { name: "David", age: 23, grade: 60 },
    { name: "Eve", age: 24, grade: 50 }
];

//Use filter to get students with grade greater than 60 && age less than 22
const studentsWithGradeGreaterThan60 = students.filter(student => student.grade > 60 && student.age < 22);
console.log(studentsWithGradeGreaterThan60); 

//Use map to convert the array of filtered student objects to an array of strings with the following format
// "Name: Alice, Age: 20, Grade: 90"
const studentStrings = studentsWithGradeGreaterThan60.map(
  (student) =>
    `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`
);
console.log(studentStrings);

//Use reduce to get the average grade of the students
const averageGrade = students.reduce((acc, student) => acc + student.grade, 0) / students.length;
console.log("Average grade: " + averageGrade);

// Sort the students in ascending order of grade
const sortedStudents = students.sort((a, b) => a.grade - b.grade);
console.log("Sorted students: " + JSON.stringify(sortedStudents));

// use reduce to find the highest scoring student
const highestScoringStudent = students.reduce((acc, student) => (acc.grade > student.grade ? acc : student));
console.log("Highest scoring student: " + JSON.stringify(highestScoringStudent));