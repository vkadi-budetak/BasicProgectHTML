// Spread syntax - синтаксис " распыление"

// Повторим примитивные и ссылочные типы
const fruits = ["appple", "orange", "banana"];

const fruits2 = fruits;
fruits[0] = "mango";
console.log(fruits);
console.log(fruits2);

// То есть один объект и две переменные которые содержат ссылку на этот объект
// Если сам объект изменить/мутировать - то обе переменные будут
// содержать ссылку на измененный объект

const cars = ["Lada", "Nissan", "Honda"];
const carsCopy = [...cars];
carsCopy[0] = "Opel";
console.log(cars);
console.log(carsCopy);

const cities1 = ["Berlin", "Paris"];
const cities2 = ["London", "Budapest"];
const joinCities = [...cities1, ...cities2];
console.log(joinCities);

// Мы можем создать массив и добавить в него элемент
const vegitables = ["cucumber", "tomato"];
const newVegitables = [...vegitables, "aphel"];

//* Стрелочная функция
// Пример обычной функции
function sum(a, b) {
  return a + b;
}

console.log(sum(20, 10));

const sum2 = (a, b) => {
  return a + b;
};

const sum3 = (a, b) => a + b;

//Передача функции в качестве параметра
function calculate(a, b, operation) {
  return operation(a, b);
}
function subtract(a, b) {
  return a - b;
}

// Вызов функции
calculate(9, 3, subtract); // 6
calculate(9, 3, (a, b) => a / b); //3

//* МАССИВ
