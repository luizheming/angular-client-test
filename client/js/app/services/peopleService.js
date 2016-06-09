'use strict';

app.factory('PeopleService', ['$http', function ($http) {
	
	var urlServer = 'http://localhost:8090/';
	
	return {
		getPeople: function (callback) {
			return $http.get(urlServer + 'rest/people').success(callback);
		}
	};

}]);