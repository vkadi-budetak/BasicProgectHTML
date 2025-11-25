// // Развернуть массив без создания дополнительного массива
// const arr = ["moon", "star", "romb", "square", "triangle"];
// const arr1 = ["moon", "star", "square", "triangle"];
// // поменяли местами первый и последний
// // let temp = arr[0];
// // arr[0] = arr[arr.length - 1];
// // arr[arr.length - 1] = temp;
// // temp = arr[1];
// // arr[1] = arr[arr.length - 2];
// // arr[arr.length - 2] = temp;
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   const temp = arr[i];
//   arr[i] = arr[arr.length - (i + 1)];
//   arr[arr.length - (i + 1)] = temp;
// }
// console.log(arr);
// // codewars - решать задачи
// // do while
// let x = 1000;
// do {
//   console.log("Hey");
// } while (x < 10);
// // for... of
// const cars = ["BMW", "Porche", "Opel"];
// for (const car of cars) {
//   console.log(car);
// }
// // 2D
// const matrix = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];
// // 5 4 3 2 1 10 9 8 7 6 15 14 13 12 11
// for (const arr of matrix) {
//   //   console.log(arr);
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }
// //
// const arr2 = [1, 2, 3];
// // spread operator
// const arr3 = [8, ...arr2, 10];
// console.log(arr3); // [ 8, 1, 2, 3, 10 ]
// const myToys = ["car", "pistole"];
// const brotherToys = ["saber", "ship"];
// const ourToys = [...myToys, ...brotherToys];
// console.log(ourToys);
// // Создайте метод, который принимает массив и дополнительный элемент
// // возвращает копию исходного массива с указанной элементом в конце массива
// // addToArray
// const addToArray = (arr, additionalElement) => [...arr, additionalElement];
// const res = addToArray([1, 2, 3], "apple"); // ---> [1, 2, 3, "apple"]
// console.log(res);

//!==================
// Задача: У тебе є масив цін: const prices = [100, 200, 50, 300];.
// Тобі потрібно написати цикл (можна використати зручний for...of, про який ти згадував),
// щоб порахувати загальну вартість усіх товарів.

const prices = [100, 200, 50, 300];
let sum = 0;

for (let i of prices) {
  sum += i;
}
console.log(sum);
