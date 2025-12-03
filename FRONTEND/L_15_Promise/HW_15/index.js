// 📘 Задание — Промис с рандомной ошибкой
// Создайте Promise, который с одинаковой вероятностью (50/50):

// либо возвращает строку "Best day of my life"
// либо выбрасывает ошибку с сообщением "Something is off"
// Затем обработайте результат с помощью .then() и .catch().

const getRandom = () => {
  return Math.floor(Math.random() * 2);
};

const promiseOfDay = new Promise(function (resolve, reject) {
  const isLucky = getRandom();

  if (isLucky) {
    resolve("Best day of my life");
  }
  reject(new Error("Something is off"));
});

promiseOfDay
  .then((goodDay) => {
    console.log(goodDay);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((finaly) => {
    console.log(finaly);
  });

const x = 20;

setTimeout(() => {
  x = 40;
}, 0);

console.log(x);
