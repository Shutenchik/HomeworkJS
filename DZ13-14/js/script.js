$(function () {
	"use strict";

	var htmlTest = $('#render').html();
	var test = {
		title: 'Тест по програмированию',
		question: [ 'Столица Украины', 'Столица США', 'Столица Германии'],
		answer: [['Минск', 'Москва', ' Киев'], ['Чикаго', ' Вашингтон', 'Нью-Йорк'], [' Берлин ', 'Мюнхен', 'Кёльн']],
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
	var title;
	var $getAnswer;
	
	function hideModal() {
			//  очистка теста 

			for (var i = 0; i < $getAnswer.length; i++) {
				$getAnswer[i].checked = false;
			}
		modalBox = $('.modalBox')
		modalBox.remove();

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

		 // console.log('rightAnswersCounter = ', rightAnswersCounter);

		 if ( rightAnswersCounter === 0) { 	
				modalBox = $('<div class="modalBox"><h1>Your have ' + rightAnswersCounter + ' right answers<h1><button class="closeModal btn btn-default">close</button></div>');
		 } 

		 if ( rightAnswersCounter === 1 ) {
				modalBox = $('<div class="modalBox"><h1>Your have ' + rightAnswersCounter +' right answers<h1><button class="closeModal btn btn-default">close</button></div>');		 	
		 }

		 	if ( rightAnswersCounter === 2 ) {
			   modalBox = $('<div class="modalBox"><h1>Your have ' + rightAnswersCounter +' right answers<h1><button class="closeModal btn btn-default">close</button></div>');		 	
		 }

		 	if ( rightAnswersCounter === 3 ) {
			 	  modalBox = $('<div class="modalBox"><h1> Congrats! Your have ' + rightAnswersCounter +' right answers<h1><button class="closeModal btn btn-default">close</button></div>');		 	
		  }

	 	$body = $('body');
		$body.append(modalBox).show();

  	$('.closeModal').one('click', hideModal);
	};

$('.btn').on('click', showModal);
});
