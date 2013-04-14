$(document).ready(function(){
	
	$('button.test').click(function(){
		var color = $(this).attr('class').split(' ')[1];
		var track = $('audio.' + color)[0];
		console.log(color);
		track.load();
		track.play();

		$('body').removeAttr('id');
		$('body').attr('id', color);

		$('button.stop').click(function(){
			track.pause();
			$('body').removeAttr('id');
			$('body').attr('id', 'stop');
		});
	});

});