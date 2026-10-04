function enrollCourse(student, course) {
  if (course.available === false) {
    return "Course is unavailable";
  } else if (student.enrolled === true) {
    return "Student is already enrolled";
  } else if (course.price <= 0) {
    return "Invalid course price";
  } else if (student.wallet < course.price) {
    return "Insufficient balance";
  } else {
    student.wallet -= course.price;
    student.enrolled = true;
    return `Student: ${student.name} Enrolled Sucessfull in ${course.name} Course, Course price: ${course.price}, Remaning in Wallet: ${student.wallet}`;
  }
}

let student = {
  name: "Rupesh",
  wallet: 3000,
  enrolled: false,
};

let course = {
  name: "JavaScript Mastery",
  price: 2000,
  available: true,
};
console.log(enrollCourse(student, course));
console.log(student);
console.log(course);
