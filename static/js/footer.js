var app = angular.module("light");

app.directive('myfoot', function(){
    return {
    restrict: 'E',
    templateUrl: '/templates/elements/footer.html',
    controller: 'mainCtrl'
    };
});