//* OBJECT - структура данных где храняться значения и ключи

const user = {
  email: "bob@gmail.com",
};

// key: value

// как получить значения по ключу
// dot notation
console.log(user.email); // "bob@gmail.com"

console.log(user.familyName); // undefind
console.log(user.age); // age

// как поменять информацию по ключу
user.age = 25;

// Как именовать ключи:
// lowerCameleCase

// Ключможет быть странно назван, как быть тогда?
const dog = {
  name: "Bobby",
  "has flies": true,
};

console.log(dog.name); // Bobby
//bracket notation
console.log(dog["has flies"]);

// Создайте объект для корабля ship
// имя Titanik
// команда crew указано числовое значение
// numberOfBoats - количество спасательных шлюпок
// isSinken - false

// Выведите значение свойства numberOfBoats;
// Измените значение свойства isSinken - на true
// Выведите это свойство в консоль

const ship = {
  name: "Titanik",
  crew: 100,
  numberOfBoats: 10,
  isSinken: false,
};

console.log(ship.numberOfBoats);
ship.isSinken = true;
console.log(ship.isSinken);

// как можно удалить свойство из обьекта
console.log(ship);

const cat = {
  name: "Johny",
};
// как изменить ключ
// name -> nickname
cat.nickname = cat.name;
console.log(cat);
delete cat.name;
console.log(cat);

Object.freeze(cat); //!!!!!!!!!!!!!!!!!!!
// не можем менять: добавлять свойства, удалять и тд
cat.nickname = "Fred";
console.log(cat);

// Интересный момент
const catName = cat.nickname;
console.log(catName);

//
const myKey = "age";

const sam = {
  name: "Sam",
  age: 73,
};

console.log(sam.myKey); // undefined
console.log(sam[myKey]); // "Sam"

//
const city = {
  population: "Рaботать",
  country: { name1: "Африка", name: "Гандурас" },
  languages: ["Инглиш", "Местный"],
};
console.log(sity);
sity.languages.push("Инопланетный");
console.log(sity);
