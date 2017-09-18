var cacheName = 'v1';
var cacheFiles = [
	'./',
	'./index.html',
	./js/app.js'
];

self.addEventListener('install', function(e) {
	console.log("[ServiceWorker] Installed")
})

self.addEventListener('activate', function(e) {
	console.log("[ServiceWorker] Activated")
})

self.addEventListener('fetch', function(e) {
	console.log("[ServiceWorker] Feching", e.request.url);
})