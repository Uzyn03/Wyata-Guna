// toggle class active
const navbarNav = document.querySelector('.navbar-right');


const menu = document.querySelector(".navbar-extra");
const hamburgerIcon = document.querySelector("#menu");
const closeIcon = document.querySelector("#close");

menu.onclick = () => {
  navbarNav.classList.toggle("active");

  // Cek apakah menu aktif atau tidak
  const isActive = navbarNav.classList.contains("active");
  hamburgerIcon.style.display = isActive ? "none" : "block";
  closeIcon.style.display = isActive ? "block" : "none";
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});