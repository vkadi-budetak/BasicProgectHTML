// Как скопировать свойства обьекта
const bob = {
  name: "Bob",
  age: 21,
};

// скопировать все пары ключ знаяения в новый обьект

const john = { ...bob, height: 180 };
console.log(john);

//
const car = {
  model: "BMW",
  year: 2024,
  price: 22_000,
};

const carNew = {
  ...car,
  model: "Volkswagen Tiguan",
  price: 20_000,
};

console.log(carNew);

// методы внутры обьектов
const cat = {
  nick: "Murka",
  mew() {
    console.log("Mew-mew");
  },
};

cat.mew(); // Mew-mew

const kesha = {
  nick: "Kesha",
  intoduce() {
    console.log(`My name is ${this.nick}`);
  },
};

kesha.intoduce(); // My name is Kesha
kesha.nick = "Keshka";
kesha.intoduce(); // My name is Keshka

//
const circle = {
  radius: 10,
  getPerimetr() {
    return 2 * Math.PI * this.radius;
  },
};

console.log(circle.getPerimetr());

//*
const user = {
  name: "Fred",
  intoduce() {
    console.log(`My name is ${this.name}`);
  },
};
user.intoduce(); // My name is Fred

// Могу ли сохранить метод под отдельным именем
const introduce = user.intoduce;

introduce(); // My name is undefined

// мы можем явно указывать this
function printAge() {
  console.log("My age ist " + this.age);
}

printAge();

const murzik = {
  nick: "Murzick",
  age: 5,
};

printAge.call(murzik);
