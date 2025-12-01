const pets = [
  { name: "Paddy", description: "Very loud and funny" },
  { name: "Guchi", description: "Never growls" },
  { name: "Tiffany", description: "Very playful" },
  { name: "Kusok", description: "Eats cucumbers" },
  { name: "Hommy", description: "Snores when he is sleeping" },
];

const petsList = document.getElementById("pets_list");

// <li>
//  <h2>Paddy</h2>
//  <p>Very funny</p>
// </li>;
// const hommy = { name: "Hommy", description: "Snores when he is sleeping" };
// const hommyLi = document.createElement("li"); // <li></li>
// const hommyHeading = document.createElement("h2"); // <h2></h2>
// hommyHeading.textContent = hommy.name; // <h2>Hommy</h2>
// const descriptionElement = document.createElement("p"); // <p></p>
// descriptionElement.textContent = hommy.description; // <p>Snores when he is sleeping</p>
// hommyLi.append(hommyHeading, descriptionElement);
// <li>
//  <h2>Paddy</h2>
//  <p>Very funny</p>
// </li>;
// petsList.append(hommyLi);

//* повторим всю эту логику внутри цикла
pets.forEach((pet) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  h2.textContent = pet.name;
  p.textContent = pet.description;
  li.append(h2, p);
  petsList.appendChild(li);
});
