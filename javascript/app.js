// create the module and name it mainApp
// also include ngRoute for all our routing needs
angular.module('goCarApp', ['ngRoute','routingControllers']);
// configure our routes
angular.module('goCarApp').config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/home', {
			templateUrl : 'templates/home.html',
			controller  : 'HomeController'
		})
		// route for the about page
		.when('/rates', {
			templateUrl : 'templates/rates.html',
			controller  : 'RatesController'
		})
		// route for the contact page
		.when('/locations', {
			templateUrl : 'templates/locations.html',
			controller  : 'LocationsController'
		})
		.when('/faqs', {
			templateUrl : 'templates/faqs.html',
			controller  : 'FAQsController'
		})
		.when('/contactus', {
			templateUrl : 'templates/contactus.html',
			controller  : 'ContactUsController'
		})
        .when('/joinnow', {
            templateUrl : 'templates/joinnow.html',
            controller  : 'JoinNowController'
        })
		.when('/login', {
			templateUrl : 'templates/login.html',
			controller  : 'LoginController'
		})
		.otherwise({redirectTo: '/home'}); ;
});

	
	