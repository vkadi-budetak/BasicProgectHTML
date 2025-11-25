function getNine() {
  return 9;
}

const x = getNine();
getNine();
console.log(x);

//?
let y = 0;

function getTen() {
  console.log("line 21");
}

getTen();
y = 10;
getTen();

function addFive(num) {
  return num + 5;
}

const u = addFive(7);
console.log(u); // 12

console.log("$$$$$$$$$$$");

const i = 100;
const j = 190;

function sum(a, b) {
  return a + b;
}

const s = sum(100, 190);

console.log(s);

//? global scope
const f = 100;
{
  //? local scope
  const j = 190;
}
