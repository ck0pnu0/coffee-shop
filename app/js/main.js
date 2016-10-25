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

		$('.menu-btn').on('click', function(e) {
			e.preventDefault();

			$(this).toggleClass('open');
			$(this).parent().toggleClass('active');
		});

		//slider
		var $slider = $('.slider');
		$slider.flexslider({
			animation: "slide",
			slideshowSpeed: 5000,
			animationSpeed: 600,
			useCSS: false,
			controlNav: false,
			start: function(slider) {
				$('.slider-holder').css({'opacity': 1, 'visibility': 'visible', '-webkit-backface-visibility': 'visible'});
				slider.resize();
			}
		});		
	});

})(jQuery, window, document);
