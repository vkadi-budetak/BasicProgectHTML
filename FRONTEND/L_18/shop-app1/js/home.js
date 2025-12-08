const select = document.getElementById("categories_select");

async function fetchCategories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories = await res.json();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.slug;
    option.textContent = category.name;
    select.appendChild(option);
  });
}

fetchCategories();
