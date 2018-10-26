$(document).ready(function(){

	// hamburger
	var hamburger = $(".menu-toggle");
	var menu = $(".page-menu");
	var body = $("body");
	hamburger.on("click", function(){
		$(this).toggleClass("active");
		menu.toggleClass("show");
		body.toggleClass("hide");
	});

	$(".page-menu a").on("click", function(){
		hamburger.removeClass("active");
		menu.removeClass("show");
		body.removeClass("hide");
	});

	const header = $(".page-header");
	const revealPos = header.offset().top + header.height();
	$(window).on("scroll", function(){
		let winPos = $(this).scrollTop();
		if(winPos > revealPos){
			hamburger.css({
				'position' : 'fixed'
			})
		} else {
			hamburger.css({
				'position' : 'absolute'
			})
		}
	});


	// scroll down
	$("#scroll-down").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#about-me").offset().top
    	}, 1000, "linear");
 	});


	// PRELOADER
	var preloader = $("#preloader");
	setTimeout(removePreloader, 1000);
	function removePreloader(){
		preloader.fadeOut(1000);
	}

	// iphone anim
	var iphone = $(".iphone");
	var iphone_shadow = $(".iphone-container")
	iphone.on("mousemove", function(e){
  		var centerX = $(this).width()/2;
  		var moveX = centerX - e.offsetX;
  		var centerY = $(this).width()/2;
  		var moveY = centerY - e.offsetY;
  		$(this).css({
  			'transform': 'rotateY('+ moveX/10 +'deg) rotateX(' + moveY/15 + 'deg)'
  		});
  		iphone.addClass('stop-anim');
	});

	iphone.on("mouseout", function(e){
  		iphone.attr("style", "transform: rotateY(0deg) rotateX(0deg);-webkit-transform: rotateY(0deg) rotateX(0deg);-moz-transform: rotateY(0deg) rotateX(0deg)").addClass("trans anim").removeClass('stop-anim');
  		iphone.removeClass('stop-anim');
	});


	// FORM ANIMATION
	$("input:not([type='submit']), textarea").on("focus", function(){
		$(this).parent($(".input-group")).addClass("hl");
	});
	$("input:not([type='submit']), textarea").on("focusout", function(){
		$(this).parent($(".input-group")).removeClass("hl");
	});


	// type.js
	const typed = new Typed('.type', {
	  strings: ["looove", "was born"],
	  typeSpeed: 300,
	  backSpeed: 100,
	  fadeOut: false,
	  loop: true,
	  cursorChar: '_',
      shuffle: false,
	});


	const consoleTyped = new Typed('.console-type', {
	    strings: ["npm install -g skills  ^1500\n", "running.. ` \n\n` `HTML5 \n` `CSS3 \n` `SASS \n` `Javascript \n` `jQuery \n` `React \n` `RWD \n` `Wordpress \n` ` \n` "],
	   	typeSpeed: 100,
    	backSpeed: 0,
    	loop: false
	});




	// smooth scrolling for links
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	      scrollTop: $($.attr(this, 'href')).offset().top
	     }, 1000);
	});




	// Portfolio
	const projects = $(".project");
	const projectsNumber = $(".project").length;
	const projectDesc = $(".project-details");
	const projectsNumberDesc = $(".project").length;
	$(".projects-number-all").text(projectsNumber);


	$("#portfolio button").on("click", function(){

		const activeProject = $(".project.active-project");
		const prev = $(".project.active-project").prev();
		const next = $(".project.active-project").next();

		const activeProjectDesc = $(".project-details.active-project");
		const prevDesc = $(".project-details.active-project").prev();
		const nextDesc = $(".project-details.active-project").next();


		if(this.id == "next"){
			console.log(nextDesc.index() + " / " + projectsNumberDesc);
			if( next.index() < projectsNumber){
				next.removeClass("to-bottom").addClass("active-project");
				setTimeout(function(){
					activeProject.removeClass("active-project").addClass("to-top");
					$(".projects-number-this").text(next.index() + 1);
				}, 500);
			}
			if( nextDesc.index() === -1){
				return false;
			}
			if( nextDesc.index() < projectsNumberDesc){
				nextDesc.removeClass("to-bottom").addClass("active-project");
				setTimeout(function(){
					activeProjectDesc.removeClass("active-project").addClass("to-top");
				}, 500);
			} else {
				return false;
			}
		} 
		if (this.id == "prev"){
			if($(".active-project").index() === 0){
				return false;
			}
			if( prev.index() < projectsNumber){
				prev.removeClass("to-top").addClass("active-project");
				setTimeout(function(){
					activeProject.removeClass("active-project").addClass("to-bottom");
					$(".projects-number-this").text(prev.index() + 1);
				}, 1000);
			}
			if( prevDesc.index() < projectsNumberDesc){
				prevDesc.removeClass("to-top").addClass("active-project");
				setTimeout(function(){
					activeProjectDesc.removeClass("active-project").addClass("to-bottom");
				}, 1000);
			} else {
				return false;
			}
		}
	});

});