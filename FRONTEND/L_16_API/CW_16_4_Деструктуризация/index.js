//* Destructuring assignment

const user = {
  email: "john@gmail.com",
  age: 37,
  pet: {
    type: "dog",
    nick: "Freddy",
  },
};

// const email = user.email;

// const age = user.age;
// const nick = user.pet.nick;

// destructuring assignment
const { email, age, pet } = user;
const { nick } = pet;

// const { email, age, pet: {nick} } = user; // если хотим в одну строчку

console.log(email);
console.log(age);
console.log(nick);

// Задание
const ship = {
  type: "fregat",
  name: "Black Pearl",
  capitan: {
    nick: "Black Beard",
    age: 67,
  },
};

// Используя деструктуризацию сохраните в качестве переменных
// следущие свойства: name, type, age

const {
  name,
  type,
  capitan: { age: captainAge },
} = ship;
// я переобявляю переменную age под другим названием

const fruit = {
  name: "Pear",
};
// const fruitName = fruit.name
// обьявили переменную с названием fruitName и положили в нее то значение, которое было в обьекте fruit по ключу name

const { name: fruitName } = fruit;
console.log(fruitName);
