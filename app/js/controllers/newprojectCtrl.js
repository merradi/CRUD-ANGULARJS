/**
 * Created by Training on 09/02/2016.
 */
'use strict';
angular
    .module('controllers')
    .controller('projectNewCtrl', function($scope, $routeParams, $log, ProjectServices, $location) {
        /**$scope.message = "Laissez-nous un message sur la page de contact !";
        $scope.msg = "Bonne chance pour cette nouvelle appli !";


        $log.debug('routeParams', $routeParams);*/
        $scope.addProject = function(project){
            ProjectServices.addProject(project);
            $location.path("/projects/");
        }
    });

