document.addEventListener("DOMContentLoaded", function() {

	var homeSlider = new Swiper('.h-heroes-slider', {
		loop: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.h-heroes .swiper-pagination',
			clickable: true,
		},
	})
	var reviewsSlider = new Swiper('.h-reviews-slider', {
		slidesPerView: 2,
		spaceBetween: 20,
		speed: 700,
		autoplay: {
			delay: 2000
		},
		// loop: false,
		pagination: {
			el: '.h-reviews .swiper-pagination',
			clickable: true,
		},
	})

});
