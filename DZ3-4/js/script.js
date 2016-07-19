var header = document.createElement('h1');
header.innerHTML = 'Тест по програмированию';
header.classList.add('alert', 'alert-info','text-center');
var body = document.querySelector('body');
body.appendChild(header);

var form = document.createElement('form');
form.classList.add('container','alert', 'alert-warning');
body.appendChild(form);

var label = document.createElement('label');
label.classList.add('control-label','lead','alert', 'alert-success');
label.innerHTML = '1. Вопрос № 1';
label.style.display = 'block';
form.appendChild(label);

var box1 = document.createElement('div');
box1.classList.add('container');
form.appendChild(box1);

var checkBox = document.createElement('input');
checkBox.setAttribute('type','checkbox');
checkBox.setAttribute('id','check');
box1.appendChild(checkBox);  

var labelBox = document.createElement('label');
labelBox.innerHTML = 'Вариант ответа №1';
labelBox.style.display = 'inline-block';
labelBox.setAttribute('for','check');
box1.appendChild(labelBox);

var box2 = box1.cloneNode(true);
box2.querySelector('label').innerHTML = 'Вариант ответа №2';
box2.querySelector('input').setAttribute('id','check2');
box2.querySelector('label').setAttribute('for','check2');
form.appendChild(box2);

var box3 = box1.cloneNode(true);
box3.querySelector('label').innerHTML = 'Вариант ответа №3';
box3.querySelector('input').setAttribute('id','check3');
box3.querySelector('label').setAttribute('for', 'check3');
form.appendChild(box3);

var form2 = form.cloneNode(true);
form2.querySelector('label').innerHTML = '2. Вопрос № 2';
box1.querySelector('input').setAttribute('id','check21');
box1.querySelector('label').setAttribute('for','check21');
box2.querySelector('input').setAttribute('id','check22');
box2.querySelector('label').setAttribute('for','check22');
box3.querySelector('input').setAttribute('id','check23');
box3.querySelector('label').setAttribute('for','check23');
body.appendChild(form2);

var form3 = form.cloneNode(true);
form3.querySelector('label').innerHTML = '3. Вопрос № 3';
box1.querySelector('input').setAttribute('id','check31');
box1.querySelector('label').setAttribute('for','check31');
box2.querySelector('input').setAttribute('id','check32');
box2.querySelector('label').setAttribute('for','check32');
box3.querySelector('input').setAttribute('id','check33');
box3.querySelector('label').setAttribute('for','check33');
body.appendChild(form3);

var button = document.createElement('button');
button.innerHTML = 'Проверить мои результаты';
button.classList.add('btn', 'btn-primary', 'btn-lg','col-lg-offset-3','col-lg-6');
body.appendChild(button);