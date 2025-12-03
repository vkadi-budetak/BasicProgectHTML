//* TIMERS

let x = 10;

setTimeout(() => {
  console.log(x);
}, 3000);

x = 27;

let y = 15;
console.log(y);

//-----------
// Создайте функцию greet(), которая
// выведет в консоль две фразы
// Hi! через 2 секуды после запуска
// How are you? - через 4 секунды после запуска
// Назовите функицю greet()

function greet() {
  setTimeout(() => {
    console.log("Hi");
  }, 2000);

  setTimeout(() => {
    console.log("How are you");
  }, 4000);
}

greet();
