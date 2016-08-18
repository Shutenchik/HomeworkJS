$(function () {

	var $input = $('input.textZone');
	var $wrapper = $('.wrapper');
	var $form = $('.form');
	var $tooltip = $('.tooltip');
	var $textBox = $('.text-box');
	var $button = $('input.btn');

		$input.hover(

		function() {
			$(this).next('span')
			.delay(800)
			.animate({width: 190 , height: 30, left: 400, top: 10}, 300)
			.fadeIn(500)
			.animate({width: 220 , height: 30, left: 400, top: 10}, 300);
	},

		function() {
			$(this).next()
			.animate({width: 220 , height: 30}, 300)
			.animate({width: 180 , height: 30}, 300)
			.fadeOut(1000);     
		});
	
		$input.focus(

		function() {
			$(this).next('span')
			.delay(800)
			.animate({width: 200 , height: 30, top: 10, left: 400 }, 300)
			.fadeIn(1000)
			.fadeOut(5000);

	});

	$button.click(
		function() {
			var $tooltip = $('.tooltip');
			$tooltip
			.animate({width: 0 , height: 0, }, 100)
			.animate({width: 200 , height: 30, top: 10, left: 400}, 800)
			.show();
		});
	
		$wrapper.css({
		"width": "710px",
		"margin": "50px auto",
		"background-color": "lemonchiffon",
		"border-radius": "10px"
	});

	$form.css({
		"padding": "20px 50px"
	});

	$input.css({
		"width": "300px",
		"height": "30px",
		"margin": "10px",
		"font-size": "20px"
	});

	$tooltip.css({
		"display": "none",
		"position": "absolute",
		"border": "1px solid black",
		"border-radius": "5px",
		"text-align": "center",
		"background-color": "rgba(0, 0, 0, 0.65)",
		"color": "white",
		"font-family": "sans-serif",
		"font-weight": "bold",
		"font-size": "12px",
		"line-height": "30px"
	});

	$textBox.css({
		"margin": "15px 0",
		"position": "relative"
	});

	$button.css({
		"width": "150px",
		"height": "40px",
		"position": "relative",
		"left": "30%",
		"background-color": "#C0EFEF",
		"font-size": "20px",
		"font-family": "Helvetica Neue Regular ,sans-serif",
		"border": "0",
		"border-radius": "10px",
		"font-weight": "bold"
	})
	});
