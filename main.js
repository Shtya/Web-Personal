AOS.init({
  duration: 1200,
});

window.onload = function () {
  document.getElementById("layout").style.display = "none";
};

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    // when window width is >= 640px
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 60,
    slideShadows: false,
  },
});
const navMenu = document.querySelector("nav .iconNav");
const navUl = document.querySelector("nav .ul");
navMenu.addEventListener("click", () => {
  if (navUl.classList.contains("active")) {
    navUl.classList.remove("active");
  } else {
    navUl.classList.add("active");
  }
});
const dropIcon = document.querySelectorAll(".faq .box .dropMenu_icon");
const box = document.querySelectorAll(".faq .box ");

for (icon of dropIcon) {
  icon.addEventListener("click", function () {
    box.forEach((ele) => ele.classList.remove("active"));
    this.parentElement.classList.add("active");
  });
}
