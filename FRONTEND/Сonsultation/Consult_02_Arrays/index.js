//* ОБЄКТИ

const brothers = [
  { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
  { race: "human", height: 185, age: 46, name: "Aragorn" },
  { race: "elf", height: 189, age: 110, name: "Legolas" },
  { race: "dworf", height: 140, age: 150, name: "Gimly" },
  { race: "human", height: 195, age: 200, name: "Gandalf" },
];
const frodo = brothers[0];
console.log(frodo);

const [frodo1, aragorn, legolas, gimly, gandalf] = brothers;
console.log(frodo1);

const ageOfFrodo = frodo.age; // достали по ключу
console.log(ageOfFrodo);

// Метод Map - возвращает новый массив,
// созданный путем применения функции к каждому элементу исходного массива
//Этот метод не изменяет исходный массив

// Пример 1
const names = brothers.map((brother) => brother.name);
console.log(names);

const agesAndNames = brothers.map(
  (brother) => brother.name + " " + brother.age
);

console.log(agesAndNames);

//Пример 4
// высокий - выше или равно 170
// маленький - ниже 170
// массив из слов [маленький, высокий, высокий, маленький,высокий]

const sizes = brothers.map((brother) => {
  if (brother.height >= 170) {
    return "высокий";
  }
  return "маленький";
});
console.log(sizes); // ["маленький", "высокий", "высокий", "маленький", "высокий"]

const sizesVer2 = brothers.map((brother) =>
  brother.height >= 170 ? "высокий" : "маленький"
);
console.log(sizesVer2); // ["маленький", "высокий", "высокий", "маленький", "высокий"]

// Метод forEach-  для изменния исходного массива
// Пример 1
//Состарим всех героев на 1 год

brothers.forEach((brother) => (brother.age += 1));
console.log(brothers);

// 3 Метод reduce
// с помощью цикла  for
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log(sum); // 551

// с помощью reduce
const sum2 = ages.reduce((acc, current) => acc + current, 0);
// iteration -- acc -- current
// 1         -- 0   -- 45
// 2         -- 45  -- 46
// 3         -- 91  -- 110
// 4         -- 201 -- 150
// 5         -- 351 -- 200

// Аккумулятор (accumulator) - значение,
// которое накапливает результат применения функции.
// Текущий элемент массива (currentValue).
// Текущий индекс (currentIndex) элемента в массиве.
// Сам массив (array), к которому применяется метод reduce.
// Функция callback должна возвращать новое значение аккумулятора
// после обработки текущего элемента.

// initialValue (необязательный): Начальное значение аккумулятора.
// Если это значение указано,
//  то оно будет использовано в качестве начального значения аккумулятора
// при первом вызове функции callback.
// Если initialValue не указан, то первый элемент массива станет
// начальным значением аккумулятора.

// Метод split  разделяет строку на массив

const str = "Gandalf, Sauron, Saruman, Legolas, Elrond";
const namesArr = str.split(", "); // метод сплит принимает разделитель
console.log(namesArr); // ["Gandalf", "Sauron", "Saruman", "Legolas", "Elrond"]

// Метод join
const newString = namesArr.join("!");
console.log(newString); // Gandalf!Sauron!Saruman!Legolas!Elrond

// Метод find-  возвращает первое совпадение с заданным условием
const person = brothers.find((brother) => brother.race === "human");
console.log(person);

// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)
//Выбрать тех кто старше 100 лет
const oldBrothers = brothers.filter((brother) => brother.age > 100);
console.log(oldBrothers);
