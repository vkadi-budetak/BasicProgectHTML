const profileName = document.getElementById("profile_name");
const img = document.getElementById("avatar");
const emailElement = document.getElementById("email");

async function fetchUser() {
  const token = localStorage.getItem("token");
  const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const { name, email, avatar } = await res.json();
  profileName.textContent = name;
  img.src = avatar;
  emailElement.textContent = email;
}

fetchUser();
