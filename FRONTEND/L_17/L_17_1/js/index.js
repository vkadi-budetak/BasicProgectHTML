// https://www.my-ait.com/homework-submit?homeworkId=basic-frontend-ru-js-destructuring
// https: - протокол соединения - protocol/schema
// www.my-ait.com - доменное имя - domain
// homework-submit - путь - path
// ?homeworkId=basic-frontend-ru-js-destructuring&studentId=10
// query params: ключ homeworkId и значение basic-frontend-ru-js-destructuring
// studentId: 10

// fetch("https://api.nationalize.io/?name=Fedor")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const form = document.getElementById("reveal_ethnicity_form");
const nameResult = document.getElementById("name");
const countResult = document.getElementById("count");
const ethnicitiesElement = document.getElementById("results");
form.addEventListener("submit", handleSumbit);

function handleSumbit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  fetchEthnicity(name);
  form.reset();
}

async function fetchEthnicity(name) {
  try {
    // получили информацию с сервера
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const data = await res.json();
    console.log(data);
    // распарсили с помощью деструктуризации
    const { count, country: countries } = data;
    // полученные значения мы отобразили в DOM
    nameResult.textContent = name;
    countResult.textContent = count;
    // Очистим ul если там есть что-то
    while (ethnicitiesElement.firstChild) {
      ethnicitiesElement.removeChild(ethnicitiesElement.firstChild);
    }
    // добавляем элементы в ul
    countries.forEach(({ country_id, probability }) => {
      // для каждой страны мы создали отдельную карточку li
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      h3.textContent = country_id;
      p.textContent = probability;
      li.append(h3, p);
      ethnicitiesElement.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
}
