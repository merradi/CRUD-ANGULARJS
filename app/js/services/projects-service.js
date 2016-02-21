/**
 * Created by Training on 09/02/2016.
 */

angular.module('services')
    .service('ProjectServices', function($http, $resource, $q){

        var Project = $resource('/api/projects/:projectId',{projectId:'@_id'},{
            update: {
                method: 'PUT' // this method issues a PUT request
            }
        });

        //Publics
        this.getProjects = function() {
            return $http
                .get("/api/projects")
                .then(function(response){
                    if (response.status == 200) {
                        return response.data;
                    }
                    return $q.reject(response);
                });
        };

        this.getProjectById = function(id) {

            return Project.get({projectId:id});
        };

        this.updateProject = function(project){
            project.$update();
        };

        this.addProject = function(project){
            var p = new Project(project);
            p.$save();
            return p;
        };

        this.remove = function(project){
            var p = new Project(project);
            p.$delete();
            return p;
        };

    });
