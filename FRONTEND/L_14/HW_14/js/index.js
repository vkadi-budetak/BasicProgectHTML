const form = document.getElementById("form");

const musicList = document.getElementById("music_list");
const errorMessage = document.getElementById("error_message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);

  // Дістаємо значення у змінні, щоб їх перевірити
  const title = data.get("title");
  const year = data.get("year");
  const author = data.get("author");

  // ТЕПЕР робимо перевірку
  // Перевіряємо змінні, які ми щойно створили вище
  if (title === "" || year === "" || author === "") {
    errorMessage.textContent = "ERROR!!! All fields must be filled in!";
    return; // Зупиняємо функцію
  }

  // Якщо помилок немає, очищаємо повідомлення
  errorMessage.textContent = "";

  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const pYear = document.createElement("p");
  const pAuthor = document.createElement("p");

  h2.textContent = title;
  pYear.textContent = year;
  pAuthor.textContent = author;

  li.append(h2, pYear, pAuthor);
  musicList.appendChild(li);
  form.reset();
});
