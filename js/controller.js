$(document).ready(function(){
	
	/* key */
	$(document).bind('keydown', function(e) {
		
		$('audio').each(function() {
			this.pause();
		});

		var key = e.which;
		var color = '';
		if(key == 38) {
			color = 'green';
		} else if(key == 96) {
			color = 'yellow';
		} else if(key == 111) {
			color = 'red';
		} else {
			console.log(key);
		}

		var track = $('audio.' + color)[0];
		track.load();
		track.play();

		$('.stop').click(function(){
			track.pause();
			$('#hug').removeAttr('class');
		});

		$('#hug').removeAttr('class');
		$('#hug').attr('class', color);
	});


	/* test audio */
	$('button.test').click(function(){
		
		$('audio').each(function() {
			this.pause();
		});

		var color = $(this).attr('class').split(' ')[1];
		var track = $('audio.' + color)[0];
		track.load();
		track.play();

		$('#hug').removeAttr('class');
		$('#hug').attr('class', color);

		$('.stop').click(function(){
			track.pause();
			$('#hug').removeAttr('class');
		});
	});

});