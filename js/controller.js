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

		$('button.stop').click(function(){
			track.pause();
			$('body').removeAttr('id');
		});

		$('body').removeAttr('id');
		$('body').attr('id', color);
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

		$('body').removeAttr('id');
		$('body').attr('id', color);

		$('button.stop').click(function(){
			track.pause();
			$('body').removeAttr('id');
		});
	});

});