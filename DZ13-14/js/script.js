$(function () {
	"use strict";

	var htmlTest = $('#render').html();
	var test = {
		title: 'Тест по програмированию',
		question: [ 'Основные инструменты для фронтенд разработки', 'Свойство для изменения размера шрифта', 'Кто являеться создателем JavaScript?'],
		answer: [['Html, PHP, JavaScript', 'Java, CSS, Html', ' Html, CSS, JavaScript'], ['Font-wieght', ' Font-size', 'Font-family'], [' Брендад Эйх ', 'Ларри Уолл', 'Билл Гейтс']],
		button: 'Проверить мои результаты'
		
	};

var strTest = JSON.stringify(test);


var testLs = localStorage.setItem('testFirst', strTest);
var testGet = localStorage.getItem('testFirst');

var testSecond = JSON.parse(testGet);

var renderPage = tmpl(htmlTest, testSecond);

$('body').append(renderPage);

//	 show modal
	var modalBox;
	var $body;
	var $overlay;
	var title;
	var $getAnswer;
	
	function hideModal() {
			//  очистка теста 

			for (var i = 0; i < $getAnswer.length; i++) {
				$getAnswer[i].checked = false;
			}

		modalBox = $('.modalBox')
		$(modalBox).animate({ top: '-50%' }, 500);
		setTimeout(function () {
        modalBox.remove();
        $overlay.remove();
      }, 500);

	} 

	function showModal(e) {
		e.preventDefault();
		var rightAnswers = [2, 4, 6];
		var rightAnswersCounter = 0;
		 $getAnswer = $('.radio');

		// проверка правильных ответов
		for ( var i = 0; i < rightAnswers.length; i++){

			if( $getAnswer[rightAnswers[i]].checked ){
				rightAnswersCounter++;
			};
		};

		 if ( rightAnswersCounter === 0) { 	
		 	modalBox = $('<div class="modalBox"><h1 class="head-Title">Your score is: ' + rightAnswersCounter + ' of 3</h1><button class="closeModal btn btn-success">close</button></div>');
		 } 

		 if ( rightAnswersCounter === 1 ) {
		 	modalBox = $('<div class="modalBox"><h1 class="head-Title">Your score is: ' + rightAnswersCounter +' of 3</h1><button class="closeModal btn btn-success">close</button></div>');		 	
		 }

		 	if ( rightAnswersCounter === 2 ) {
		 		modalBox = $('<div class="modalBox"><h1 class="head-Title">Your score is:  ' + rightAnswersCounter +' of 3</h1><button class="closeModal btn btn-success">close</button></div>');		 	
		 }

		 	if ( rightAnswersCounter === 3 ) {
		 		modalBox = $('<div class="modalBox"><h1 class="head-Title"> Congrats! </h1><p class="test-done">Your score is: ' + rightAnswersCounter +' of 3</p> <button class="closeModal btn btn-success btn-test-done">close</button></div>');		 	
		  }
	
		$overlay = $('<div class="modal-overlay">');
	 	$body = $('body');
	 	$body.append($overlay);
		$body.append(modalBox).show();
		$(modalBox).animate({top: '25%'}, 500);


  	$('.closeModal').one('click', hideModal);
	};

$('.btn').on('click', showModal);
});
