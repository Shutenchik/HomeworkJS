$(function () {

	var $input = $('input.textZone');
    var $label = $('label');
	var $tooltip = $('.tooltip');
	
	var $button = $('input.btn');

		$input.hover(

		function() {
			$(this).next('span')
			.animate({width: 200 , height: 30, left: 400, top: 10}, 300)
			.fadeIn(500);
	},

		function() {
			$(this).next()
			.animate({width: 200 , height: 30}, 300)
			.fadeOut(0);     
		});
	
		$input.focus(

		function() {
			if ( $input != $(this) ) {
				$input.next().hide(0);
		 } 
		 $(this).next('span')
			.animate({width: 200 , height: 30, top: 10, left: 400 }, 300)
			.show();
	});

	$button.click(
		function() {
			var $tooltip = $('.tooltip');
			$tooltip
			.animate({width: 0 , height: 0, }, 100)
			.animate({width: 200 , height: 30, top: 10, left: 400}, 800)
			.show();
		});
});