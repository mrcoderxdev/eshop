window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".menu-btn img"),
    nav = document.querySelector(".navigation"),
    header = document.querySelector("header"),
    navigationItems = document.querySelectorAll(".navigation a");
  const scrollBtn = document.querySelector(".scrollTotopBtn");
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1500);

  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 5);
  });

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  navigationItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });

  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
