const hamburgerMenu = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");
const header = document.querySelector(".header");
let hamburgerState = false;
const screenPosition = window.innerHeight;

const hamburgerToggler = () => {
  if (hamburgerState) {
    navContainer.style.width = "280px";
    navContainer.style.transition = ".6s";
  } else {
    navContainer.style.width = "0";
    navContainer.style.transition = ".6s";
  }
};

hamburgerMenu.addEventListener("click", () => {
  hamburgerState = !hamburgerState;
  hamburgerToggler();
});

const elements = [
  [document.getElementById("hub-animate-1"), "animate-1"],
  [document.getElementById("hub-animate-2"), "animate-2"],
  [document.getElementById("hub-animate-3"), "animate-3"],
  [document.getElementById("skills-img"), "img1-animate"],
  [document.getElementById("skills-img-2"), "img2-animate"],
  [document.getElementById("skills-img-3"), "img3-animate"],
  [document.getElementById("skills-img-4"), "img4-animate"],
  [document.getElementById("skills-img-5"), "img5-animate"],
  [document.getElementById("skills-img-6"), "img6-animate"],
  [document.getElementById("skills-img-7"), "img7-animate"],
];

const scrollElements = [
  [document.getElementById("about-text"), "about-animate"],
  [document.querySelector(".about-container"), "about-container-animate"],
  [document.querySelector(".paragraph-column"), "about-paragraph-animate"],
  [document.querySelector("#profile"), "about-profile-animate"],
  [document.querySelector(".project-1"), "project-animate-1"],
  [document.querySelector(".project-2"), "project-animate-2"],
  [document.querySelector(".project-3"), "project-animate-3"],
  [document.querySelector(".project-4"), "project-animate-4"],
  [document.querySelector(".project-5"), "project-animate-5"],
];

const animate = ([element, className]) => {
  // element.classList.add(className);
  if (element) {
    element.classList.add(className);
  } else {
    console.warn(`Element with className: ${className} not found`);
  }
  
};

const animateScroll = ([element, className]) => {
  if (element.getBoundingClientRect().top  < window.innerHeight - 100) {
    element.classList.add(className);
  }
};

window.addEventListener("scroll", (e) => {
  scrollElements.forEach(animateScroll);
});

window.addEventListener("scroll", () => {
  const mainPage = document.querySelector(".main-page");
  const logo = document.querySelector("#logo");
  if (window.pageYOffset >= 250) {
    header.classList.add("sticky");
    logo.classList.add("logosticky");
    header.style.height = "60px";
    header.style.transition = ".6s";
    mainPage.style.marginTop = "210px";
  }
  if (window.pageYOffset === 0) {
    header.classList.remove("sticky");
    logo.classList.remove("logosticky");
    header.style.height = "100px";
    header.style.transition = ".6s";
    mainPage.style.marginTop = "110px";
  }
});

elements.forEach(animate);
