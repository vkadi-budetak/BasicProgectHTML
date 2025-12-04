const form = document.getElementById("registration_form");
function handleRegistration(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const avatar = formData.get("avatar");
  const password = formData.get("password");
  const credentials = {
    name,
    avatar,
    password,
    email,
  };
  fetchRegister(credentials);
}
async function fetchRegister(credentials) {
  // СТРУКТУРА ЗАПРОСА
  // 1. URL - адрес по которому мы делаем запрос, могут быть указаны
  // query params
  // 2. Method
  // 3. body - тело запроса - это полезная информация, которую мы сообщаем
  // для выполнения операции - в формате JSON
  // 4. headers - заголовки - пары ключ-значение,
  // которые указывают дополнительную информацию про запрос, метаинформация
  // например в каком формате передаются данные
  // Method - говорит про смысл того, что мы хотим сделать
  // GET - получение информации - это и есть метод по умолчанию
  // POST - если хотим новую запись - добавить информацию
  // DELETE - если удалить
  // PUT - изменить какую-нибудь запись на бэкенде
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const obj = await res.json();
  console.log(obj);
}
form.addEventListener("submit", handleRegistration);
