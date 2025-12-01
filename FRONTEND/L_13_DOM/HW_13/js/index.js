const title = document.getElementById("title");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //   console.log("btn click");
  title.textContent = "Текст изменён!";
});

/// CHANGE THEME EXAMPLE
// Light <--> Dark
const themeParagraph = document.getElementById("theme");
const themeToggler = document.getElementById("theme_toggler");
let isLight = true;

themeToggler.addEventListener("click", () => {
  //   console.log("CLICK");
  //   console.log(themeParagraph.textContent);
  if (isLight) {
    themeParagraph.textContent = "dark";
  } else {
    themeParagraph.textContent = "light";
  }
  isLight = !isLight;
});
