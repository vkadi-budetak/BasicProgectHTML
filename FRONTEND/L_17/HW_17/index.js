const products = [
  { id: 1, name: "🍎 Apple", price: 50, category: "fruits" },
  { id: 2, name: "🥛 Milk", price: 80, category: "dairy" },
  { id: 3, name: "🍌 Banana", price: 30, category: "fruits" },
  { id: 4, name: "🧀 Cheese", price: 120, category: "dairy" },
];

// Получить массив только из имён продуктов. 👉 Используй .map()
const nameProduct = products.map((n) => n.name);
console.log(nameProduct);

// Отфильтровать только фрукты. 👉 Используй .filter()
const fruitsProducts = products.filter((n) => n.category === "fruits");
console.log(fruitsProducts);

// Найти продукт с id = 3. 👉 Используй .find()
const idProducts = products.find((n) => n.id === 3);
console.log(idProducts);

// Посчитать суммарную стоимость всех товаров. 👉 Используй .reduce()
const sumProducts = products.reduce((sum, n) => sum + n.price, 0);
console.log(sumProducts);

// Создать новый массив, где к каждому объекту добавлено поле inStock: true. 👉 Используй .map()
const newProducts = products.map((product) => ({
  ...product,
  inStock: true,
}));

console.log(newProducts);
