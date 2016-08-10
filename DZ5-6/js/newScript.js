function Stopwatch (elem) {
	var time = 0;
	var interval;
	var offset;

	function update() {	
		if (this.isOn) {
			time += delta();
		}

		var timeFormatted = timeFormat(time);
		elem.innerHTML = timeFormatted;
	}

	function delta() { // ф-ция вычисляет сколько времени прошло
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	}

	function timeFormat(timeInMilSeconds) {
		var milSec = time % 1000;
		var sec = Math.floor(time/1000);
		var min = Math.floor(time/(1000*60));
		var hours = Math.floor(time/(1000*60*60));

	  if ( hours < 10) {
	  	hours =  '0' + hours; 
	  }

 	  if (min >= 60) {
	  	min = min % 60;
	  }

	  if (min < 10) {
	  	min = '0' + min;
	  }

	  if (sec >= 60) {
	  	sec = sec % 60;
	  }

	  if ( sec < 10) {
	  	sec = '0' + sec;
	  }

	  if (milSec < 100) {
	  	milSec = '0' + milSec;
	  }

	  var timer = document.getElementById('timer').innerHTML =  hours + ':' + min + ':' + sec + '.' + milSec;
	  return timer;

	}

	this.running = false;

	this.startPause = function() {
		if ( !this.isOn) {
		  document.getElementById('startPause').innerHTML = 'Pause';
		  interval = setInterval( update.bind(this), 1);
		  offset = Date.now(); // время запуска секундомера
		  this.isOn = true;
	
		} else {
			document.getElementById('startPause').innerHTML = 'Resume';
			clearInterval(interval);
			interval = 0;
			this.isOn = false;
		}
	}

	 this.reset = function(){
	 	time = 0;
	 	document.getElementById('startPause').innerHTML = 'Start';
	  	update();
	 }
 }


(function () {
var startFunc = document.getElementById('startPause');
var resetFunc = document.getElementById('reset');

var watch = new Stopwatch(timer);

startFunc.addEventListener('click', function(){
	watch.startPause();
});

resetFunc.addEventListener('click', function(){
	if ( watch.isOn ){
		watch.startPause();
		watch.reset();
		
	} else {
		watch.reset();
	}	
});
}) ();

