const laptop = {
  brand: "Dell",
  model: "XPS 15",
  specs: {
    cpu: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
  },
};
// destructuring assignment
const { brand, model, specs } = laptop;
const { cpu: processor, ram } = specs;
console.log(brand);
console.log(model);
console.log(ram);
console.log(processor);
// destructuring of array
const fruits = ["Mango", "Lemon", "Passion fruit"];
// const mango = fruits[0];
// const lemon = fruits[1];
// const passionFruit = fruits[2];
const [, lemon, passionFruit] = fruits;
console.log(lemon); // Lemon
// console.log(mango);
console.log(passionFruit);
// Где это используется
// 1. Функция возвращает массив и мы его деструктурируем
function useUtils() {
  const instrument = "showel";
  const dig = () => {
    console.log("I'm digging");
  };
  return [instrument, dig];
}
// в том месте программы, где нам понадобится инструмент и метод
console.log(useUtils()); // ["showel", "dig"]
const [instrument, dig] = useUtils();
dig();
// 2. Значения по умолчанию
const user = {
  email: "user@gmail.com",
  age: 19,
};
// можем указывать fallback - значения на всякий случай - default value
// через =
const { age = 25, email } = user;
console.log(age);
console.log(email);
// 3. Rest ... - rest оператор
const trees = ["Oak", "Maple", "Birch", "Sicamore"];
const [oak, ...others] = trees;
console.log(oak); // "Oak"
console.log(others); // ["Maple", "Birch", "Sicamore"]
// 4. Методы с произвольным количеством элементов (rest)
function customPrint(a, ...rest) {
  console.log(a); // можем использовать и рест сам по себе, без а
  console.log(rest); // [ 10, 12 ]
}
customPrint(9, 10, 12);
// 5. Rest с объектом
const house = {
  city: "Miami",
  price: 5_000_000,
  street: "Palm beach",
  number: "80",
};
const { price, ...restOfHouse } = house;
console.log(price);
console.log(restOfHouse); // { city: 'Miami', street: 'Palm beach', number: '80' }
// 6. Создали два массива объектов, разделив объекты исходного массива
const products = [
  { title: "Iphone XR", price: 1100, image: "http://cdn.com/iphone-21asd" },
  { title: "Chess", price: 30, image: "http://cdn.com/chess-21asd" },
  { title: "Guitar", price: 300, image: "http://cdn.com/guitar-21asd" },
  { title: "Vinyl Player", price: 1300, image: "http://cdn.com/player-21asd" },
];
// два отдельных массива
// { title: "Iphone XR", price: 1100, image: "http://cdn.com/iphone-21asd" }
// { title: "Iphone XR"} {price: 1100, image: "http://cdn.com/iphone-21asd" }
const titleObjects = [];
const priceImageObjects = [];
for (const product of products) {
  const { title, ...rest } = product;
  titleObjects.push({ title });
  priceImageObjects.push(rest);
}
console.log(titleObjects);
console.log(priceImageObjects);
// 7. Деструктуризация аргументов в методе
// function printCar(car) {
//   console.log(car.brand);
//   console.log(car.price);
// }
function printCar({ brand, price }) {
  console.log(brand);
  console.log(price);
}
printCar({ brand: "BMW", price: 20_000 }); //BMW 20000
// 8 Альтернативное решение для продуктов
const titleObjects2 = products.map(({ title }) => {
  return { title };
});
const priceImageObjects2 = products.map(({ price, image }) => {
  return { price, image };
});
console.log(titleObjects2);
console.log(priceImageObjects2);
