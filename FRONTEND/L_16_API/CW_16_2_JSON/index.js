// I. Если есть json строка
const str = '{"email": "admin@gmail.com"}';
// JSON.parse создаст js объект из json
const user = JSON.parse(str);

console.log(user.email); // admin@gmail.com

// II. Если есть объект js, то мы можем преобразовать в строку
// (для передачи или хранения)

const cat = {
  name: "Murzik",
};

const catAsString = JSON.stringify(cat);
console.log(catAsString); // '{"name":"Murzik"}'

// III. Можем использовать для создания копии объекта
const dog = {
  name: "Jan",
};

const dog2 = dog; // тот же объект
// можно сделать копию с помощью spread
const newDog = {
  ...dog,
};
// Если будем менять newDog, то dog никак не изменится.
// Это два независимых объекта

// Можем так же создать полностю независимую сущность
const newDog2 = JSON.parse(JSON.stringify(dog));
console.log(newDog2);
