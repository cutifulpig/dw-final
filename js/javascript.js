/*$(document).ready(function() {
    $('.slideshow').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
});*/
$('#right').cycle({
    fx:      'scrollRight',
    next:   '#right',
    timeout:  0,
    easing:  'easeInOutBack'
});
