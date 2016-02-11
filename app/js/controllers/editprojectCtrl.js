/**
 * Created by Training on 09/02/2016.
 */
'use strict';
angular
    .module('controllers')
    .controller('ProjectDetailsCtrl', function($scope, $routeParams, $log , ProjectServices, $location) {
        /**$scope.message = "Laissez-nous un message sur la page de contact !";
        $scope.msg = "Bonne chance pour cette nouvelle appli !";


        $log.debug('routeParams', $routeParams);*/
        $scope.selected = ProjectServices.getProjectById($routeParams.id);

        $scope.editProject = function(project){
            ProjectServices.updateProject(project);
            $location.path("/projects/");
        }
    });


