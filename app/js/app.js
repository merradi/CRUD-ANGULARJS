/**
 * Created by Training on 08/02/2016.
 */
'use strict';
angular.module('myApp', [
    'ngMessages',
    'ngRoute',
    'controllers'
])
    .config(['$routeProvider',
        function($routeProvider) {

            // Système de routage
            $routeProvider
                .when('/projects', {
                    templateUrl: 'partials/home.html',
                    controller: 'projectsHomeCtrl'
                })
                .when('/newproject', {
                    templateUrl: 'partials/newproject.html',
                    controller: 'projectNewCtrl'
                })
                .when('/editproject/:id', {
                    templateUrl: 'partials/editproject.html',
                    controller: 'ProjectDetailsCtrl'
                })
                .otherwise({
                    redirectTo: '/projects'
                });
        }
    ]);

