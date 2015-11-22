(function(angular) {

	widgetsFactory.$inject = ["$http", "WidgetsAPIBaseURL"];

	function widgetsFactory($http, WidgetsAPIBaseURL) {

		return {
			getAll: function() {
				return $http.get(WidgetsAPIBaseURL);
			},
			get: function(widgetId) {
				return $http.get(WidgetsAPIBaseURL + "/" + encodeURIComponent(widgetId));
			},
			insert: function(widget) {
				return $http.post(WidgetsAPIBaseURL, widget);
			},
			update: function(widget) {
				return $http.put(WidgetsAPIBaseURL + "/" + encodeURIComponent(widget._id), widget);
			},
			delete: function(widgetId) {
				return $http.delete(WidgetsAPIBaseURL + "/" + encodeURIComponent(widgetId));
			}
		};
	}

	angular.module("MyApp.Services")
		.factory("Widgets", widgetsFactory)

})(angular);
