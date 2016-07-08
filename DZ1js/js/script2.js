// alert ('Hello , World') ;
// ЗАДАНИЕ №2

 var arr = []; //создем массив
   
    for (var i=0; i < 5; i++) {
        arr[i] = prompt('Введите любое имя', i); //Заполняем массив
    }

	console.log(arr); // Выводим массив целиком
	
 	var userName = prompt ('Введите имя пользователя'); 
 	console.log ('Ваше имя  -  ' +userName);	 
		
	for (var i = 0; i < 5; i++) {            //Сравниваем  введенное имя с каждым элементом массива
		if (arr[i] == userName) {
	    alert(userName+', Вы успешно вошли');
	    break;
	}
}
	if ( arr[i] != userName ) {
		alert('Ошибка доступа, пользователя с таким именем не обнаружено!');
	}

