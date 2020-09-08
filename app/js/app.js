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
	var productSlider = new Swiper('.product-slider', {
		slidesPerView: 1,
		// allowTouchMove: false,
		loop: true,
		// effect: 'fade',
		// fadeEffect: {
		// 	crossFade: true
		// },
		thumbs: {
			swiper: {
				el: '.product-thumbs',
				allowTouchMove: false,
				slidesPerView: 'auto',
			}
		}
	})
});

// jQuery scripts
jQuery(document).ready(function($) {

	// $('#callbackModal').modal('show')

	$('.burger-btn').on('click', function(e) {
		e.preventDefault()
		$('body').toggleClass('lock-scroll')
		$(this).toggleClass('is-active')
		$('.m-menu').toggleClass('is-active')
	})
	
	$('.search-btn-trigger').on('click', function() {
		$('body').addClass('lock-scroll')
		$('.burger-btn, .m-menu').addClass('is-active')
		setTimeout(function() {
			$('#m-menu-search').focus()
		}, 100);
	})

	$('[data-fancybox').fancybox({
		buttons: [
			"zoom",
			//"share",
			// "slideShow",
			"fullScreen",
			//"download",
			// "thumbs",
			"close"
		],
	})

})