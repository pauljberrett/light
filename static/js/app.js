var app = angular.module('light', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('About', {
        url: '/about',
        templateUrl: '/templates/aboutme/about.html'
    })
    .state('Home', {
        url: '/',
        templateUrl: '/templates/home/home.html' 
    })
    .state('Projects', {
        url: '/projects',
        templateUrl: '/templates/projects/projects.html' 
    })
    .state('Resume', {
        url: '/resume',
        templateUrl: '/templates/resume/resume.html' 
    });
});