'use strict';

app.controller('PeopleCtrl', ['$scope', 'PeopleService', function ($scope, PeopleService) {
	$scope.title = 'List of People';
	$scope.active = null;
	$scope.people = [];

	PeopleService.getPeople(function (result) {
		$scope.people = result;
	});

	$scope.viewDetail = function (id) {
		$('li p[data-id]').slideUp().removeClass('active');

		if ($scope.active != id) {
			$('li p[data-id=' + id + ']').slideDown().addClass('active');
			$scope.active = id;
		} else {
			$scope.active = null;
		}
	}
}]);