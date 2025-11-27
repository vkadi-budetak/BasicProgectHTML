const heightPlus = 30;
const yearPlus = 1;

const oak = {
  height: 140,
  year: 2025,
  grow() {
    this.height += heightPlus;
    this.year += yearPlus;
  },
};

for (let i = 0; i < 20; i++) {
  oak.grow();
  console.log(oak.year + " год" + " - " + oak.height + " см");
}

console.log("==================");
// Усложняем
const oak1 = {
  height: 140,
  year: 2025,
  grow() {
    if (this.height > 1000) {
      this.height *= 1.2;
    } else if (this.height > 1400) {
      this.height *= 1.02;
    } else {
      this.height *= 1.3;
    }
    this.harvestAcorns();
  },
  harvestAcorns() {
    if (this.height > 7000) {
      const acorns = Math.floor(this.height / 100) * 4;
      console.log(`Урожай жолудей - ${acorns}`);
    }
  },
};

for (let i = 0; i < 20; i++) {
  oak1.grow();
  console.log(oak1.year + " год" + " - " + oak1.height + " см");
}

///
console.log("==================");

const tesla = {
  battery: 1000,
  odometer: 0,
  drive() {
    this.battery -= 20;
    this.odometer += 50;
  },
};

for (let i = 0; i < 7; i++) {
  tesla.drive();

  console.log(tesla.battery, tesla.odometer);
}

// Цикл має запустити метод drive() 7 разів.
// Після кожного виклику виводь у консоль поточний стан (заряд і пробіг).
// Маленька пастка (подумай над цим): Якщо запустити drive 7 разів по 20% заряду, то математично це 140%. Батарея піде в мінус. Спробуй додати в метод drive перевірку if: машина їде, тільки якщо battery > 0. Якщо заряду немає — виводь "Потрібна зарядка!".
