let openBtn = document.querySelector(".openSubNav");
openBtn.addEventListener("click", () => {
	showNav();
});
		
let closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
   hideNav();
});

		
const navOverlay = document.querySelector("#nav-overlay");
const body = document.body;
let navbar = document.getElementById("navbar_show");


function showNav() {
   if (navOverlay.style.height > "100"){
	   navOverlay.style.height="0";
	   body.style.overflow="auto";
	   body.focus();
   }
   else
   {
	   body.style.overflow="hidden";
	   let yPosition = window.scrollY;
	   let xPosition = window.scrollX;
	   window.scroll(xPosition,yPosition-10);
	   navOverlay.style.overflow="hidden";
	   navOverlay.style.height="100%";
	   navOverlay.style.overflow="auto";
	   secureNavbarView();
   }
}

function hideNav() {
	navOverlay.style.overflow="hidden";
	navOverlay.style.height="0";
	body.style.overflow="auto";
	body.focus();
}

function secureNavbarView(){
	navbar.style.top = "0";
}