const form = document.getElementById("sign_in_form");
const errorMessageSpan = document.getElementById("error_message");

const handleLogin = (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const credentials = { email, password };
  fetchLogin(credentials);
};

async function fetchLogin(credentials) {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) {
      console.log("Status", res.status);
      //   const resError = await res.json(); // {message:"Unauthorized", statusCode:401}
      let message = "";
      if (res.status === 401) {
        message = "Wrong email or password";
      }
      if (res.status > 401) {
        message = "Something went wrong";
      }
      throw new Error(message);
      //   throw new Error(resError.message); // {message: "Unauthorized"}
      console.log("Это строка не сработает");
    }
    const obj = await res.json();
    // перевести пользователя на другую страницу
    // Как можем это сделать? window
    const { access_token } = obj;
    // сохранил в локал сторадж токен под ключом token
    localStorage.setItem("token", access_token);
    setTimeout(() => {
      window.location.href = "/profile";
    }, 3000);
    console.log("Positive result", obj);
  } catch (err) {
    // console.log(err.message);
    errorMessageSpan.textContent = err.message;
  }
}

form.addEventListener("submit", handleLogin);

// vanilla js
// CRUD - create, read, update, delete
