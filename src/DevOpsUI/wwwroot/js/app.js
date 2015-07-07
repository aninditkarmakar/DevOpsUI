!function() {
    "use strict";
    var app = angular.module("devopsUI", [ "ngRoute", "AdalAngular" ]);
    app.config([ "$routeProvider", "$httpProvider", "adalAuthenticationServiceProvider", function($routeProvider, $httpProvider, adalService) {
        $routeProvider.when("/", {
            templateUrl: "partials/login.html",
            controller: "MainController"
        }), adalService.init({
            instance: "https://login.microsoftonline.com/",
            tenant: "aninditkarmakarlive.onmicrosoft.com",
            clientId: "7839a7c1-9615-4648-b453-7c54c96bc77f",
            cacheLocation: "localStorage",
            redirectUri: "http://localhost:57231/index.html"
        }, $httpProvider);
    } ]);
}(), function() {
    "use strict";
    function DevOpsService($http) {
        function getData() {
            return "Hello World";
        }
        var service = {
            getData: getData
        };
        return service;
    }
    angular.module("devopsUI").factory("DevOpsFactory", DevOpsService), DevOpsService.$inject = [ "$http" ];
}(), function() {
    "use strict";
    function MainController($scope, DevOpsFactory, adalService) {
        $scope.title = DevOpsFactory.getData(), $scope.login = function() {
            adalService.login();
        }, $scope.logout = function() {
            adalService.logOut();
        };
    }
    angular.module("devopsUI").controller("MainController", MainController), MainController.$inject = [ "$scope", "DevOpsFactory", "adalAuthenticationService" ];
}();