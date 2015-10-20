$(document).ready(function(){
	$('.game-area').hide();
	$('.overlay').hide();
	$('#start').click(function(){
		$('.introduction').fadeOut();
		$('.game-area').fadeIn(3000);
	})

	$('.user-submit').submit(function(e){
		e.preventDefault();
		$('.game-area').hide();
		$('.overlay').fadeIn();
	})
});