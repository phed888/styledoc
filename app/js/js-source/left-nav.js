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