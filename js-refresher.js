const students = [
  { id: 1, name: "Amina", year: 3, grades: [9, 8, 10], contact: { github: "amina-dev" } },
  { id: 2, name: "Emir", year: 2, grades: [6, 7, 7] },
  { id: 3, name: "Lejla", year: 3, grades: [10, 9, 9], contact: { github: "lejla-codes" } },
  { id: 4, name: "Tarik", year: 3, grades: [7, 6, 8] },
];

// --- Task 5 ---
// Version 1: Parameter destructuring
const greet = ({ name, year }) => `Hi ${name}, you are in year ${year}`;

// Version 2: Standard object parameter (commented out as requested)
// const greet = (student) => `Hi ${student.name}, you are in year ${student.year}`;

students.forEach((student) => {
  console.log(greet(student));
});

// --- Task 6 ---
const names = students.map((student) => student.name);
console.log(names);

// --- Task 7 ---
const thirdYearNames = students
  .filter((student) => student.year === 3)
  .map((student) => student.name);

console.log(thirdYearNames);

// --- Task 8 ---
function average(grades) {
  return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
}

const studentsWithAverage = students.map((student) => ({
  ...student,
  average: average(student.grades),
}));

studentsWithAverage.forEach((student) => {
  console.log(`${student.name}: ${student.average.toFixed(2)}`);
});

// --- Task 9 ---
const updatedStudents = students.map((student) => {
  if (student.name === "Emir") {
    return { ...student, year: 3 };
  }
  return student;
});

const originalEmir = students.find((s) => s.name === "Emir");
const updatedEmir = updatedStudents.find((s) => s.name === "Emir");

console.log(`Original: Emir is in year ${originalEmir.year}`);
console.log(`Updated: Emir is in year ${updatedEmir.year}`);

// --- Task 10 ---
students.forEach((student) => {
  const github = student.contact?.github ?? "no GitHub";
  console.log(`${student.name}: ${github}`);
});