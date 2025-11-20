console.log("Hello");

let x = 10;
let name = "John";

const y = 11;

x = 12;
console.log(x);

x = 14;
console.log(x);

x = "TEN";
console.log(x);

// динамческий язык
// строгие языки

// Primitive Types

// string
let firstName = "Bob";
let secondName = "Jahnsos";

// number
let age = 9;
let fatPercentage = 16.3;

console.log(Number.MAX_SAFE_INTEGER); // 2^53 − 1

// bigignt
let likesNumber = 150n; // постфикс n показывает что это bigint

// boolean
let isHappy = true;
let hasCar = false;

// undefined
let temperatura;
console.log(temperatura); // undefined
temperatura = 12;
console.log(temperatura); // 12
let z = undefined; // можно и явным способом указать это значения

// null
let height = 100;
height = null;
const color = null;

// symbol
const sym = Symbol("foo");
// символ может использовать как уникальный идетификатор
// - например для уникальных ключей в обьектах

// КАК ПРОИСХОДИТ ПРЕОБРАЗОВАНИЕ МЕЖДУ ТИПАМИ?

// Явное преобрезование vs неявное преобразование
// explicit vs implicit

// Неявное преобразование к строке
const t = 10 + "10"; // concatination
console.log(t); // "1010"

// как посмотреть и проверить тип переменной
console.log(typeof t); // "string"
console.log(typeof age); // "number"
// typeof возвращает название типа переменной - в форме стринга

// Явное преобразование к строек
const f = 130;
// 130 ---> "130"
console.log(130 + ""); // неявна

const stringF = String(f);
console.log(typeof stringF);
console.log(stringF); // "130" - явное преобразовнаие к строке

// Неявное преобразование к числу
const quantity = "1400";
let newQuantity = quantity - 100;
console.log(newQuantity); // 1300

const quantityAsNumber = Number(quantity); // 1400

// NaN - это not a number
const myName = "Vlad";
const myNameAsNumber = NUmber(myName);
console.log(myNameAsNumber);
// Мы получаем NuN - не получилось преобразовать в число
console.log(Nan + 10); // NaN
// Интересный факт
console.log(typeof NaN); // number
// Nan - особое значения из тип numberq

// Явное преобразование в булеан
const q = 17;
console.log(qAsBoolean); // true

console.log(Boolean(-10)); // true

const i = 0;
console.log(Boolean(i)); // false

// строки в булеан
const a = "hello";
console.log(Boolean(a)); // true

const b = "false";
console.log(Boolean(b)); // true

const c = "";
console.log(Boolean(c)); // false

// '', 0, NaN, null, undefind --> false
// лжные значения - falsy valyes - те которые преобразовуються в false
console.log(Boolean(null)); // false

// неявное преобразования в булеан
const fName = "Vlad";
if (fName) {
  console.log("Name exist: " + fName);
} else {
  console.log("No name");
}
