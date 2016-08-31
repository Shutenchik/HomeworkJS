$(function () {
	
	var html = $('#render').html();

	var info = 
		{
			title: 'Шутенко Наталия Александровна',
			image: 'img/Natali.jpg',
			content: 'Выпускница лучшего технического вуза Украины',
			content1: 'Хочу учить Frontend, потому что:',
			list: [

				{
					item: 'Это большое развитие в IT-индустрии'
				},

				{
					item: 'Это изменит мою жизнь'
				},

				{
					item: 'Даст возможность мне стать творцом'
				}
			],
			contact: [
				{
					telNumber: 'Мой контактный телефон:'
				},

				{
					telNumber: '+380934543966'
				}
			],
			contVk: 'Мой профиль вконтакте:',
			linkVk: 'https://vk.com/natali4ka_oo',
			linkVkTitle: 'vk.com/natali4ka_oo',


			feedback: [
				{
					myComent: 'Мой фидбек:'
				},

				{
					myComent: 'Уверенна мы будем дружной командой)'
				}

			]
		}
	var content = tmpl(html,info);
	$('body').append(content);



})
