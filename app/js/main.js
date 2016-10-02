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

		$win.on('load', function() {		
			//slider
			$('.slider').flexslider({
				animation: "slide",
				slideshowSpeed: 5000,
				animationSpeed: 600,
				useCSS: false,
				controlNav: false
			});

			setTimeout(function() {
				$('.slider-holder').css({
					'opacity': 1,
					'visibility': 'visible'
				}, 100);
			}, 100);
		});		
	});

})(jQuery, window, document);
