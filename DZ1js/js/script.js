// alert ('Hello, world!');
// ЗАДАНИЕ №1
function power(x,n) {

	for ( var i = 0; i < 1; i++ )	{	 // если  поля пустые или "Отмена"
		var x = prompt("ВВЕДИТЕ ЛЮБОЕ ЧИСЛО", '');
		  if (  x === '' ) {
			alert('Вы не указали число');
        	x = prompt("ВВЕДИТЕ ЛЮБОЕ ЧИСЛО" , ++i);
		}
		if (  x === null ) {
        		alert('Отмена');
        		break;
        	}

		var n = prompt("ВВЕДИТЕ ЖЕЛАЕМЫЙ ПОКАЗАТЕЛЬ СТЕПЕНИ", '');
		  if ( n === ''  ) {
			alert('Вы не указали степень');
        	n = prompt("ВВЕДИТЕ ЖЕЛАЕМЫЙ ПОКАЗАТЕЛЬ СТЕПЕНИ", +i);
		  }
		  if (  n === null || x === '' ) {
		  	alert('Отмена');
		  	break;
		  }
	}

	var result;
		if ( +n === 0 ) {			
			 result = 1; // если показатель степени  = 0
			 console.log( result );
		}
	
		if ( n > 0) {
											
			 result = x;			// если показатель степени  положительный
		for( var i = 1 ; i < n ; i++ ){   
			result *= x };
			console.log( result );
		}

		if ( n < 0) {
											
		 	 result = 1/x;			// если показатель степени  отрицательный
		for(var i = n ; i < -1 ; i++){
				result *= (1/x) };
				console.log( result );

	}
	
	 return result;
}


