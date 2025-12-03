function getTwenty() {
  return 20;
}

let x;

setTimeout(() => {
  x = getTwenty();
}, 1000);

console.log(x); // undefined

setTimeout(() => {
  console.log(x); // 20
}, 2000);

// Promise
// fullfilled - вы получаете результат
// rejected - вы получить ошибку
// pending - ожидание

const getRandom = () => {
  return Math.floor(Math.random() * 2);
};

const promiseOfBurger = new Promise(function (res, rej) {
  setTimeout(() => {
    if (getRandom()) {
      res("Cheeseburger");
    }
    rej(new Error("Kitchen is on fire, save yourself!"));
  }, 3000);
});

// then - функция для ожидания значения - если все ок
// catch - в который попадет ошибка - в случае неудачи
console.log(promiseOfBurger);

promiseOfBurger
  .then((burger) => {
    console.log(burger);
  })
  .catch((err) => {
    console.log(err);
  });
