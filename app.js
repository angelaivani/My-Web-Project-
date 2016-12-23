var app = angular.module('myApp',['ngRoute']);

//route

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'pages/home.html',
		controller: 'HomeController'
	})
	
	.when('/blog',{
		templateUrl: 'pages/blog.html',
		controller: 'BlogController'
	})
	
	.when('/about',{
		templateUrl: 'pages/about.html',
		controller: 'AboutController'
	})
	
	.otherwise({redirectTo: '/'});
});

app.controller('AboutController', function($scope){
	$scope.message = 'Hello from About Controller'
});


