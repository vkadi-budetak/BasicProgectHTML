async function fetchUser() {
  const token = localStorage.getItem("token");
  const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const obj = await res.json();
}

fetchUser();
