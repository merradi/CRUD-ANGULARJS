/**
 * Created by Training on 09/02/2016.
 */

angular.module('services')
    .service('ProjectServices', function(){

        //Private
        var projects = [
            {id:1, name:"Project 1", user:"pierre1@gmail.com", description:"Ceci est une description de mon projet1", goal:100},
            {id:2, name:"Project 2", user:"pierre2@gmail.com", description: "Ceci est une description de mon projet2", goal:200},
            {id:3, name:"Project 3", user:"pierre3@gmail.com", description: "Ceci est une description de mon projet3", goal:300},
            {id:4, name:"Project 4", user:"pierre4@gmail.com", description: "Ceci est une description de mon projet4", goal:400},
            {id:5, name:"Project 5", user:"pierre5@gmail.com", description: "Ceci est une description de mon projet5", goal:500}
        ];

        function myPrivateMethod(){
            return projects;
        }

        //Publics
        this.getProjects = function() {
            return myPrivateMethod();
        };

        this.getProjectById = function(id) {
            return _.find(projects, function(project) {
                return project.id == id;
            });
        };

        this.updateProject = function(project){
           var p=  this.getProjectById(project.id);
            angular.extend(p,project);
        }

        this.addProject = function(project){
            projects.push(project);
        }

        this.remove = function(id){
            return _.remove(projects, function(project){
                return project.id == id;
            });
        };

    });
