// 1. Выведи в консоль строку "Hello, World!".
const i = "Hello, World!";
console.log(i);

// 2.Создай переменную pet со значением "Dog", затем измени её на "Cat", а потом на число 10.
// Выведи значение после каждого изменения.
let pet = "Dog";
pet = "Cat";
console.log(pet);
pet = 10;
console.log(pet);

// 3.Создай константу country со значением "Armenia". Попробуй изменить её значение и объясни, что произойдет.
const country = "Armenia";

// 4.Создай строку "JavaScript" и выведи её в верхнем регистре.
const a = "JavaScript";
console.log(a.toUpperCase());

// 5. Соедини строки "Hello" и "World" через пробел.
const a1 = "Hello";
const a2 = "World";
console.log(a1 + " " + a2);

// 6. Создай переменную isSunny = true. Если она true, выведи "На улице солнечно", иначе — "Облачно".
const isSunny = true;
if (isSunny) {
  console.log("На улице солнечно");
} else {
  console.log("Облачно");
}

// 7. Перепиши задачу 6 с использованием тернарного оператора.
const f = isSunny ? "На улице солнечно" : "Облачно";
console.log(f);

// 8. Создай переменную без значения и выведи её. Затем присвой число и снова выведи.
let one;
console.log(one);
one = 1;
console.log(one);

// 9. Создай переменную car и присвой ей null. Объясни, что это значит.
const car = null;
console.log(car);

// 10. Создай два символа с одинаковым описанием "id" и сравни их.
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // Виведе: false

// 11. Преобразуй число 25 в строку двумя способами.
let number = 25;
console.log("" + number);
let number2 = String(number);
console.log(number2);

// 12. Преобразуй строку "45" в число и сложи с числом 5.
let str = "45";
console.log(Number(str) + 5);

// 13. Преобразуй строку "12abc" в число. Что получится?
let abc = "12abc";
console.log(Number(abc));

// 14. Определи тип переменной true.
const b = true;
console.log(typeof b);

// 15. Что выведет Boolean("") и Boolean(" ")?
const b1 = Boolean("");
console.log(b1); // false
const b2 = Boolean(" ");
console.log(b2); // true

// 16. Сравни число 5 и строку "5" с помощью == и ===.
console.log(5 == "5"); // true
console.log(5 === "5"); // false

// 17. Объясни, что делает код:
const c = ("b" + "a" + +"a" + "a").toLowerCase(); // "ba" + NaN = "baNaN" + "a" = "baNaNa"
// Оскільки літеру +"a" неможливо перетворити на число, JavaScript повертає спеціальне значення помилки: NaN (Not a Number — «Не Число»).
console.log(c);
const c1 = ("a" + +"a" + "a" + "s").toLowerCase(); // "a" + NaN = "aNana" +  + "a" + "s" = "ananas"
console.log(c1);

// 18. Создай массив colors со значениями "red", "green", "blue" и выведи его длину.
// const colors = [red, green, blue];
// console.log(colors.length);

//!---
//*---

// 19.

// Создай массив fruits = ["apple", "banana"].
// Выведи второй элемент и несуществующий третий.

// 20.

// Выведи все элементы массива cars = ["BMW", "Mercedes", "Audi"] с помощью цикла for.

// 21.

// Создай пустой массив students. Добавь в него "Alex" и "John" с помощью .push.

// 22.

// Вставь "Tom" в начало массива students.

// 23.

// Удалите последний элемент из массива students.

// 24.

// Удалите первый элемент из массива students.

// 25.

// Создай массив numbers = [1, 2, 3].

// Добавь число 4 в конец.

// Добавь число 0 в начало.

// Удали последний элемент.

// Удали первый элемент.
// Выведи массив после каждого шага.
