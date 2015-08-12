var app = angular.module('miniRouting', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'js/home/homeTmpl.html',
		controller: 'homehomeCtrl'
	})
	.when('/settings', {
		templateUrl: 'js/settings/settingsTmpl.html',
		controller: 'settingsCtrl'
	})
	.when('/products/:id', {
		templateUrl: 'js/products/productsTmpl.html',
		controller: 'productsCtrl'
	})
	.otherwise ({
		redirectTo: '/'
	})
})