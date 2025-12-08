const form = document.getElementById("create_category_form");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const image = formData.get("image");
  //   console.log(name, image);
  const newCategory = { name, image };
  fetchCreateCategory(newCategory);
}

async function fetchCreateCategory(category) {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    body: JSON.stringify(category),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

form.addEventListener("submit", handleSubmit);
