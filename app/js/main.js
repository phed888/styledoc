$( document ).ready(function() {
	
	////////////////////////////////////////////////////////////////////
	// Variables
	////////////////////////////////////////////////////////////////////
    var nav = $('.sg-nav');
	var navLink = nav.find('.sg-nav-link');
	var navSect = nav.find('.sg-nav-section');
	var header = $('.page-header');
	var navButton = header.find('.button__navigation');

	
	////////////////////////////////////////////////////////////////////
	// Sliding the left nav in and out
	////////////////////////////////////////////////////////////////////
	var isOpen = false;
	
	nav.animate({left: -240});
	
	navButton.click(function () {
		if(isOpen){
			nav.animate({left: -240});
			isOpen = false;
		} else {
			nav.animate({left: 0});
			isOpen = true;
			console.log(isOpen);
		}
	});
	
	navSect.click(function () {
		$(this).next('ul').slideToggle('fast');
	});
	navLink.click(function () {
		nav.animate({left: -240});
	});

	
	////////////////////////////////////////////////////////////////////
	//Scrolling to anchor links in the page body
	////////////////////////////////////////////////////////////////////
	$('a[href*=#]').click(function(event){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top -140
		}, 500);
		event.preventDefault();
	});

	
	////////////////////////////////////////////////////////////////////
	// Home page slide show
	////////////////////////////////////////////////////////////////////
	var slides = $('.slide');
	// var slides = [$('.slide-1'), $('.slide-2'), $('.slide-3'), $('.slide-4'), $('.slide-5')]
	var activeSlide = 1;
	
	slides.hide();
	$('.slide-1').show();
	
	function nextSlide() {
		if(activeSlide < 5) {
			activeSlide++;
		} else {
			activeSlide = 1;
		}
		var visibleSlide;
		if(activeSlide === 1) {
			visibleSlide = $('.slide-1');
		} else if (activeSlide === 2) {
			visibleSlide = $('.slide-2');
		} else if (activeSlide === 3) {
			visibleSlide = $('.slide-3');
		} else if (activeSlide === 4) {
			visibleSlide = $('.slide-4');
		} else if (activeSlide === 5) {
			visibleSlide = $('.slide-5');
		}
		
		slides.hide();
		visibleSlide.show();
	}
	
	var slideShow = setInterval(nextSlide, 5000);
});