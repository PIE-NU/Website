/* Constants */

const navbarId = 'pie-nav';
const navStickyClassName = 'sticky';
const titleId = 'pie-title';
const bodyId = 'pie-body';
const textFlashId = 'text-flashing';

/* Globals */

var scroll = new SmoothScroll('a[href*="#"]', {
	// Options
});
var hasEntered = false;
var hasLoaded = false;
var pieNavbar;
var pieTitle;
var pieBody;

/* Helper Functions */

var flashText = function () {
	var flashingTexts = document.getElementsByClassName(textFlashId);
	setInterval(function() {
		for (var i = 0; i < flashingTexts.length; i++) {
			flashingTexts[i].style.display = (flashingTexts[i].style.display == 'none' ? '' : 'none');
		}
	}, 500);
}

var stickNavbar = function () {
	if (window.scrollY >= pieTitle.offsetHeight) {
		pieNavbar.classList.add(navStickyClassName);
	}
	else {
		pieNavbar.classList.remove(navStickyClassName);
	}
	setBodyMargin();
}

var setBodyMargin = function () {
	pieBody.style.paddingTop = pieNavbar.classList.contains(navStickyClassName) ?
		pieNavbar.clientHeight.toString() + 'px' : '0px';
	document.scrollTop -= pieNavbar.clientHeight;
}

// TODO: Cause scrolling to underline an anchor
var selectAnchor = function (anchor, toggle) {
	var anchor = document.getElementById(anchor);
}

/* Event Handling */

window.addEventListener('load', function() {
	pieTitle = document.getElementById(titleId);
	pieNavbar = document.getElementById(navbarId);
	pieBody = document.getElementById(bodyId);
	flashText();
	hasLoaded = true;
});

window.addEventListener('scroll', function() {
	if (!hasLoaded) return;
	stickNavbar();
});

window.addEventListener('resize', function() {
	if (!hasLoaded) return;
	setBodyMargin();
})

/* Header Scrolling */

$(".scroll").on('click', function() {
	var pieNavHeight = $("#pie-nav").height();
	var scrollToId = $(this).attr("id").split("-")[1];
  $('html,body').animate({ scrollTop: $("#" + scrollToId).offset().top - pieNavHeight},'slow');
});

/* Key Handling */

document.onkeydown = function(ev)
{
	switch (ev.keyCode)
	{
		// a
		case 65:
			if (hasEntered) return;
			scroll.animateScroll(pieNavbar);
			hasEntered = true;
			break;
	}
}