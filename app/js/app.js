// JS scripts
document.addEventListener("DOMContentLoaded", function() {
	var homeSlider = new Swiper('.h-heroes-slider', {
		allowTouchMove: false,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000
		},
		// speed: 700,
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
	$('.burger-btn').on('click', function(e) {
		e.preventDefault()
		$('body').toggleClass('lock-scroll')
		$(this).toggleClass('is-active')
		$('.m-menu').toggleClass('is-active')
	})
})