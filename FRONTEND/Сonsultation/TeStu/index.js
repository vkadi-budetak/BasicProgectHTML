const numbers = [5, 12, 8, 20, 7, 15, 1];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    count += 1;
  }
}
console.log(count);
