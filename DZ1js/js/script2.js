// alert ('Hello , World') ;
// ЗАДАНИЕ №2
function arrName() {
 var arr = []; //создем массив
   
    for (var i=0; i < 5; i++) {
        arr[i] = prompt('Введите любое имя', +i); //Заполняем массив
        if ( arr[i] === null || arr[i] === '' ) {  // если  массив пустой или "Отмена"
        	alert('Вы не указали имя');
        		 arr[i] = prompt('Введите любое имя', +i); 
        	// if ( arr[i] === null ) {
        	// 	alert ('Отмена');
        	// 	break;
        	// }
        }
    }

	console.log(arr);   // Выводим массив целиком
	
 	var userName = prompt ('Введите имя пользователя'); 
 	// console.log ('Ваше имя  -  ' +userName);	 
		
	for (var i = 0; i < 5; i++) {            //Сравниваем  введенное имя с каждым элементом массива

		if (arr[i] === userName) {

	      alert(userName+', Вы успешно вошли');
	      break;

	    }

	    if (  userName === null || userName === '' ) {  // если  массив пустой или "Отмена"
		  alert('Вы не указали пользователя!');
		  userName = prompt ('Введите имя пользователя'); 
		  // if ( userName === null ) {
    //     		alert ('Отмена');
    //     		break;
    //     	}
	}
}
	
  if ( arr[i] != userName) {
		alert('Ошибка доступа, пользователя с таким именем не обнаружено!'); // если  ел-ты массива не совпали
	}
} 

// arrName()