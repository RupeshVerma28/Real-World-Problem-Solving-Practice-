function enrollStudent(student, course) {
  if (course.available && student.wallet >= course.price) {
    return `${student.name} successfully enrolled in ${course.name}. Remaining wallet: ${(student.wallet -= course.price)} ${(student.enrolled = true)}`;
  } else if (course.available) {
    return "Course is currently unavailable";
  } else {
    return "Insufficient wallet balance";
  }
}

const student = {
  name: "Rupesh",
  wallet: 2000,
  enrolled: false,
};

const course = {
  name: "JavaScript Mastery",
  price: 1500,
  available: true,
};

console.log(enrollStudent(student, course));
console.log(student.wallet); // 500
console.log(student.enrolled); // true
