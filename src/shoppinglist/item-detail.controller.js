(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['$stateParams', 'items', 'ItemDetailService'];

function ItemDetailController(items, ItemDetailService) {
  var itemDetail = this;

  console.log(items.itemId);

  var promise = ItemDetailService.getMenuItems(items.itemId);

  promise.then(function (response) {
    
    console.log(response);
    

    
  })
  .catch(function (error) {
    console.log("Something went wrong");
  });
  
}



})();