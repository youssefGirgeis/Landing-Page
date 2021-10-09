/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNav = function () {
  const sections = document.querySelectorAll(".landing__container");
  const list = document.querySelector("#navbar__list");

  for (const section of sections) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("menu__link");
    link.innerHTML = section.firstElementChild.textContent;
    listItem.appendChild(link);
    list.appendChild(listItem);
  }
  list.style.cssText = "display: flex; justify-content: flex-end;";
};

// Add class 'active' to section when near top of viewport
const activateSection = function () {
  const sections = document.getElementsByTagName("section");
  const navLinks = document.querySelectorAll(".menu__link");
  window.addEventListener("scroll", function () {
    for (let i = 0; i < sections.length; i++) {
      const distance = sections[i].getBoundingClientRect();

      if (distance.top <= 400 && distance.top > -300) {
        sections[i].classList.add("your-active-class");
        navLinks[i].classList.add("active");
      } else {
        sections[i].classList.remove("your-active-class");
        navLinks[i].classList.remove("active");
      }
    }
  });
};

// Scroll to anchor ID using scrollTO event
const scrollToSection = function () {
  const links = document.querySelectorAll(".menu__link");
  for (const [i, link] of links.entries()) {
    link.addEventListener("click", function () {
      const section = document.getElementById(`section${i + 1}`);
      section.scrollIntoView();
    });
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();
// Scroll to section on link click
scrollToSection();
// Set sections as active
activateSection();
