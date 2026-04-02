// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks  = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Lightbox
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".zoom-img, .print-img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", e => {
    if (e.target !== lightboxImg) closeLightbox();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}
