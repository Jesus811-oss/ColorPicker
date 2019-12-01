var body	= '#body';
var header 	= '#header';
var card 	= '#card';
var buttons = '#btn-colorpicker';
// Variabñelse
var canvas 	= '#canvas-view';
var square 	= '.fa-square';
var backg 	= $('#color-input').val();

$(window).ready(function() {
	/*
	**	StyleSheet in Jquery
	*/
	// ! body-stylesheet
	$(body).css('background-color','#345778');
	// ! header-stylesheet
	$(header).css('background-color', '#245a91');
	// ! card-stylesheet
	$(card).css({
		'border': 'none',
		'background-color': '#245a91'
	});
	// ! buttons-stylesheet
	$(buttons).css({
		'background-color': '#245a91',
		'color': 'white'
	});
	// ! event-loadColor
	$('#save-color').click(function(event) {
	// ! canvas-stylesheet
	$(canvas).css('background-color', '#'+$('#color-input').val());
	});
	if ($('#save-color') == "") {
		//
	}else{
		$(square).css('color', '#'+$('#color-input').val());
	}
});
