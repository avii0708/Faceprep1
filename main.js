// let name = "AVI";
// let age = 22;
// let course = "B.Tech AI";
// let city = "JAIPUR";
// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// let student = {
//     name: name,
//     age: age,
//     course: course,
//     city: city,
//     skills: skills
// };
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);
// console.log(student.city);
// console.log(student.skills);

// const user = {
//     name: "Avi",
//     age: 21,
//     isAdmin: true,
//     greet:function() {
//         console.log("Hello My Name Is, " + this.name);
//     }
// };
// console.log(user);

// const jsonData = '{"name":"Rahul","age":20,"course":"Java"}';

// const student = JSON.parse(jsonData);

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);

const student = {
    name: "priya",
    age: 21,
    course: "python"
};

const jsonString = JSON.stringify(student);

console.log(jsonString);
console.log(typeof student);
console.log(typeof jsonString);