//* Array

const friuts = ["apple", "orange", "bananna"];
const cars = [];

// получения элемента массива по индексу
const apple = friuts[0];
console.log(apple);

// изменение по индексу
// заменим элемент массива по индексу
friuts[1] = "mango";

const friends = ["Mark", "Helen", "Kate"];
const friends2 = friends;

console.log(friends2); // ["Mark", "Helen", "Kate"];

friends2[0] = "Dilan";

console.log(friends2); // ["Dilan", "Helen", "Kate"];
console.log(friends); // ["Dilan", "Helen", "Kate"];

// Как скопировать элементы, но чтобы был совершенно новый массив:
// 1. Создать новый пустой масиив и заполнить циклом из старого
// 2. Использовать spreed оператор ...
// spreed оператор ... - копирует значения из переданного массива
const independenFriends = [...friends];
// Мы создали новый массив
// Если мы будем заменять элеменнты, то friends не изменится
independenFriends[0] = "Nik";
console.log(independenFriends[0]); // Nik
console.log(friends[0]); // Dilan

// В массиве у нас могут быть элементы разных типов
const infoArr = ["Vlad", "Vlad2", 30];
const vladAge = infoArr[2];
console.log(vladAge);

const x = infoArr[10];
console.log(x); // undenfined

// Как еще можно создать массив
const arr = new Array(20);
// Создал массив длинной в 20 элементов
console.log(arr);
const asterisks = new Array(5).fill("*");
console.log(asterisks);
// с помощью метода fill можно заполнить массив указанным значением

// 2D массивы
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(matrix[0]); // массив [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]
console.log(matrix[0][2]); // 3

const copyOfMatrix = [...matrix];
console.log(copyOfMatrix);

//* Удобные методы для работы с массивами
//* push - добавить элемент в конец массива
//* pop - убрать из конца массива
//* shift - удаляет из начала
//* unshift - добавить в начало
const animals = ["Panda", "Crocodile"];
animals.push("Coala");
console.log(animals); // ["Panda", "Crocodile", "Coala"];
animals.unshift("Platipus");
console.log(animals); // ["Platipus", "Panda", "Crocodile", "Coala"];

// FIFO - first in first out - первый вошел и первый вышел
// LIFO - last in - first out - последний зашел - вышел первый

// cafe
const oleksii = "Oleksii";
const hanna = "Hanna";
const katerina = "Katerina";

const bar = [];
bar.push(hanna);
bar.push(oleksii);
bar.push(katerina);

// метод FIFO
// console.log(bar.shift());
// console.log(bar.shift());
// console.log(bar.shift());

// метод LIFO
console.log(bar.pop());
console.log(bar.pop());
console.log(bar.pop());

//* Условные конструкции
if (true) {
  console.log("hey");
} else {
  console.log("no hey");
}

// switch
let num = 10;

switch (num) {
  case 1: {
    console.log("first");
    break;
  }
  case 2: {
    console.log("second");
    break;
  }
  default: {
    console.log("default");
  }
}

const height = 140;
const result = height > 140 ? "ticket" : " no ticke";
