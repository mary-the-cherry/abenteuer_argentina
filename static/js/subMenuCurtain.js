// Overlay Reiseziele

let openBtn = document.querySelector('.openSubNav');
openBtn.addEventListener('click', () => {
  showNav();
});

let closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => {
  hideNav();
});

let openBtnPl = document.querySelector('.openSubNavPlanung');
openBtnPl.addEventListener('click', () => {
  showNavPl();
});

let closeBtnPl = document.querySelector('.closeBtnPlanung');
closeBtnPl.addEventListener('click', () => {
  hideNav();
});

const navOverlay = document.querySelector('#nav-overlay');
const navOverlayPl = document.querySelector('#nav-overlay-planung');
const body = document.body;
let navbar = document.getElementById('navbar_show');

function showNav() {
  if (navOverlay.style.height > '100') {
    navOverlay.style.height = '0';
    navOverlay.style.zIndex = '50';
    body.style.overflow = 'auto';
    body.focus();
  } else {
    body.style.overflow = 'hidden';
    let yPosition = window.scrollY;
    let xPosition = window.scrollX;
    window.scroll(xPosition, yPosition - 10);
    navOverlay.style.overflow = 'hidden';
    navOverlayPl.style.height = '0';
    navOverlay.style.height = '100%';
    navOverlay.style.overflow = 'auto';
    navOverlay.style.zIndex = '51';
    secureNavbarView();
  }
}

function showNavPl() {
  if (navOverlayPl.style.height > '100') {
    navOverlayPl.style.zIndex = '50';
    navOverlayPl.style.height = '0';
    navOverlay.style.height = '0';
    body.style.overflow = 'auto';
    body.focus();
  } else {
    body.style.overflow = 'hidden';
    let yPosition = window.scrollY;
    let xPosition = window.scrollX;
    window.scroll(xPosition, yPosition - 10);
    navOverlayPl.style.overflow = 'hidden';
    navOverlay.style.height = '0';
    navOverlayPl.style.height = '100%';
    navOverlayPl.style.zIndex = '51';
    navOverlayPl.style.overflow = 'auto';
    secureNavbarView();
  }
}

function hideNav() {
  navOverlay.style.overflow = 'hidden';
  navOverlay.style.height = '0';
  navOverlayPl.style.height = '0';
  navOverlayPl.style.zIndex = '50';
  navOverlay.style.zIndex = '50';
  body.style.overflow = 'auto';
  body.focus();
}

function secureNavbarView() {
  navbar.style.top = '0';
}
