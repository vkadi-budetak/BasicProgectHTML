const title = document.getElementById("title");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //   console.log("btn click");
  title.textContent = "Текст изменён!";
});
