// INTERVAL
const printHello = () => {
  console.log("Hello!");
};

const helloInterval = setInterval(printHello, 4000);

// отменит интервал через 10 сек = 10000ms
setTimeout(() => {
  clearInterval(helloInterval);
}, 10000);

setTimeout(() => {
  console.log("Break is over");
}, 15 * 60 * 1000);
