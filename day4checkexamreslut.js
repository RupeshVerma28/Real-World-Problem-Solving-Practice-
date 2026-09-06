function checkResult(student) {
  if (student.marks >= 40) {
    return `${student.name} is passed`;
  } else {
    return `${student.name} is failed`;
  }
}
const student1 = {
  name: "Rahul",
  marks: 65,
};

console.log(checkResult(student1));

const student2 = {
  name: "Aman",
  marks: 32,
};

console.log(checkResult(student2));
