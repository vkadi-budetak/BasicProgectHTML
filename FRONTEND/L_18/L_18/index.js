const str = " Apple is my favourite fruit! ";
// Изменение
// получить строку в верхнем регистре
const strInUpper = str.toUpperCase();
console.log(strInUpper); // APPLE IS MY FAVOURITE FRUIT!
// в нижнем регистре
console.log(str.toLowerCase()); // apple is my favourite fruit!
// убрать пробелы по краям
const trimmedStr = str.trim(); // 'apple is my favourite fruit!'
// split
const fruitsAsString = "Apple-Orange-Bannana";
// из строки получить массив
const fruits = fruitsAsString.split("-");
console.log(fruits); // [ 'Apple', 'Orange', 'Bannana' ]
// как соединить элементы массива
console.log(fruits.join("--"));
// Находить индекс символа
const word = "Jupiter";
console.log(word.indexOf("p")); // 2
const word2 = "prollaps";
console.log(word2.lastIndexOf("p")); // 6 - пошли с конца
// Узнать длинну строки
console.log(word2.length); // 8
// получить символ по индексу
console.log(word[0]); // J
// как получить последний символ из строки
console.log(word[word.length - 1]); // r
// at - позволяет получать элемент по индексу - поддерживает отрицательные значения
console.log(word.at(0)); // J
console.log(word.at(-1)); // r

// Как извлекать часть строки?

const phrase = "Christmas is the best time of the year!";

console.log(phrase.slice(0, 3)); // верхняя граница не включительно

const inddexOfAt = ElementInternals.indexOf("@");
const name = email.slice(0, indexOfAt);
