function updateText() {
	const textElement = document.getElementById("p");
	const button = document.getElementById('btn');
	const screenWidth = window.innerWidth;
 
	if (screenWidth <= 728) {
	  textElement.textContent = "Выбор категории";
	  button.textContent = "+";
	} else {
	  textElement.textContent = "Выбор категории недвижимости";
	  button.textContent = "Оставить заявку";
	}
 }
 
 updateText();
 
 window.addEventListener("resize", updateText);

	const mobileNav = document.getElementById("mobileNav");
	const body = document.body;
	const openMenu = document.getElementById("openMenu");
	const closeMenu = document.getElementById("closeMenu");

 document.getElementById("burgerMenu").addEventListener("click", function () {
	
	if (mobileNav.style.display === "flex") {
	  mobileNav.style.display = "none";
	  openMenu.style.display = "flex";
	  closeMenu.style.display = "none";
	  document.body.style.backgroundColor = "#FFFFFF00";
	  document.body.style.overflow = "auto";
	} else {
	  mobileNav.style.display = "flex";
	  openMenu.style.display = "none";
	  closeMenu.style.display = "flex";
	  document.body.style.backgroundColor = "#2121217A"
	  document.body.style.overflow = "hidden";
	}
 });

 document.querySelectorAll(".mobile-nav a, #mobileBtn").forEach((element) => {
	element.addEventListener("click", function () {
	  
 
	  mobileNav.style.display = "none";
	  body.style.overflow = "auto";
	  openMenu.style.display = "flex";
	  closeMenu.style.display = "none";
	  document.body.style.backgroundColor = "#FFFFFF00";
	});
 });