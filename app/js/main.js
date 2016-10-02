;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);	

	$doc.ready(function() {
		//scrollTop
		$('.scroll-top').on('click', function(e) {
			e.preventDefault();

			$('html, body').animate({
				scrollTop: 0
			}, 600);
		});

		//slider
		var $slider = $('.slider');

		$slider.flexslider({
			animation: "slide",
			slideshowSpeed: 5000,
			animationSpeed: 600,
			useCSS: false,
			controlNav: false
		});

		$win.on('load', function() {
			$slider.addClass('loaded');
		});
	});

})(jQuery, window, document);
