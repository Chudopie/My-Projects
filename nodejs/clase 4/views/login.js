document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log(username, password);

  fetch("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log(data.token);
        localStorage.setItem("token", data.token);
        window.location.href = "/products";
      } else {
        alert("Tu usuario y/o contrasena es incorrecto");
      }
    })
    .catch((err) => console.error("Error:", err));
});
