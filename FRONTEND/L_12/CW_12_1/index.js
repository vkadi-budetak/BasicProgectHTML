// Array methods

// ForEach, map
//* map - мы исполльзуем для создания нового масиива
const names = ["Ekaterina", "Dima", "Hannna"];

const namesUpperCase = names.map((name) =>
  name.length > 5 ? name.toUpperCase() : name
);

console.log(namesUpperCase);

console.log("==========");
const students = names.map((name) => ({ name }));
console.log(students);

const email = " john@gmail.com";
const user = {
  email,
  age: 18,
};

const nums = [1, 2, 3, 7, 10, 100, 230];

// num > 5  6 -> {value:6}
//          3 -> {AMOUNT: 5}

const objects = nums.map((num) => {
  if (num > 5) {
    return { value: num };
  }
  return { amount: num };
});

console.log(objects);

console.log("==========");

const trees = [
  { specie: "Oak", height: 17, year: 2000 },
  { specie: "Birch", height: 5, year: 2020 },
  { specie: "Apple tree", height: 8, year: 2002 },
];

// ["Oak", "Birch", "Apple tree"]
//
const namesfTrees = trees.map((tree) => tree.specie);
console.log(namesfTrees);

console.log("==========");
// { specie: "Oak", height: 17, year: 2000 } -> {specie: "Oak", height: 17}

const treesShorttInfo = trees.map((tree) => {
  return { specie: tree.specie, height: tree.height };
});

console.log("==========");
// [{priceKg: 4.5, quantity:3, title:"Cherry"}]
const slots = [
  { priceKg: 4.5, quantity: 3, title: "Cherry" },
  { priceKg: 120, quantity: 0.5, title: "Caviar" },
  { priceKg: 10, quantity: 1, title: "Meat" },
];

// исходные данные не должны тзменится
// Создайте новый массив с элементами по образцу {name: "Cherry", price: 13.5}

const groceryList = slots.map((slot) => {
  return { name: slot.title, price: slot.priceKg * slot.quantity };
});

console.log(groceryList);

console.log("==========");
//* forEach
groceryList.forEach((item) => {
  item.price *= 0.8;
});
console.log(groceryList);

console.log("==========");
const workers = [
  { name: "john", salary: 5000 },
  { name: "bob", salary: 5200 },
];

// Зарплаты будут повышены на 450
// не создовая новый массив

workers.forEach((worker) => {
  worker.salary += 450;
});

console.log(workers);
console.log("==========");
// callback
// { name: "john", salary: 5450 }, { name: "bob", salary: 5650 },
let acc = 0;
for (const worker of workers) {
  acc += worker.salary;
}
console.log(acc); // 11100

console.log("==========");
//* REDUCE

workers.reduce((acc, worker) => {
  return acc + worker.salary;
}, 0);

// acc = 0 worker.salary = 5450;
// acc = 5450 worker.salary = 5650 ..... = 11100
// console.log(res); // 11100
// reduce - чтобы сложить и получить общее значение

console.log("==========");

// Math.max(a, b) вернет нам наибольшее знаяения
let max = workers.salary[0];

for (const worker of workers) {
  if (max < worker.salary) {
    max = Math.max(max, worker.salary);
  }
}

console.log(max);

const mamxSalary = workers.reduce(
  (max, worker) => Math.max(max, worker.salary),
  0
);
console.log(mamxSalary);

console.log("==========");
