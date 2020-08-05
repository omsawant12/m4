(function () {
'use strict';

angular.module('ShoppingList')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('ShoppingListService', ShoppingListService);



ShoppingListService.$inject = ['$http','$q', '$timeout']
function ShoppingListService($http, $q, $timeout) {

  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });

    return response;
  };
 
  var items = [];


  service.getItems = function () {
    var deferred = $q.defer();

    
    $timeout(function () {
      
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
}
})();