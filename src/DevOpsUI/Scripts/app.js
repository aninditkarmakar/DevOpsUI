(function () {
    'use strict';

    var app = angular.module('devopsUI', [
        // Angular modules 
        'ngRoute',

        // Custom modules 

        // 3rd Party Modules
        'AdalAngular'
    ]);

    app.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalService) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/login.html',
                controller: 'MainController',
            });

        adalService.init(
                {
                    instance: "https://login.microsoftonline.com/",
                    tenant: "aninditkarmakarlive.onmicrosoft.com",
                    clientId: "7839a7c1-9615-4648-b453-7c54c96bc77f",
                    cacheLocation: 'localStorage',
                    redirectUri: 'http://localhost:57231/index.html'
                },
                $httpProvider
            );
    }]);

})();