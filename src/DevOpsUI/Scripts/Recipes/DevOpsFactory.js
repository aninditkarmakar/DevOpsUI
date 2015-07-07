(function () {
    'use strict';

    angular.module('devopsUI').factory('DevOpsFactory', DevOpsService);

    DevOpsService.$inject = ['$http'];

    function DevOpsService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {
            return "Hello World";
        }
    }
})();