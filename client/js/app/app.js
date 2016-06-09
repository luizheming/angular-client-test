'use strict';

var app = angular.module('CinqApplication', ['ngRoute'])

var Router = function ($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: 'views/people.html',
			controller: 'PeopleCtrl'
		})
		.otherwise({ regirectTo: '/' });
}

Router.$inject = ['$routeProvider', '$locationProvider'];

app.config(Router);