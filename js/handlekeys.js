/* This script by Dustin Hoffman. Caps var changer added by Cameron Little. Scrolling supression added by Ian Fitzpatrick.
*/

$(document).ready(function() {

	var caps = false;

	$(window).keydown(function(e) {
		key = (e.keyCode) ? e.keyCode : e.which;

		$('.key.c' + key).addClass('keydown');
		if (key == 20) {
			caps = (caps) ? false : true;
		}
	  	return false; // Prevent browser scrolling/shortcuts

	});

	$(window).keyup(function(e) {
		if (!stickyKeysEnabled) {
			key = (e.keyCode) ? e.keyCode : e.which;

			$('.key.c' + key).removeClass('keydown');
			if (key == 20) {
				caps = (caps) ? false : true;
			}
		}
	});
});