////////////////////////////////////////////////////////////////////
// Home page slide show
////////////////////////////////////////////////////////////////////
var slides = $('.slide');
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