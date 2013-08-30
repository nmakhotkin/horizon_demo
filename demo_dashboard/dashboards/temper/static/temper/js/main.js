'use strict';

/* App Module */
angular.module('main', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/projects/");

    $stateProvider
      .state('projects', {
          url: "/projects",
          templateUrl: "/static/temper/partials/template.html",
          controller: 'ProjectsCtrl'
      })
      .state('projects.list', {
        url: "/:id",
          templateUrl: "/static/temper/partials/subtemplate.html",
          controller: 'TabCtrl'
      })          
      .state('services', {
        url: "/services",
        templateUrl: "/static/temper/partials/template.html",
        controller: 'ServicesCtrl'
      })
      .state('services.list', {
        url: "/:id",
        templateUrl: "/static/temper/partials/subtemplate.html",
        controller: 'TabCtrl'
      })
  }])

angular.module('main')
  .controller('MainCtrl', ['$scope',
    function ($scope) {
      console.log("Main controller initialized");
    }
  ]);
  
angular.module('main')
  .controller('ProjectsCtrl', ['$scope',
    function ($scope) {
      console.log("Projects controller initialized");
      $scope.name = "projects";
    }
  ]);
  
angular.module('main')
  .controller('ServicesCtrl', ['$scope', '$timeout',
    function ($scope, $timeout) {
      console.log("Services controller initialized");
      $timeout(function () {
        $scope.name = "services";
      }, 300);
    }
  ]);

angular.module('main')
  .controller('TabCtrl', ['$scope', '$state', 
    function($scope, $state){
      $scope.select = $state.params.id;
    }
  ]);