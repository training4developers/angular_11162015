(function(angular) {

	angular.module("MyApp.Constants", []);
	angular.module("MyApp.Services", ["MyApp.Constants"]);
	angular.module("MyApp.Controllers", ["MyApp.Services"]);
	angular.module("MyApp", [
		"ui.bootstrap",
		"ui.router",
		"MyApp.Controllers",
		"MyApp.Services"]);

})(angular);
