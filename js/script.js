$(document).ready(function() {

	$('.options-suppress input').click(function (){
		supressKey = '#keyboard .' + $(this).attr('class');
		supressCode = this.value;

		if (this.checked) {
			$(supressKey).removeClass(supressCode)
		} else {
			$(supressKey).addClass(supressCode)
		}
	});

	$('.options button').click(function (){
		$('.key').removeClass('keydown');
	});

});