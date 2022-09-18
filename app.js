const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#eye_icon");
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "web_dev") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
