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
  const menu = document.querySelector(".navbar__menu");
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

buildNav();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
