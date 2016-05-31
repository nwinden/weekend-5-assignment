petApp.controller('animalController', ['$scope', '$http', function($scope, $http) {

  var key = '541df19c7e26e11e280a693fb8908604';
  var baseURL = 'http://api.petfinder.com/';
  var pet = {};

  $scope.petSelect = 'dog';

  //provides the count for the number of favorites
  $scope.getFavoriteCount= function() {
    $http.get('/pets')
      .then(function (response) {

        $scope.count = response.data.length;

      });
  };

  //adds current animal to the favorites
  $scope.addToFavorites = function(randomPet) {

    pet.id = randomPet.id.$t;
    pet.name = randomPet.name.$t;
    pet.description = randomPet.description.$t ? randomPet.description.$t.substring(0,100) + '...' : 'No description provided';
    pet.imageSrc = randomPet.media.photos != undefined ? randomPet.media.photos.photo[3].$t : 'http://i.imgur.com/uASx13d.gif';
    pet.type = randomPet.animal.$t;

    $http.post('/pets', pet)
      .then(function () {
        alert('You Favorited ' + pet.name + '! AWESOME!');
        $scope.getFavoriteCount();
        $scope.getRandomPet();
      });
  };

  //queries the API and returns another random pet
  $scope.getRandomPet = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=' + $scope.petSelect;
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(
      function(response) {
        $scope.animal = response.data.petfinder.pet;
        console.log(response.data);
      }
    )
  }

}]);
