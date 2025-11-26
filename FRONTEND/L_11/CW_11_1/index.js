// Написать метод который выводит такую последовательносит чесел
// 1, 3, 5, 7, 9, ... 89
for (let i = 1; i <= 90; i += 2) {
  console.log(i);
}

console.log("************");

for (let i = 1; i <= 90; i++) {
  if (i % 2) {
    console.log(i);
  }
}

// Как вывести цифры числа
let x = 19371239; // 1937123.9
console.log(Math.floor(x % 10));
x = x / 10; // 1937123.9

// console.log("x = ", x);
console.log(Math.floor(x % 10));

x = x / 10;
console.log(Math.floor(x % 10));

while (x >= 1) {
  console.log(Math.floor(x % 10));
  x = x / 10;
  console.log(x);
}
