(function(angular) {

	statesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function statesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");
		$locationProvider.html5Mode(true);

		var widgetResolver = {
			"widgetResult": ["Widgets", "$stateParams",
				function(Widgets, $stateParams) {
					if ($stateParams.widgetId) {
						return Widgets.get($stateParams.widgetId);
					} else {
						return {};
					}
				}]
		};

		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "/tpl/home.html",
				controller: "HomeCtrl",
				resolve: {
					"widgetsResult": ["Widgets", function(Widgets) {
						return Widgets.getAll();
					}]
				}
			})
			.state("view", {
				url: "/widget/:widgetId",
				templateUrl: "/tpl/view.html",
				controller: "ViewCtrl",
				resolve: widgetResolver
			})
			.state("edit", {
				url: "/widget/:widgetId/edit",
				templateUrl: "/tpl/edit.html",
				controller: "EditCtrl",
				resolve: widgetResolver
			});

	}

	angular.module("MyApp").config(statesConfig);


})(angular);
