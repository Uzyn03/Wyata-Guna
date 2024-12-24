// toggle class active
const navbarNav = document.querySelector(".navbar-right");

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

// Kegiatan
// Ambil semua elemen dengan class "kegiatan"
const kegiatanElements = document.querySelectorAll(".kegiatan");

// Tambahkan event listener untuk setiap elemen
kegiatanElements.forEach((kegiatan) => {
  kegiatan.addEventListener("click", () => {
    // Tambahkan efek visual (class clicked)
    kegiatan.classList.add("clicked");

    // Hapus efek setelah animasi selesai (300ms sesuai dengan CSS)
    setTimeout(() => {
      kegiatan.classList.remove("clicked");
    }, 200);

    // Arahkan ke halaman yang sesuai
    switch (kegiatan.id) {
      case "vokasional":
        setTimeout(() => {
          window.location.href = "vokasional.html";
        }, 200); // Tunggu animasi selesai sebelum pindah halaman
        break;
      case "kamis":
        setTimeout(() => {
          window.location.href = "kamis.html";
        }, 200);
        break;
      case "terminasi":
        setTimeout(() => {
          window.location.href = "terminasi.html";
        }, 200);
        break;
      case "senam":
        setTimeout(() => {
          window.location.href = "senam.html";
        }, 200);
        break;
      case "rabu":
        setTimeout(() => {
          window.location.href = "rabu.html";
        }, 200);
        break;
      default:
        console.log("Halaman tidak ditemukan!");
    }
  });
});
