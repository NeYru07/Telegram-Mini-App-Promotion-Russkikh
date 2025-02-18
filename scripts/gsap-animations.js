document.addEventListener("DOMContentLoaded", function() {
	const isMobile = window.innerWidth <= 768;
 
	gsap.config({
	  force3D: false,
	  autoSleep: 120,
	  nullTargetWarn: false
	});
 
	ScrollTrigger.config({ markers: true });
 
	gsap.from("#header", {
	  opacity: 0,
	  y: isMobile ? -15 : -25,
	  duration: 0.4,
	  delay: 0.2
	});

	gsap.from(".block", { 
		opacity: 0, 
		x: isMobile ? -20 : -50,
		duration: 0.5, 
		delay: 0.5
	 });
  
	 gsap.from(".mp4", { 
		opacity: 0, 
		x: isMobile ? 50 : 150,
		duration: 0.5, 
		delay: 1
	 });
 
	const sections = {
	  ".cases-section": {
		 elements: ".swipe-block",
		 mobile: { y: 30, duration: 0.6 },
		 desktop: { y: 80, duration: 0.8 }
	  },
	  ".tg-advantages-section": {
		 elements: ".desktop",
		 mobile: { x: -30, duration: 0.5 },
		 desktop: { x: -150, duration: 0.7 }
	  },
	  ".why-tg-section": {
		 elements: [".animated-img", ".why-tg"],
		 mobile: { y: 30, stagger: 0.2 },
		 desktop: { x: [-50, 50], stagger: 0.3 }
	  },
	  ".showcases-section": {
		 elements: [".left-block", ".img-block5"],
		 mobile: { y: 30, stagger: 0.2 },
		 desktop: { x: [-80, 80], stagger: 0.3 }
	  },
	  ".how-it-works-section": {
		 elements: [".animateH1", ".grid-blocks", ".animatedP", ".map"],
		 mobile: { y: 30, stagger: 0.15 },
		 desktop: { y: 50, stagger: 0.2 }
	  }
	};
 
	function createSectionAnimation(section, settings) {
	  const elements = document.querySelectorAll(section);
	  
	  elements.forEach(el => {
		 const targets = el.querySelectorAll(settings.elements);
		 const options = isMobile ? settings.mobile : settings.desktop;
		 
		 gsap.from(targets, {
			opacity: 0,
			...options,
			duration: options.duration || 0.5,
			scrollTrigger: {
			  trigger: el,
			  start: "top 85%", // Единая стартовая позиция
			  end: "bottom center",
			  toggleActions: "play none none reverse"
			}
		 });
	  });
	}
 
	Object.entries(sections).forEach(([selector, settings]) => {
	  createSectionAnimation(selector, settings);
	});
 
	gsap.from("footer", {
	  y: isMobile ? 80 : 150,
	  opacity: 0,
	  duration: 0.8,
	  scrollTrigger: {
		 trigger: "footer",
		 start: "top 95%",
		 toggleActions: "play none none reverse"
	  }
	});
 
	if (!isMobile) {
	  gsap.from(".cases-section, .tg-advantages-section, .why-tg-section, .showcases-section", { 
		 backgroundColor: "#FFFFFF00",
		 duration: 0.6,
		 scrollTrigger: {
			trigger: ".cases-section",
			start: "top 70%",
			scrub: 0.5
		 }
	  });
	}
 });