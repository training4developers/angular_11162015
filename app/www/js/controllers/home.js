(function(angular) {

	homeController.$inject = ["$scope", "widgetsResult", "$state"];

	function homeController($scope, widgetsResult, $state) {

		$scope.widgets = widgetsResult.data;

		$scope.createWidget = function() {
			$state.go("edit", { widgetId: null });
		}

		$scope.$on("$stateChangeError", function() {
			alert("Error trying to load widget.");
		});
	}

	angular.module("MyApp.Controllers")
		.controller("HomeCtrl", homeController);

})(angular);
