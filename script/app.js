const hamburger = document.querySelector(".menu-btn img"),
  nav = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
