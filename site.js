// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks  = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});


// Portfolio filter tabs
const filterBtns  = document.querySelectorAll(".filter-btn");
const filterItems = document.querySelectorAll(".filter-item");

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.dataset.filter;
      filterItems.forEach(img => {
        img.classList.toggle("hidden", cat !== "all" && img.dataset.category !== cat);
      });
    });
  });
}

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll(".section, .card, .service-item, .cred-strip").forEach(el => {
  if (!el.classList.contains("reveal")) el.classList.add("reveal");
  revealObserver.observe(el);
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
