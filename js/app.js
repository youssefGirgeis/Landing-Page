/**
 * Global Variables
 *
 */
let timer = null; // used to clear out settimeout

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * @description activates sections and nav items
 * @param section - page's section
 * @param navLink - a navmenu item
 */
const activateElements = function (section, navLink) {
  section.classList.add('your-active-class');
  navLink.classList.add('active');
};

/**
 * @description Deactivates sections and nav items
 * @param section - page's section
 * @param navLink - a navmenu item
 */
const dactivateElements = function (section, navLink) {
  section.classList.remove('your-active-class');
  navLink.classList.remove('active');
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * @description Builds the navbar
 */
const buildNav = function () {
  const sections = document.querySelectorAll('.landing__container');
  const list = document.querySelector('#navbar__list');

  for (const section of sections) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('menu__link');
    link.innerHTML = section.firstElementChild.textContent;
    listItem.appendChild(link);
    list.appendChild(listItem);
  }
  list.style.cssText = 'display: flex; justify-content: flex-end;';
};

/**
 * @description Add class 'active' to section when near top of viewport
 */
const activateSection = function () {
  const sections = document.getElementsByTagName('section');
  const navLinks = document.querySelectorAll('.menu__link');

  window.addEventListener('scroll', function () {
    for (let i = 0; i < sections.length; i++) {
      const distance = sections[i].getBoundingClientRect();

      if (distance.top <= 400 && distance.top > -350)
        activateElements(sections[i], navLinks[i]);
      else dactivateElements(sections[i], navLinks[i]);
    }
  });
};

/**
 * @description Scroll to section when clicking on the navbar item
 */
const scrollToSection = function () {
  document.querySelector('html').style.scrollBehavior = 'smooth';
  const links = document.querySelectorAll('.menu__link');
  for (const [i, link] of links.entries()) {
    link.addEventListener('click', function () {
      const section = document.getElementById(`section${i + 1}`);
      section.scrollIntoView();
    });
  }
};

/**
 * @description Hides navbar when not scrolling
 */
const hideNavbar = function () {
  window.addEventListener('scroll', function () {
    document.querySelector('#navbar__list').style = 'flex';
    // if the timer equals a value, cancel the callback function of the settimeout()
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(function () {
      document.querySelector('#navbar__list').style.display = 'none';
    }, 2000);
  });
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
// hide navbar when not scrolling
hideNavbar();
