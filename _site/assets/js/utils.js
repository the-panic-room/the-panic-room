(function (global) {
	/**
	* @function WebpIsSupported
	* @description comprueba si imagenes webp esta soportado.
	*/
	function WebpIsSupported() {
		if(!("createImageBitmap" in global)){
	        return Promise.resolve(false);
	    }
	    var webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
	    return fetch(webpData)
	    	.then(function (response) {
	    		return response.blob();
	    	})
	    	.then(function (file) {
	    		return global.createImageBitmap(file);
	    	})
	    	.then(function () {
	    		return true;
	    	},
	    	function () {
	    		return false;
	    	});
	}

	function navbarInit() {
		var body = document.body;
		if (body.classList.contains('no-fixed')) {
			return;
		}
		var margin = 20;
		var navbar = document.getElementById('nav');
		var breakpoint = (navbar.offsetHeight + margin);
		window.addEventListener('scroll', function (event) {
			if (window.scrollY > breakpoint) {
				body.classList.add('header-fixed');
			} else {
				body.classList.remove('header-fixed');
			}
		});
	}

	function cookieInit() {
		var cookieIsAccept = sessionStorage.getItem('cookie-consent-accept');
		if (!cookieIsAccept) {
			$('#cookie-consent').collapse('show');
		}
		$('#accept').on('click', function () {
			sessionStorage.setItem('cookie-consent-accept', true);
			$('#cookie-consent').collapse('hide');
		});
	}
	global.addEventListener('load', function () {
		WebpIsSupported()
			.then(function (result) {
				console.log(result);
				if(result) {
					return;
				}
				document.querySelectorAll('img[data-webp]')
					.forEach(function (element) {
						element.src = element.dataset.webp;
					});
			});
		cookieInit();
		navbarInit();
	});
})(window);