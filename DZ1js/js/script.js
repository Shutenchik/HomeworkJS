// alert ('Hello, world!');
// ЗАДАНИЕ №1
function power(base,exp) {

		if ( exp <= 0 ) {
								
			var result = 1; // если показатель степени  = 0
		}
	
		if ( exp > 0) {
											
			var result = base;			// если показатель степени  положительный
		for(var i = 1 ; i < exp ; i++){   
			result *= base };

		}

		if ( exp < 0) {
											
		 	var result = 1/base;			// если показатель степени  отрицательный
		for(var i = exp ; i < -1 ; i++){
				result *= (1/base) };

		}
	 return result;
}
	
var base = prompt("ВВЕДИТЕ ЛЮБОЕ ЧИСЛО", '');
var exp = prompt("ВВЕДИТЕ ЖЕЛАЕМЫЙ ПОКАЗАТЕЛЬ СТЕПЕНИ", '');

console.log( power(base, exp) );
// ЗАДАНИЕ №2

