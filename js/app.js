var app = angular.module('miniRouting', ['ngRoute']);

app.config(function($routeProvider){
	.when('/', {
		templateUrl: 'js/home/homeTmple.html',
		controller: 'js/home/homeCtrl.js'
	})
	.when('/settings', {
		templateUrl: 'js/settings/settingsTmpl.html',
		controller: 'js/settings/settingsCtrl.js'
	})
	.when('/products/:id', {
		templateUrl: 'js/products/productsTmpl.html',
		controller: 'js/products/productsCtrl.js'
	})
})