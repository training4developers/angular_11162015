(function(angular) {

	viewController.$inject = ["$scope", "widgetResult", "$stateParams", "$state"];

	function viewController($scope, widgetResult, $stateParams, $state) {

		$scope.widget = widgetResult.data;

		$scope.editWidget = function() {
			$state.go("edit", { widgetId: $scope.widget.id });
		};

		$scope.returnToList = function() {
			$state.go("home");
		};

	}

	angular.module("MyApp.Controllers")
		.controller("ViewCtrl", viewController);

})(angular);
