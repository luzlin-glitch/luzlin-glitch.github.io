$(document).ready(function () {
	$('.point').on('click', function() {
		showExplanation($(this).children('span').text());
	});

	$('.close').on('click', function() {
		$('#panelText').text('');
		$('body > div.panel').animate({
			width: 0
		}, 350);
	});
});

function showExplanation(exp) {
	$('#panelText').text(exp);
	$('body > div.panel').animate({
		width: "40vw"
	}, 350);
}
