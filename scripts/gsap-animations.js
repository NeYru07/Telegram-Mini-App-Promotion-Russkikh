document.addEventListener("DOMContentLoaded", function() {
	gsap.registerPlugin(ScrollTrigger);
	
	gsap.from("#header", { 
	  opacity: 0, 
	  y: -30, 
	  duration: 0.5, 
	  delay: 0.2 
	});
	gsap.from(".block", { 
	  opacity: 0, 
	  x: -150, 
	  duration: 0.5, 
	  delay: 0.5
	});
	gsap.from(".mp4", { 
	  opacity: 0, 
	  x: 150, 
	  duration: 0.5, 
	  delay: 1
	});
	gsap.from(".swipe-block", { 
	  opacity: 0, 
	  y: 150, 
	  duration: 0.7, 
	  stagger: 1,
	  scrollTrigger: {
		trigger: ".cases-section",
		start: "top 20%",
	 },
	});
	gsap.from(".desktop", { 
	  opacity: 0, 
	  x: -950, 
	  duration: 0.8, 
	  stagger: 1,
	  delay: 0.3,
	  scrollTrigger: {
		trigger: ".tg-advantages-section",
		start: "top 60%",
	 },
	});
	gsap.from(".animated-img", { 
	  opacity: 0, 
	  x: -550, 
	  duration: 0.5, 
	  stagger: 1,
	  delay: 0.3,
	  scrollTrigger: {
		trigger: ".why-tg-section",
		start: "top 50%",
	 },
	});
	gsap.from(".why-tg", { 
	  opacity: 0, 
	  x: 550, 
	  duration: 0.5, 
	  stagger: 1,
	  delay: 0.7,
	  scrollTrigger: {
		trigger: ".why-tg-section",
		start: "top 50%",
	 },
	});
	gsap.from(".left-block", { 
	  opacity: 0, 
	  x: -150,
	  y: -50, 
	  duration: 0.5, 
	  stagger: 1,
	  delay: 0.1,
	  scrollTrigger: {
		trigger: ".showcases-section",
		start: "top 50%",
	 },
	});
	gsap.from(".img-block5", { 
	  opacity: 0, 
	  x: 200,
	  y: -50,
	  duration: 0.5, 
	  stagger: 1,
	  delay: 0.5,
	  scrollTrigger: {
		trigger: ".showcases-section",
		start: "top 50%",
	 },
	});
	gsap.from(".animateH1", {
		opacity: 0,
		y: -100,
		scrollTrigger: {
			trigger: ".how-it-works-section",
			start: "top 30%",
		 },
	 });
	gsap.from(".grid-blocks", {
		opacity: 0,
		x: -300,
		scrollTrigger: {
			trigger: ".how-it-works-section",
			start: "top 30%",
		 },
	 });
	gsap.from(".animatedP", {
		opacity: 0,
		y: 200,
		scrollTrigger: {
			trigger: ".how-it-works-section",
			start: "top 30%",
		 },
	 });
	gsap.from(".map", {
		opacity: 0,
		y: 500,
		scrollTrigger: {
			trigger: ".how-it-works-section",
			start: "top 30%",
		 },
	 });

	// Background
	gsap.from(".cases-section", { 
		z: -50, 
		duration: 0.5, 
		backgroundColor: "#FFFFFF00",
		scrollTrigger: {
		 trigger: ".cases-section",
		 start: "top 60%",
	  },
	 });
	gsap.from(".tg-advantages-section", { 
		z: -50, 
		duration: 0.5, 
		backgroundColor: "#FFFFFF00",
		scrollTrigger: {
		 trigger: ".tg-advantages-section",
		 start: "top 80%",
	  },
	 });
	gsap.from(".why-tg-section", { 
		z: -50, 
		duration: 0.5, 
		backgroundColor: "#FFFFFF00",
		scrollTrigger: {
		 trigger: ".why-tg-section",
		 start: "top 60%",
	  },
	 });
	gsap.from(".showcases-section", { 
		z: -50, 
		duration: 0.5, 
		backgroundColor: "#FFFFFF00",
		scrollTrigger: {
		 trigger: ".showcases-section",
		 start: "top 60%",
	  },
	 });
	gsap.from(".how-it-works-section", { 
		z: -50, 
		duration: 0.5, 
		backgroundColor: "#FFFFFF00",
		scrollTrigger: {
		 trigger: ".how-it-works-section",
		 start: "top 60%",
	  },
	 });
	 gsap.from("footer",{
		y: 500,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: "footer",
			start: "top 140%"
		}
	})
})