document.addEventListener("DOMContentLoaded", function() {

	var homeSlider = new Swiper('.heroes-slider', {
		loop: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})

});
