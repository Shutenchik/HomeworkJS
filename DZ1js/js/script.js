// alert ('Hello, world!');
// ЗАДАНИЕ №1
	
function power(number, exponent) { //Обьявляется ф-ция
	var answerContainer = document.getElementById("answer"); //Находим в файле index.html елемент с id="answer" 
	var number = defineNumber(); //Вызов ф-ции defineNumber

	if ( number === null ) { // Если пользователь нажимает ОТМЕНА
		alert('Отмена'); //Выводится сообщения
		return false; // ф-ция прекращается
	}
	var exponent = defineExponent ();  //Вызов ф-ции defineExponent
	if ( exponent === null ) {  // Если пользователь нажимает ОТМЕНА
		alert('Отмена'); //Выводится сообщения
		return false; // ф-ция прекращается
	}

	var res = calc(); //Вызов ф-ции calc
	answerContainer.innerHTML = ''; // Зачистка ел-та span в который будет выводить результат
	answerContainer.innerHTML = res;// Выводим результат в окно браузера 

	function defineNumber(val) { //Обьявляется ф-ция defineNumber
    var x = prompt("ВВЕДИТЕ ЛЮБОЕ ЧИСЛО", val || '' ); //Появляется окно prompt, в которое необходимо ввести значение
    if( x === '') { //Если  значение не введено
        alert('Вы не указали число'); //Выводится сообщение
       return  defineNumber(val);    //Идет возврат к ф-ции defineNumber (вызывается ф-ция defineNumber)
      }
    	return x; //Возврат значения х
    }

    function defineExponent (val) { //Обьявляется ф-ция defineExponent
    var n = prompt("ВВЕДИТЕ ЖЕЛАЕМЫЙ ПОКАЗАТЕЛЬ СТЕПЕНИ", val || '' ); //Появляется окно prompt, в которое необходимо ввести значение
	if ( n === '' ) {//Если  значение не введено
		alert('Вы не указали степень');//Выводится сообщение
		return defineExponent (val);	//Идет возврат к ф-ции defineExponent (вызывается ф-ция defineExponent)
	}
	return n; //Возврат значения n
   }

	function calc () {//Обьявляется ф-ция calc
		var result; //Обьявляется переменная result
		if ( +exponent === 0 ) {	// если показатель степени  = 0		
			result = 1; // переменная  = 1	
		}
	
		if ( +exponent > 0) { // если показатель степени  положительный	
											
			 result = +number;  //переменная = значению ф-ции defineNumber 
		for( var i = 1 ; i < +exponent ; i++ ){    //цикл, для подсчета результата, если показатель степени > 1
			result *= +number };  //выражение подсчёта результата 
		}

		if ( +exponent < 0) {	// если показатель степени  отрицательный						
		 	 result = 1/+number; //переменная обратнопропорциональна значению ф-ции defineNumber 			
		for(var i = +exponent ; i < -1 ; i++){ //цикл, для подсчета результата, если показатель степени > -1
			result *= (1/[+number]) }; //выражение подсчёта результата 
		}
		return result; //Возврат значения result
	}
		console.log( res ); //Вывод результата подсчета в консоль
		return res;	//Возврат значения res
}


