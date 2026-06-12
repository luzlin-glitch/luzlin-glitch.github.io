$(document).ready(function () {
	$('.goodAns, .poorAns').on('click', function() {
		$(this).next('.answer').slideToggle(350);
	});
});