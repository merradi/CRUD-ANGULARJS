/**
 * Created by Training on 09/02/2016.
 */
 'use strict';
angular
    .module('controllers')
    .controller('projectsHomeCtrl', function($scope, ProjectServices, $location, $routeParams, $log) {
        //$scope.projects = ProjectServices.getProjects();
        ProjectServices
            .getProjects()
            .then(function(projects){
                //response;
                $log.debug('Projects => ', projects);
                $scope.projects = projects;
            });

        $scope.edit = function (project) {
            $location.path("/editproject/" + project._id);
        };

        $scope.deleteProject = function(project){
            ProjectServices.remove(project);

            ProjectServices
                .getProjects()
                .then(function(projects){
                    //response;
                    $log.debug('Projects => ', projects);
                    $scope.projects = projects;
                });
        };

    })


   .controller('ProjectDetailsCtrl', function($scope, $routeParams, ProjectServices){
    $scope.selected = ProjectServices.getProjectById($routeParams.id);

    });





