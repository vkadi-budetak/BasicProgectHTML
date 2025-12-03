/*
1. Отримуємо рефси всіх елементів (кнопка відкрити, кнопка закрити, оверлей)
2. Вішаємо обробник подій по кліку на кнопку відкрити
    2.1. вішаємо на боді клас опен
3. Вішаємо обробник подій на крестик і на оверлей по кліку
    3.1. прибирати клас опен у боді
4. Вішаємо обробник подій на вікно по keydown
    4.1. Перевірка на клавішу, якщо це клавіша escape - то виклик ф-ції на закриття
*/

const refs = {
  openModalBtn: document.getElementById("openModalBtn"),
  overlay: document.getElementById("overlay"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
};
const openClass = "open";

refs.openModalBtn.addEventListener("click", openModal);
refs.overlay.addEventListener("click", closeModal);
refs.modalCloseBtn.addEventListener("click", closeModal);

function openModal() {
  document.body.classList.add(openClass);
  window.addEventListener("keydown", closeOnEsc);
}

function closeModal() {
  document.body.classList.remove(openClass);
  window.removeEventListener("keydown", closeOnEsc);
}

function closeOnEsc(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}
