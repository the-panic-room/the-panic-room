(function () {
	var margin = 20;
	window.addEventListener('load', function () {
		var navbar = document.getElementById('nav');
		var breakpoint = (navbar.offsetHeight + margin);
		window.addEventListener('scroll', function (event) {
			console.log(window.scrollY, breakpoint);
			if (window.scrollY > breakpoint) {
				document.body.classList.add('header-fixed');
			} else {
				document.body.classList.remove('header-fixed');
			}
		});
	});
})();