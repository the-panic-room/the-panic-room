(function () {
	var margin = 20;
	window.addEventListener('load', function () {
		var navbar = document.getElementById('nav');
		var breakpoint = (navbar.offsetHeight + margin);
		var body = document.body;
		if (!body.classList.contains('no-fixed')) {
			window.addEventListener('scroll', function (event) {
				if (window.scrollY > breakpoint) {
					body.classList.add('header-fixed');
				} else {
					body.classList.remove('header-fixed');
				}
			});
		}
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