// menu toggle bar

const menuBar = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar .nav");
const closeMenu = document.querySelector(".close-icon");

menuBar.addEventListener("click", () => {
  navbar.className += " active";
  closeMenu.style.color = "white";
  menuBar.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("active");
  menuBar.style.color = "black";
  closeMenu.style.display = "none";
  menuBar.style.display = "block";
});


// scroll on the particular element


