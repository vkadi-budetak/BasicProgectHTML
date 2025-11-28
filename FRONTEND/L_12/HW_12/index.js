//* 🔹 Задание
//* Создайте метод capitalizeElements, который принимает массив строк и ничего не возвращает.
//* Метод должен заменить текст в каждом элементе массива так, чтобы он начинался с большой буквы. Подсказка: str.charAt(0).toUpperCase() + str.slice(1);
//* Не забудьте сделать проверку, что элемент массива - это действительно строка и, что она не пустая.
//* Пример:
//* ["apple", "orange", "banana"] ---> ["Apple", "Orange", "Banana"]

const fruits = ["apple", "orange", "banana"];

const capitalizeElements = (arr) => {
  arr.forEach((element, index) => {
    if (typeof element === "string" && element.length > 0) {
      arr[index] = element.charAt(0).toUpperCase() + element.slice(1);
    } else {
      throw new Error("Unexected type: expected string");
    }
  });
};

capitalizeElements(fruits);
console.log(fruits);

console.log("===========");

//* 🔹 Задание
//* Создайте метод sortStringsAlphabetically, который принимает массив строк и ничего не возвращает. Метод должен отсортировать массив на месте в алфавитном порядке. Вы можете сравнить строки следующим образом: str1.localeCompare(str2);
//* Не забудьте сделать проверку, что элементы массива — это строки.
//* Пример:
//* ["banana", "apple", "orange"] ---> ["apple", "banana", "orange"]

const fruits2 = ["banana", "apple", "orange", "grape"];

const sortStringsAlphabetically = (arr) => {
  arr.sort((a, b) => {
    if (typeof a !== "string" || typeof b !== "string") {
      throw new Error("Wrong argument: expected string");
    }
    return a.localeCompare(b);
  });
};

sortStringsAlphabetically(fruits2);
console.log(fruits2);

console.log("===========");

//* 🖼 Домашнее задание: Создание метода для работы с массивом: мутация массива
//* 🔹 Задание
//* Создайте метод filterShortWords, который принимает массив строк и возвращает новый массив, в котором останутся только те слова, длина которых больше 3 символов.
//* Не забудьте сделать проверку, что элементы массива — это строки.
//* Пример:
//* ["hi", "apple", "cat", "banana"] ---> ["apple", "banana"]

const worts = ["hi", "apple", "cat", "banana"];

const filterShortWords = (arr) => {
  return arr.filter((word) => {
    return typeof word === "string" && word.length > 3;
  });
};

const longWords = filterShortWords(worts);

console.log(longWords);
console.log(worts);
