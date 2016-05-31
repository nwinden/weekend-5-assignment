petApp.controller('favoriteController', ['$scope', '$http', function($scope, $http) {


  $scope.sortBy = 'type';

  //gets the animals from the DB and the count
  $scope.getAnimals = function() {
    $http.get('/pets')
      .then(function (response) {

        $scope.animals = response.data;
        $scope.count = response.data.length;

      });
  };

  //delets an animal then does the getAnimals function
  $scope.deleteFavorite = function(id) {
    console.log(id);
    $http.delete('/pets/' + id)
      .then(function (response) {
        $scope.getAnimals();
      });
  }

}]);
