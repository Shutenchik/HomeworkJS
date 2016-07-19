var generator = {
   renderTitle: function  renderTitle(titleName){
   	var header = document.createElement('h1');
	header.innerHTML = titleName;
	header.classList.add('alert', 'alert-info','text-center');
	var body = document.querySelector('body');
	document.body.appendChild(header);
   },
    generateQuestion: function  generateQuestion(question){
   	var label = document.createElement('label');
	label.innerHTML = question;
	label.classList.add('container','col-lg-offset-1','lead','alert', 'alert-success');
	var body = document.querySelector('body');
	document.body.appendChild(label);
   },
   generateAnswer: function generateAnswer(answer) {
   	var box1 = document.createElement('div');
	box1.classList.add('container','col-lg-offset-1','alert', 'alert-warning');
	document.body.appendChild(box1);
   	var checkBox = document.createElement('input');
	checkBox.setAttribute('type','checkbox');
	box1.appendChild(checkBox);  
	var labelBox = document.createElement('label');
	labelBox.innerHTML = answer;
	labelBox.style.display = 'inline-block';
	box1.appendChild(labelBox);
   },
   generateButton: function generateButton(buttonName){
   	var button = document.createElement('button');
	button.innerHTML = buttonName;
	button.classList.add('btn', 'btn-primary', 'btn-lg','col-lg-offset-3','col-lg-6');
	document.body.appendChild(button);
   }
}
generator. renderTitle('Тест по програмированию');
for(var i=1; i<=3; i++) {
  generator.generateQuestion(i+'. Вопрос №'+i);
  
  for(var j = 1; j<=3; j++) {
    generator.generateAnswer('Вариант ответа №'+j);
  }
}
generator.generateButton('Проверить мои результаты');
