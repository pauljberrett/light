var app = angular.module("light");

app.directive('navbar', function(){
    return {
    restrict: 'E',
    templateUrl: '/templates/elements/navbar.html',
    controller: 'mainCtrl'
    };
});