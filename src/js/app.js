include "vendor/jquery-1.11.3.min.js"

$(document).ready(function() {
	$('section').first().attr('data-presentation-start', '');

	var sections = $('section');
	var slide = 0;

	$('footer').attr('data-presentation-slides', sections.length - 1);

	sections.each(function() {
		$(this).attr('data-presentation-slide', slide);

		slide++;
	});

	$('article, li').attr('data-presentation-breakpoint', '');
});

document.onkeydown = checkKey;

function checkKey(e) {
	var updateProgress = function(slide) {
		var progresswrapper = $('footer');
		var progressbar = $('footer div');

		if (slide > 0) {
			progresswrapper.addClass('active');
		}
		else {
			progresswrapper.removeClass('active');
		}

		progressbar.css('width', Math.round((100 / progresswrapper.attr('data-presentation-slides')) * slide) + '%');
	}

	e = e || window.event;

	if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 8 || e.keyCode === 33) {
		var active = $('section[data-presentation-active]');
		var prev = active.prev('section');

		if (prev.length > 0) {
			active.removeAttr('data-presentation-active').attr('data-presentation-transition', 'prev-out');
			prev.attr('data-presentation-active', '').attr('data-presentation-transition', 'prev-in');

			updateProgress(prev.attr('data-presentation-slide'));
		}

		return false;
	}
	else if (e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 13 || e.keyCode === 34) {
		var active = $('section[data-presentation-active]');

		if (active.length === 0) {
			active = $('section[data-presentation-start]');
			active.removeAttr('data-presentation-start');
		}

		var breakpoint = active.find('[data-presentation-breakpoint]');

		if (breakpoint.length > 0) {
			breakpoint.first().attr('data-presentation-breakpoint-active', '').removeAttr('data-presentation-breakpoint').addClass('active');

			return false;
		}

		var next = active.next('section');

		if (next.length > 0) {
			active.removeAttr('data-presentation-active').attr('data-presentation-transition', 'next-out');
			next.attr('data-presentation-active', '').attr('data-presentation-transition', 'next-in');

			updateProgress(next.attr('data-presentation-slide'));
		}

		return false;
	}
	else if (e.keyCode === 36) {
		location.reload();

		return false;
	}
}
