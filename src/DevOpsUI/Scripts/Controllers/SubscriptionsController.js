(function () {
    'use strict';

    angular
        .module('devopsUI')
        .controller('SubscriptionsController', SubscriptionsController);

    SubscriptionsController.$inject = ['$scope', 'DevOpsFactory', 'adalAuthenticationService']; 

    function SubscriptionsController($scope, DevOpsFactory, adalService) {
        $scope.title = 'SubscriptionsController';

        $scope.subscriptions = [];

        DevOpsFactory.getSubscriptions().then(function (subs) {
            console.log(subs);
            $scope.subscriptions = subs;
        });

        activate();

        function activate() { }
    }
})();
