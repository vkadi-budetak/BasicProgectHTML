//* 1. проверяем API
// вставляем в браузере в адресную строку и смотрим
// https://official-joke-api.appspot.com/random_joke
//* 2. Делаем запрос и расскрываем ответ
//* 3. Выводим информацию в консоль и смотрим что нам пришло
// {
//   id: 148;
//   punchline: "Pasta la vista, baby!";
//   setup: "What did the spaghetti say to the other spaghetti?";
//   type: "general";
// }
//* 4. По ключам обращаемся к нужнім свойствам обьекта
//* 5. Можем отобразить получению информацию на странице

const setupElement = document.getElementById("setup");
const punchlineElement = document.getElementById("punchline");
const nextJokeBtn = document.getElementById("next_joke_btn");

const fetchJokes = () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      setupElement.textContent = data.setup;
      punchlineElement.textContent = data.punchline;
      punchlineElement.hidden = true;
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchJokes();

nextJokeBtn.addEventListener("click", fetchJokes);

setupElement.addEventListener("click", () => {
  punchlineElement.hidden = false;
});
