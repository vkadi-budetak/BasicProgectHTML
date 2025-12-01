const form = document.getElementById("add_article_form");
const titleInput = document.getElementById("title");

form.addEventListener("submit", (event) => {
  // предотвратит поведение формы по умолчанию
  // (мы не будем переходить на другую страницу)
  event.preventDefault();
  // 1.  получим значения инпута через форму
  //   console.dir(form);
  console.log("Варинат 1", form.elements.title.value);
  // 2. отдельно получить значение через инпут
  console.log("Варинат 2", titleInput.value);
  //   console.log(title);
  // 3. через event
  //   console.log(event.target); //
  //
  //   event.target - form
  //   event.target -  <input type="text" id="title" name="title" placeholder="Life of ants" />
  //   event.target.title - само значение, которое мы ввели внутрь инпута
  console.log("Варинат 3", event.target.title.value);

  // 4. через форм дату, которую нужно заранее создать
  const formData = new FormData();
  console.log("Варинат 4", formData.get("title"));
});
