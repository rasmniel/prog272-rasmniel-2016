(function() {

    var app = angular.module('elfApp', []);

    app.controller('MongoController', function($scope, $http) {


        $scope.insertValidData = function() {
            $http.get('/insertValidCollection').then(function(data) {
                $scope.display = data;
            }, function(err) {
                console.log(err);
            });
        };

        $scope.emptyCollection = function() {
            $http.get('/emptyCollection', {name: 'lincoln'}).then(function(data) {
                $scope.display = data;
            }, function(err) {
                console.log(err);
            });
        };

        $scope.getAll = function() {
            $http.get('/all-data').then(function(data) {
                $scope.allData = JSON.stringify(data, null, 4);
            }, function(err) {
                console.log(err);
            });
        };
    });

})();