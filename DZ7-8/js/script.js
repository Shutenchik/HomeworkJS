
$( function () {

 var $tabs = $('#tabs');
 var $wrapper =  $('.wrapper');
 var $list = $('.tabs');
 var $listItem = $('.tabs li');
 var $listLink = $('.tabs a');
 var $content = $('.content-tabs');
 var $contentBox = $('.content-tabs > div');
 var $textBox = $('.text-box');

 $('.content-tabs div', $tabs).each(function(i) {

 		if ( i != 0) 	{
 			$(this).hide();
 		};

 	$tabs.on('click', '.tab a', function (event) {

 		event.preventDefault();

 		var $tabId = $(this).attr('href');

 		$('.tab a', $tabs).removeClass();
 		$(this).addClass('active');
 		$('.content-tabs div', $tabs).hide();
 		$($tabId).show(0);

 	})

 })

   $wrapper.css({
 	"text-align": "center",
 	"font-family": "Open Sans",
 	"margin": "100px auto",
 	"width": "500px"
 });

  $tabs.css({
  	"border-radius": "10px",
  	"background-color": "#F6F1CD",
  	"width": "100%"
  });

  $list.css({
  	"padding": "10px 33px 0"
  });

  $listItem.css({
  	"list-style-type": "none",
	"cursor": "pointer",
	"width": "100px",
	"display": "inline-block",
	"padding-top": "13px"
  });

  $listLink.css({
  	"text-decoration": "none",
	"font-weight": "bold",
	"font-size": "16px",
	"display": "block",
	"padding": "10px",
	"z-index": "1",
  });

  $content.css({
  	"padding": "0 25px",
	"height": "275px"
  });

  $contentBox.css({
  	"text-align": "left",
	"clear": "both",
	"padding": "15px"
  });

  $textBox.css({
  	"background-color": "#7A9EE6",
	"border-radius": "10px",
	"position": "relative",
	"z-index": "1",
	"box-shadow": "1px 1px 16px grey",
	"color": "#FBF6E3",
  });

});


