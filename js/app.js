if(!('serviceWorker' in navigator)) {
	console.log('sw not supported');
} else {
	navigator.serviceWorker
		.register('./service-worker.js', { scope: './'})
		.then(function(registration) {
			console.log("SW registered!");
		})
		.catch(function(err) {
			console.log("Service worker failer register", err);
		});	
}