/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", navbarScroll);

function navbarScroll(){
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar_show").style.top = "0";
  } else {
    document.getElementById("navbar_show").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}