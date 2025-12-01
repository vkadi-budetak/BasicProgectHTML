// const form = document.getElementById("form");
// const email = document.getElementById("email");

// console.dir(form);
// console.dir(email);

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const data = new FormData(form);
//   console.log(data.get("email"));
//   // очистить форму от введеных значений
//   form.reset();
// });

//* Сделайте форму с инпутом для email
//* внутри формы сделайте кнопу Add user
//* Пусть при нажатии кнопки Add user -
//* email пользователя выводится в консоль
//* не забудьте event.preventDefault()

// ПРИМЕР
const form = document.getElementById("add_user_form");
const greetingElement = document.getElementById("greeting");
const errorElement = document.getElementById("error_message");
console.dir(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  console.log(data.get("email"));
  // очистить форму от введеных значений

  const email = data.get("email");

  if (!email) {
    errorElement.textContent = "Email shouldn't be empty";
  } else {
    form.hidden = true; // скрывает елемент
    greetingElement.textContent = `Welcome, ${email}!`;
  }

  form.reset();
});
// Дополнительное задание:
// Отобразите имейл под формой
