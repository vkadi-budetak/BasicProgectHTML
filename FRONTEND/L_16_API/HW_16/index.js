const laptop = {
  brand: "Dell",
  model: "XPS 15",
  specs: {
    cpu: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
  },
};

const {
  brand,
  model,
  specs: { cpu: processor, ram },
} = laptop;

console.log(brand);
console.log(model);
console.log(processor);
console.log(ram);
