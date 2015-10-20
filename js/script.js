$(document).ready(function(){
	$('.game-area').hide();
	$('.answer-overlay').hide();
	$('#start').click(function(){
		$('.introduction').fadeOut();
		$('.game-area').fadeIn(3000);
	})

	$('#answer-submit').submit(function(e){
		e.preventDefault();
		$('.game-area').hide();
		$('.answer-overlay').fadeIn();
	})
});