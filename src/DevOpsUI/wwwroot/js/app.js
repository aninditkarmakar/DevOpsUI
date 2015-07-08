!function() {
    "use strict";
    var app = angular.module("devopsUI", [ "ngRoute", "AdalAngular" ]);
    app.config([ "$routeProvider", "$httpProvider", "adalAuthenticationServiceProvider", function($routeProvider, $httpProvider, adalService) {
        $routeProvider.when("/", {
            templateUrl: "partials/login.html",
            controller: "MainController"
        }).when("/subscriptions", {
            templateUrl: "partials/subscriptions.html",
            controller: "SubscriptionsController",
            requireADLogin: !0
        }), adalService.init({
            instance: "https://login.microsoftonline.com/",
            tenant: "aninditkarmakarlive.onmicrosoft.com",
            clientId: "7839a7c1-9615-4648-b453-7c54c96bc77f",
            cacheLocation: "localStorage",
            redirectUri: "http://localhost:57231/index.html",
            loginResource: "https://management.azure.com/"
        }, $httpProvider);
    } ]);
}(), function() {
    "use strict";
    function DevOpsService($http, $q) {
        function getSubscriptions() {
            var url = "https://management.azure.com/subscriptions?api-version=2014-04-01-preview", deferred = $q.defer();
            return $http.get(url).success(function(sub_values) {
                deferred.resolve(sub_values.value);
            }).error(function(err) {
                deferred.reject(err);
            }), deferred.promise;
        }
        function getData() {
            return "Hello World";
        }
        var service = {
            getData: getData,
            getSubscriptions: getSubscriptions
        };
        return service;
    }
    angular.module("devopsUI").factory("DevOpsFactory", DevOpsService), DevOpsService.$inject = [ "$http", "$q" ];
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
}(), function() {
    "use strict";
    function SubscriptionsController($scope, DevOpsFactory, adalService) {
        function activate() {}
        $scope.title = "SubscriptionsController", $scope.subscriptions = [], DevOpsFactory.getSubscriptions().then(function(subs) {
            console.log(subs), $scope.subscriptions = subs;
        }), activate();
    }
    angular.module("devopsUI").controller("SubscriptionsController", SubscriptionsController), 
    SubscriptionsController.$inject = [ "$scope", "DevOpsFactory", "adalAuthenticationService" ];
}();