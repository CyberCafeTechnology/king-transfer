import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"

//! Carrossel
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

//! Scroll to top
const button = document.getElementById("back-to-top")

button.addEventListener("click", scrollToTop)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
