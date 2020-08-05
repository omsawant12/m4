(function () {
'use strict';

angular.module('ShoppingList')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('ItemDetailService', ItemDetailService);



ItemDetailService.$inject = ['$http','$q', '$timeout']
function ItemDetailService($http, $q, $timeout) {

  var service = this;

  service.getMenuItems = function (shortName) 
  {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      param:{
        short_name: shortName
      }
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