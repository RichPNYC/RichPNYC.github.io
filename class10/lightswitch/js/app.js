$(document).ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function(){
		if (lights === 'on') {
			$('#lightswitch').addClass('switch-off');
			$('#lightswitch').removeClass('switch-on');
			$('body').addClass('lights-off')
			// $('#lightswitch').css('background', 'white');
			// $('#lightswitch').css('color', 'black');
			//$('body').css('background', 'black');
			lights = 'off';
		} else {
			$('#lightswitch').addClass('switch-on');
			$('#lightswitch').removeClass('switch-off');
			$('body').removeClass('lights-off');
			//$('#lightswitch').css('background', 'black');
			//$('#lightswitch').css('color', 'white');
			//$('body').css('background', 'white');
			lights = 'on';
		}

		$(this).html(lights);
	});








})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;