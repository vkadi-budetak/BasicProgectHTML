// Дан массив чисел:
// const numbers = [3, 8, 12, 5, 7, 19, 1];
// Напишите функцию findElement(array, target), которая с помощью цикла проверяет, содержится ли число target в массиве array.

// Функция должна:
// Возвращать true, если элемент найден.
// Возвращать false, если элемента нет в массиве.
// Для поиска использовать только цикл — не использовать методы includes, indexOf и т.п.

// const numbers = [3, 8, 12, 5, 7, 19, 1];
// const num = 8;

const findElement = (array, target) => {
  for (const i of array) {
    if (i === target) {
      return true;
    }
  }
  return false;
};
const a = findElement([3, 8, 12, 5, 7, 19, 1], 8);
console.log(a);

const findElement1 = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
};

const a1 = findElement1([3, 8, 12, 5, 7, 19, 1], 8);
console.log(a1);
