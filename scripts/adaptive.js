// Адапьация текста под ширину экрана
function updateText() {
	const p = document.getElementById("p");
	const button = document.getElementById('btn');
	const screenWidth = window.innerWidth;
	const textElement = document.getElementById("dynamicText");
	const dynamicLi = document.getElementById("dynamicLi");
	const dynamicP = document.getElementById("dynamicP");
	const dynamicH2 = document.getElementById("dynamicH2");
	const mobileP = document.getElementById("mobileP");
 
	if (screenWidth <= 728) {
	  p.textContent = "Выбор категории";
	  button.textContent = "+";
	  textElement.innerHTML = "А вы получаете управление каждым<br>этапом — от первого интереса<br>клиента до покупки";
	  dynamicLi.innerHTML = "Будьте ближе к клиентам — <br> становитесь частью их <br> повседневной жизни";
	  dynamicP.innerHTML = "Telegram открывает доступ не только к <br> российской аудитории, но и к международному <br> рынку.";
	  dynamicP.innerHTML = "Мы поможем вам стать лидером <br> мобильной коммерции в России и за её <br> пределами!";
	  mobileP.innerHTML = "Нажимая кнопку «Отправить», Вы даете <br> согласие на обработку персональных <br> данных";
	} else {
	  p.textContent = "Выбор категории недвижимости";
	  button.textContent = "Оставить заявку";
	  textElement.innerHTML = "А вы получаете управление каждым этапом — от первого интереса клиента до покупки";
	  dynamicLi.innerHTML = "Будьте ближе к клиентам — становитесь частью их повседневной жизни";
	  dynamicP.innerHTML = "Telegram открывает доступ не только к <br> российской аудитории, но и к <br> международному рынку.";
	  mobileP.innerHTML = "Нажимая кнопку «Отправить», Вы даете согласие на обработку персональных данных";
	}
 }

 updateText();
 
 window.addEventListener("resize", updateText);

//  Бургер меню
	const mobileNav = document.getElementById("mobileNav");
	const body = document.body;
	const openMenu = document.getElementById("openMenu");
	const closeMenu = document.getElementById("closeMenu");
	const scrolling = document.getElementById('scroll')

 document.getElementById("burgerMenu").addEventListener("click", function () {
	
	if (mobileNav.style.display === "flex") {
	 	mobileNav.style.display = "none";
	  	openMenu.style.display = "flex";
	  	closeMenu.style.display = "none";
	  	body.style.backgroundColor = "#FFFFFF00";
		scrolling.style.overflow = "scroll"
	} else {
	  mobileNav.style.display = "flex";
	  openMenu.style.display = "none";
	  closeMenu.style.display = "flex";
	  document.body.style.backgroundColor = "#2121217A"
	  scrolling.style.overflow = "hidden"
	}
 });

 document.querySelectorAll(".mobile-nav a, #mobileBtn").forEach((element) => {
	element.addEventListener("click", function () {
	  
 
		scrolling.style.overflow = "scroll"
	  mobileNav.style.display = "none";
	  body.style.overflow = "auto";
	  openMenu.style.display = "flex";
	  closeMenu.style.display = "none";
	  document.body.style.backgroundColor = "#FFFFFF00";
	});
 });