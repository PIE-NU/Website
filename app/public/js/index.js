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
var keys = {37: 1, 38: 1, 39: 1, 40: 1};
var pieNavbar;
var pieTitle;
var pieBody;

/* Helper Functions */

var flashText = function () {
	var flashingTexts = document.getElementsByClassName(textFlashId);
	setInterval(function() {
		for (var i = 0; i < flashingTexts.length; i++) {
			flashingTexts[i].style.display = (flashingTexts[i].style.display == 'none' && !hasEntered ? '' : 'none');
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

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
    onKeyDown(e);
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
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
	disableScroll();
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

$(window).on('beforeunload', function() {
	$(window).scrollTop(0);
});

$(".scroll").on('click', function() {
	var pieNavHeight = $("#pie-nav").height();
	var scrollToId = $(this).attr("id").split("-")[1];
  $('html,body').animate({ scrollTop: $("#" + scrollToId).offset().top - pieNavHeight},'slow');
});

/* Key Handling */

var onKeyDown = function(ev)
{
	switch (ev.keyCode)
	{
		// a
		case 65:
			if (hasEntered) return;
			scroll.animateScroll(pieNavbar);
			hasEntered = true;
			$('#pie-nav ul li').css('opacity', 1);
			enableScroll();
			break;
	}
}