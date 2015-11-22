(function(angular) {

	editController.$inject = ["$scope", "widgetResult", '$state', "$stateParams", "Widgets"];

	function editController($scope, widgetResult, $state, $stateParams, Widgets) {

		$scope.widget = widgetResult.data;

		$scope.returnToList = function() {
			$state.go("home");
		};

		$scope.saveWidget = function() {

			var p = $scope.widget._id
				? Widgets.update($scope.widget)
				: Widgets.insert($scope.widget);

			p.then(function() {
				$state.go("home");
			});
		};

		$scope.deleteWidget = function() {
			if (confirm("Are you sure you want to delete the widget?")) {
				Widgets.delete($scope.widget._id).then(function() {
					$state.go("home");
				});
			}
		};

	}

	angular.module("MyApp.Controllers")
		.controller("EditCtrl", editController);

})(angular);
