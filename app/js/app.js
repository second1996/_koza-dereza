// JS scripts
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
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 700,
		autoplay: false,
		// loop: false,
		pagination: {
			el: '.h-reviews .swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			// when window width is >= 320px
			1240: {
				slidesPerView: 2,
				spaceBetween: 20,
				autoHeight: false,
				autoplay: {
					delay: 6500
				}
			}
		}
	})
});

// jQuery scripts
jQuery(document).ready(function($) {
	
})