(function () {
    'use strict';

    angular.module('devopsUI').controller('MainController', MainController);

    MainController.$inject = ['$scope', 'DevOpsFactory', 'adalAuthenticationService']; 

    function MainController($scope, DevOpsFactory, adalService) {
        $scope.title = DevOpsFactory.getData();

        $scope.login = function () {
            adalService.login();
        }

        $scope.logout = function () {
            adalService.logOut();
        }
    }
})();
