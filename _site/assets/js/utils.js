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

	WebpIsSupported().then(function (result) {
		console.log(result);
		if(result) {
			return;
		}
		document.querySelectorAll('img[data-webp]')
			.forEach(function (element) {
				element.src = element.dataset.webp;
			});
	});
})(window);