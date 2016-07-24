var initHtml = {
	 callTitle: function(){
 		renderHtml.renderTitle('Тест по програмированию');
 	},
 	callQuestion: function(){
 	for(var i=1; i<=3; i++) {
            renderHtml.generateQuestion('Вопрос №', i);
            for(var j = 1; j<=3; j++) {
                renderHtml.generateAnswer('Вариант ответа №', j );
            }
        }
	},
 	callButton: function() {
 		renderHtml.generateButton('Проверить мои результаты');
 	},
	callPage: function() {
		this.callTitle();
		this.callQuestion();
		this.callButton();
	}
}

var renderHtml = {

	createElement: function(el, classElem,  text, attr, parent) {
		var elem = document.createElement(el);
	 
		if(el == 'input')
            this.setAttr(elem,'type','checkbox');

		this.setClass(classElem, elem);
		this.setText(elem, text);
		this.setAppend(elem, parent);
		return elem;
	},

	setClass: function(classElem, element) {
		element.className = classElem;
	},

	setAttr: function(element, attr, value ) {
		element.setAttribute(attr, value);
	},

	setText: function (element, text) {
		element.innerHTML = text;
	},

	setAppend: function ( element, parent) {
		 if(parent != undefined && parent != '')
            parent.appendChild(element);
        else
            document.body.appendChild(element);
	},

	renderTitle: function () {
		this.createElement('h1','alert alert-info text-center','Тест по програмированию');
	},

	generateQuestion: function(text, number) {
		this.createElement('label', 'container col-lg-6 col-lg-offset-3 lead alert alert-success', +number+'. '+text+number);
	},
	generateAnswer: function(text,  number) {
		var parentBox = this.createElement('div', 'container col-lg-6 col-lg-offset-3 alert alert-warning', '');
		this.createElement('input', 'container col-lg-6 col-lg-offset-3 alert alert-warning', '', '',parentBox);
		this.createElement('label', '', text+number, '', parentBox);

	},

    generateButton: function (){
    	this.createElement('button', 'btn btn-primary btn-lg col-lg-offset-3 col-lg-6', 'Проверить мои результаты');
   }
}

initHtml.callPage();


