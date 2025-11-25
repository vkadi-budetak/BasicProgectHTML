//* ARROW Functiom
// Arrow functions - стрелочные функции

// functional declaration
function sum(a, b) {
  return a + b;
}

// arrow function
// блочная стрелочная функция
const sum2 = (a, b) => {
  return a + b;
};
console.log(sum2(1, 2)); // 3

// сторочная стрелочная функция
const sum3 = (a, b) => a + b;
console.log(sum3(1, 2)); // 3

// Задание
// Создайте стрелочную функцию - блочную,
// которая выводит в консоль ваше имя
// Назовите ее printMyName
const name = "vlad";

const printMyName = (name) => {
  console.log(name);
};
printMyName(name);

// Создайте строчную стрелочную функцию,
// которая возвращает ваше имя
// Назовите ее getMyName

const getMyName = (name) => name;
getMyName();

// Задание
// Напишите метод, который принимает массив,
// и печатает самый первый элемент массива
// Метод ничего не возвращает
// Назовите метод printFirstElement
const arr = ["1", "2", "3", "4", "5"];

const printFirstElement = (arr) => console.log(arr[0]);

printFirstElement(arr);

// Напишите метод, который принимает массив,
// и возращает самый первый элемент массива
// (дополнительно) сделайте чтобы этот элемент исчезал из самого массива
// назовите метод takeFirst

const takeFirst = (arr) => {
  return arr.shift();
};

takeFirst(arr);
console.log(arr);

//
const swapFirstAndLast = (arr) => {
  if (arr.length <= 0) {
    return;
  }
  const temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
};

console.log(arr);
swapFirstAndLast(arr);
console.log(arr);

const emptyArr = [];
swapFirstAndLast(emptyArr);
console.log(emptyArr);

//
const getBiggerValue = (a, b) => (a > b ? a : b);

console.log(getBiggerValue(1, 15)); // 15

// const getBiggerValue = (a, b) => Math.max(a, b); // через Math.max
