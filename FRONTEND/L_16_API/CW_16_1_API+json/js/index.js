const cityNameHeading = document.getElementById("city_name");
const populationElement = document.getElementById("population");
const languagesElement = document.getElementById("languages");
const isCapitalElement = document.getElementById("is_capital");

// fetch -> Promise<Response> -> .json() -> Promise
fetch("https://alisherkhamidov.github.io/fake-api/berlin.json")
  .then((res) => res.json())
  .then((data) => {
    // data - это информация которая из json переобразовуется в javascript и пересохраняет в data
    // чтобы получить name из json -> data.name
    // console.log(data);
    // console.log(data.name);
    // console.log(data.area.km2);

    const name = data.name;
    cityNameHeading.textContent = name;

    populationElement.textContent += data.population;

    const areaInKm = data.area.km2;
    console.log(areaInKm);

    data.languages.forEach((language) => {
      const li = document.createElement("li");
      li.textContent = language;
      languagesElement.appendChild(li);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// {
//   "name": "Berlin",
//   "population": 3600000,
//   "isCapital": true,
//   "area": {
//     "km2": 1000,
//     "acres": 10
//   },
//   "languages": ["en", "de", "es", "tu", "fa"]
// }
