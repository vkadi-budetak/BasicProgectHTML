// получить элемент html
// и сохранить ссылку на него в отдельную переменную

// getElementById - получить элемент по id
const headingElement = document.getElementById("heading");
const paragraphElement = document.getElementById("text");
const changeColorBtn = document.getElementById("change_text_btn");
const divToDelete = document.getElementById("block_to_delete");
const deleteBlockBtn = document.getElementById("delete_block_btn");
const addYellowCircleBtn = document.getElementById("add_yellow_circle_btn");
const circleList = document.getElementById("circle_list");
const deleteYellowBtn = document.getElementById("remove_yellow_btn");
// проверяем, что мы дейстивительно нашли
// console.log(headingElement); // <h1 id="heading">Dom</h1>
// console.log(paragraphElement); // <p id="text" class="red">Red text</p>
// console.log(changeColorBtn);
// console.log(divToDelete);

// давайте попробуем изменить текст внутри заголовка
// textContent - текст между тегами
headingElement.textContent = "JS is super powerful!";

// Как мы можем добится того, чтобы функция вызывалась
// при клике на кнопку
changeColorBtn.addEventListener("click", () => {
  //   console.log("Btn click");
  //   paragraphElement.style.color = "green";
  //   paragraphElement.style.fontSize = "20px";
  // можем менять и указывать классы: classList
  paragraphElement.classList.add("font-xl"); // просто добвляет класс через пробел
  //   paragraphElement.classList.remove("red"); // уберет указанный класс
  paragraphElement.classList.toggle("active"); // будет добавлять/удалять класс
  paragraphElement.classList.replace("red", "green"); // заменит класс на другой
  //   console.log(paragraphElement.classList.keys().next());
  console.log(paragraphElement.className); // получить классы
});

const handleDeleteBlock = () => {
  // remove - открепляет элемент от DOM, то есть удаляет его
  divToDelete.remove();
  deleteBlockBtn.disabled = true;
};
deleteBlockBtn.addEventListener("click", handleDeleteBlock);

const handleAddYellowCircle = () => {
  // создали новый элемент
  const yellowCircleElement = document.createElement("div"); // <div></div>
  // добавили нужные вещи, например классы или id или еще что-нибудь
  yellowCircleElement.classList.add("bg-yellow", "circle");
  console.log(yellowCircleElement);
  // прикрепили элемент к указанному родителю
  circleList.append(yellowCircleElement);
};

addYellowCircleBtn.addEventListener("click", handleAddYellowCircle);

// при клике на кнопку deleteYellowBtn - будет вызываться
// указанная функция, которая удалит кнопку addYellowCircleBtn
deleteYellowBtn.addEventListener("click", () => {
  addYellowCircleBtn.remove();
});

// создать html
// найти и сохранить нужный элемент - проверить в console.log
// можно делать операции с этим элементом
