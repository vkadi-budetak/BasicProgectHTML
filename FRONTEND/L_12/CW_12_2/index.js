//*  Методы связанные с поиском (не мутируют)

const students = [
  { name: "Jaroslav", age: 40, gender: "male" },
  { name: "Darina", age: 29, gender: "female" },
  { name: "Ihor", age: 67, gender: "male" },
  { name: "Sweta", age: 40, gender: "female" },
  { name: "Vlad", age: 31, gender: "male" },
];

// (a) => boolean - predicate
// Находит елемент удовлетварающий условия
const first = students.find((student) => {
  return student.age === 40;
});

console.log(first);

const last = students.findLast((student) => {
  return student.age === 40;
});
console.log(last);

// Метод findIndex возвращает индекс, если элемента нет возвращает -1
const indexOfFirst = students.findIndex((student) => {
  return student.age === 40;
});

const indexOfLast = students.findLastIndex((student) => {
  return student.age === 40;
});

// похожий метод, но не с предикатом
const arr = ["Apple", "Orange", "Lime"];
console.log(arr.indexOf("Orange")); // 1

// есть ли такие элементы вообще в массиве
// some - если некоторые студенты удовлетворяют условия --> true
// если ли нет ни одного --> false
const hasGirsls = students.some((students) => students.gender === "female");
console.log(hasGirsls);

// every - удовлетворяет ли каждій студент условия

const areYoungt = students.every((student) => student.age < 70);
console.log(areYoungt);

// Есть ли девушка 29 лет
const hasWomanTwentyNine = students.some(
  (student) => student.gender === "female" && student.age === 29
);

console.log(hasWomanTwentyNine); // true

// filter
// dвозвращает новый масив из элементов удовлетворительных условий
const femaleStudents = students.filter(
  (student) => student.gender === "female"
);
console.log(femaleStudents);

const fourYear = students.filter((student) => student.age === 40);

const total = students
  .filter((student) => student.gender === "male")
  .reduce((acc, student) => acc + student.age, 0);
console.log(total); // 138

// Мутирующие методы
// pop, shift, unsfift, push
// reverse - разворачивает исходный массив

const cars = ["BMW", "Porsche", "Opel"];
cars.reverse(); // мутирует исходный массив
console.log(cars);

// sort
const nums = [9, 2, 4, 8, 123];
nums.sort();
console.log(nums); // [ 123, 2, 4, 8, 9 ]

nums.sort((a, b) => a - b);
console.log(nums); // [ 2, 4, 8, 9, 123 ]

nums.sort((a, b) => b - a);
console.log(nums); // [ 123, 9, 8, 4, 2 ]

students.sort((st1, st2) => st2.age - st1.age);
console.log(students);
