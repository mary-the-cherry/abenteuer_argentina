const localLink = document.querySelectorAll(".destistation-side-nav a");

for (let i = 0; i < localLink.length ; i++){
	localLink[i].onclick = function(){
		localLink[i].style.color = "red";
		window.scrollBy(0, -10);
	}
}
