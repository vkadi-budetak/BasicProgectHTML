//? lowerCamelCase - для переменных и методов
//? PascalCase - для названий классов в js
//? snake_case - для названий папок и для id в html
//? SCREAMING_SNAKE_CASE - для констант, которые никогда не меняются
//? my-best-projects - cebab-case

const BASE_URL = "http://back.com";

//!---------- ДЗ -------------

let age = 45;
let name = "BOB";
let isEarle = true;

console.log(age, name, isEarle);

//? ==========================
const brand = "Nike";

const phrase = "My favourite brand is " + brand;
console.log(phrase);

//* Шаблонная строка
const sentence = `My favourite brand is ${brand}. Huray!`;
console.log(sentence);

//!---------- Операторы ---------------
// +, - , / , * , ** - маткматические операторы
// = - оператор присвоения
const sum = 1 + 2; // оператор, операнды это 1,2
// + - это бинарный оператор
const twoInPowerOfThree = 2 ** 3;
console.log(twoInPowerOfThree);

// Логические операторы
//? - || - или, && - и , ! - отрицание
//? - || - когда хотя бы один true
//? - && - когдла оба true
//? - ! противоположное значения

// Операторы сравнения
//? - === - строгое присвоения
//? - == - не строгое присвоения

console.log("12" === 12); // false
console.log("12" == 12); // true - попробует привести к числу
console.log(1 == true); // true - попробует привести к числу
console.log(0 == false); // true - попробует привести к числу
console.log("" == 0); // true - попробует привести к числу
console.log("" == false); // true - попробует привести к числу
console.log("ads" == false); // false - попробует привести к числу

// Задание
// Создайте переменную myAge с вашим возрастом
// Если возрасть больше или равен 18
// "We go to the bar"
// В противном случай выведите фразу
// "We will go to the library"

const isAge = 12;
const gender = "female";

if (isAge >= 18) {
  console.log("We go to the bar");
} else {
  if (gender === "male") {
    console.log("We will go to the bowling");
  } else {
    console.log("We will go to the shopping");
  }
}

// блок кода
const cake = "apple cake";

{
  let familyName = "Kozlianska";
  console.log(familyName); // видно
  console.log(cake);
  const juice = "apple juice";
}
// console.log(familyName); // не видно, error
