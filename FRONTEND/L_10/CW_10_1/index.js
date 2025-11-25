//* while
//* for
//* for of
//* do while

//* Loop for
let x = 100;

for (let i = 0; i < 10; i++) {
  const y = 100;
  x += 2;
  console.log(i);
}
console.log(x);
// console.log(y); // Ошибка

// while loop
let y = 1287;
let count = 0;
while (y > 0) {
  count++;
  y -= 13;
}
console.log(y);
console.log(count); // скільки разів відпрацьовує цикл

//
// 0,1,2,3,4....n
const arr = ["hat", "coat", "shoes", "tie", "gloves"];
// 4 3 2 1 0
// lenght -1, lenght -2, lenght -3, lenght -4 ... 0

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

for (let i = 1; i < arr.length; i++) {
  console.log(arr[arr.length - i]);
}

// как вывести в обратном порядке через while
let i = arr.length - 1;
while (i >= 0) {
  console.log(arr[i]);
  i--;
}

// 0(n) линейная сложность
// 0(log(n)) - логарифмическая
// 0(1) - константная
console.log(arr[3]);
// 0 (n^2) - квадратичная
// когда вложеные циклы

//* Задание
//* Создайте метод printFromIndex
//* метод принимает в себя массив и какой-то индекс
//* нужно распчатать все элементы массива начиная с указанного индекса

const fruits = ["apple", "ornage", "mango", "bananna"];
const q = 2;

const printFromIndex = (arr, t) => {
  for (let i = t; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printFromIndex(fruits, q); // mango bannanna

const getSubArrayPrintFromIndex = (arr, t) => {
  const res = [];
  for (let i = t; i < arr.length; i++) {
    console.log(arr[i]);
    res.push(arr[i]);
  }
  return res;
};
console.log(getSubArrayPrintFromIndex(fruits, 2));

// slice
const getSubArrayPrintFromIndexV2 = (arr, t) => arr.slice(t);
console.log(getSubArrayPrintFromIndexV2(fruits, q));
console.log(fruits);
