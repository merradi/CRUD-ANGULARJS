/**
 * Created by Training on 09/02/2016.
 */
'use strict';
angular
    .module('controllers')
    .controller('projectsHomeCtrl', function($scope, ProjectServices, $location, $routeParams) {
        $scope.projects = ProjectServices.getProjects();

        $scope.edit = function (project) {
            $location.path("/editproject/" + project.id);
        };

        $scope.remove = function(project){
            ProjectServices.remove(project.id);
        };

    })


   ;




