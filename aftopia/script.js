const button = document.querySelector(".header__login");
button.addEventListener("click", () => {
  button.classList.toggle("active");
  button.innerHTML = "Singed in";
});

const button2 = document.querySelector("#sub2getnews__input-submit");

button2.addEventListener("click", () => {
  button2.classList.toggle("done");
  button2.innerHTML = "Done";
});

const loginForm = document.querySelector(".login");
const main = document.querySelector("main");
const header = document.querySelector("header");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.email.value != 0) {
    loginForm.classList.add("logged");
    main.classList.remove("hidden");
    header.classList.remove("hidden");
  } else {
    console.log("sus");
  }
});
