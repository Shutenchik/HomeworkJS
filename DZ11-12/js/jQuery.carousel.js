(function ($) {
	$.fn.myCarousel = function (options) {

	var leftArrow = $('.carousel-arrow-left');
	var rightArrow = $('.carousel-arrow-right');
	var elementsList = $('.carousel-list');

	var pixelsOffset = 185;
	var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
	var minOffset = - ((elementsCount - 3) * pixelsOffset);
	var maxOffset = 0;

		var defaults = {
				fontSize: '30px',
				color: '#766464'
		}

		var settings = $.extend(defaults, options);

			function prevSlide() {
			 	if (currentLeftValue != maxOffset) {
            currentLeftValue += 185;
            elementsList.animate({ left : currentLeftValue + "px"}, 500)
            .css({
            	'font-size': settings.fontSize
            });
        } 
			}

			function nextSlide() {
		  	if (currentLeftValue != minOffset) {
            currentLeftValue -= 185;
            elementsList.animate({ left : currentLeftValue + "px"}, 500)
            .find('p')
            .css({
            	'font-size': settings.fontSize,
            	'font-family': settings.fontFamily,
            	'color': settings.color
            });
        }  
			}


		leftArrow.on('click', prevSlide); 
		rightArrow.on('click', nextSlide);

		return this;
	}


})(jQuery);