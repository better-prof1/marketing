const nav = document.querySelector("nav");
const ham = document.querySelector(".ham-menu");

const toggle = (element) => {
  if (element.classList.contains("open")) {
    element.classList.remove("open");
  } else {
    element.classList.add("open");
  }
};

ham.addEventListener("click", (e) => {
  toggle(nav);
});

document.addEventListener("click", (e) => {
  let targetElement = e.target; // clicked element

  do {
    if (targetElement === nav || targetElement === ham) {
      // If they click the hamburger menu or one of the links
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);
  nav.classList.remove("open");
});
