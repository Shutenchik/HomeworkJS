// alert ('Hello, world!');
// ЗАДАНИЕ №1
function power(x,n) {

	var x = prompt("ВВЕДИТЕ ЛЮБОЕ ЧИСЛО", '');
	var n = prompt("ВВЕДИТЕ ЖЕЛАЕМЫЙ ПОКАЗАТЕЛЬ СТЕПЕНИ", ''); 
	var result;
		
		if ( +n === 0 ) {			
			 result = 1; // если показатель степени  = 0
			 console.log( result );
		}
	
		if ( n > 0) {
											
			 result = x;			// если показатель степени  положительный
		for(var i = 1 ; i < n ; i++){   
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

	// power();

// ЗАДАНИЕ №2

