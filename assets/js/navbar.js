(function () {
	var margin = 20;
	window.addEventListener('load', function () {
		var navbar = document.getElementById('nav');
		var breakpoint = (navbar.offsetHeight + margin);
		window.addEventListener('scroll', function (event) {
			if (window.scrollY > breakpoint) {
				document.body.classList.add('header-fixed');
			} else {
				document.body.classList.remove('header-fixed');
			}
		});
		var cookieIsAccept = sessionStorage.getItem('cookie-consent-accept');
		if (!cookieIsAccept) {
			$('#cookie-consent').collapse('show');
		}
		$('#accept').on('click', function () {
			sessionStorage.setItem('cookie-consent-accept', true);
			$('#cookie-consent').collapse('hide');
		});
	});
})();