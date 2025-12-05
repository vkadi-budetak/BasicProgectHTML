const form = document.getElementById("sign_in_form");
const errorMessage = document.getElementById("error_message");

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
      },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) {
      console.log("Status", res.status);
      const resError = await res.json();
      throw new Error(resError.message); // {message: "Unauthorized"}
    }
    const obj = await res.json();
    //! перевести пользователя на другую страницу
    //! Как можем это сделать? window
    const { access_tocken } = obj;
    //* сохранил в локад сторадж токен под ключом tocken
    localStorage.setItem("tocken", access_tocken);

    setTimeout(() => {
      window.location.href = "../profile";
    }, 1000);

    console.log("Positive result", obj);
  } catch (err) {
    // console.log(err.message);
    errorMessage.textContent = err.message;
  }
}

form.addEventListener("submit", handleLogin);

// vanilla js
// CRUD - create, read, update, delete
