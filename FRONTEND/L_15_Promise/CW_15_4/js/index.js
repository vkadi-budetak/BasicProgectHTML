const catImg = document.getElementById("cat_image");
const promise = fetch("https://api.thecatapi.com/v1/images/search");

promise
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const cat = data[0];
    console.log(cat.url);
    catImg.src = cat.url;
  });
