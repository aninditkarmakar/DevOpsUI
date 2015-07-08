(function () {
    'use strict';

    angular.module('devopsUI').factory('DevOpsFactory', DevOpsService);

    DevOpsService.$inject = ['$http', '$q'];

    function DevOpsService($http, $q) {
        var service = {
            getData: getData,
            getSubscriptions: getSubscriptions
        };

        return service;

        function getSubscriptions() {
            var url = "https://management.azure.com/subscriptions?api-version=2014-04-01-preview";
            var deferred = $q.defer();

            $http.get(url)
                .success(function (sub_values) {
                    //console.log(sub_values);
                    deferred.resolve(sub_values.value);
                })
                .error(function (err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function getData() {
            return "Hello World";
        }
    }
})();