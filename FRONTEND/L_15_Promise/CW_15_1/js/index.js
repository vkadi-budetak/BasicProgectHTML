const form = document.getElementById("album_form");
const albumCard = document.getElementById("album_card");
const albumsList = document.getElementById("albums_list");

//! Создаю массив куда буду записывать
const albums = [];
const handleAddArticle = (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const title = data.get("title");
  const author = event.target.author.value;
  const year = data.get("year");
  //   console.log("Form data:", title, author, year);
  //   console.dir(event.target.title);
  //   console.log(event.target.title.value);
  const newAlbum = { title, author, year };
  albums.push(newAlbum);
  console.log(albums);
  clearAlbumsUl();
  displayAlbums(albums);
  //   displayAlbum(newAlbum);
  form.reset();
  // Если бы мы хотели сбросить значение внутри конкретного инпута
  //   event.target.title.value = "";
};
form.addEventListener("submit", handleAddArticle);
function clearAlbumsUl() {
  while (albumsList.firstChild) {
    albumsList.firstChild.remove();
  }
}

function displayAlbums(albums) {
  albums.forEach((album) => {
    const li = document.createElement("li");
    const albumHeading = document.createElement("h2");
    albumHeading.textContent = album.title;
    const yearSpan = document.createElement("span");
    yearSpan.textContent = album.year;
    const authorSpan = document.createElement("span");
    authorSpan.textContent = album.author;
    li.append(albumHeading, yearSpan, authorSpan);
    albumsList.appendChild(li);
  });
}

function displayAlbum({ title, year, author }) {
  const albumHeading = document.createElement("h2");
  albumHeading.textContent = title;
  const yearSpan = document.createElement("span");
  yearSpan.textContent = year;
  const authorSpan = document.createElement("span");
  authorSpan.textContent = author;
  albumCard.append(albumHeading, yearSpan, authorSpan);
}
