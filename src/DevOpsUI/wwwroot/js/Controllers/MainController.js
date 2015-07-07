(function () {
    'use strict';

    angular.module('devopsUI').controller('MainController', MainController);

    MainController.$inject = ['$scope']; 

    function MainController($scope) {
        $scope.title = 'MainController';

        activate();

        function activate() { }
    }
})();
