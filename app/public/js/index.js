var flashText = function () {
	var flashingTexts = document.getElementsByClassName('text-flashing');
	setInterval(function() {
		for (var i = 0; i < flashingTexts.length; i++) {
			flashingTexts[i].style.display = (flashingTexts[i].style.display == 'none' ? '' : 'none');
		}
	}, 500);
}

var stickNavbar = function () {
	var navbar = document.getElementById('pie-nav');

	if (window.scrollY >= document.getElementById('pie-sky').offsetHeight)
		navbar.classList.add('sticky');
	else
		navbar.classList.remove('sticky');
}

window.addEventListener('load', function() {
	flashText();
}, false);

window.addEventListener('scroll', function() {
	stickNavbar();
});