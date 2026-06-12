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
		width: getPanelWidth()
	}, 350);
}


function getPanelWidth() {
	if ($(window).width() <= 600) {
		return "90vw";
	}
	if ($(window).width() <= 900) {
		return "88vw";
	}
	return "40vw";
}

