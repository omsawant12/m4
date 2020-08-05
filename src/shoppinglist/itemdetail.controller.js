(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['ItemDetailService', '$stateParams', 'items'];

function ItemDetailController(ItemDetailService, items) 
{
  var itemDetail = this;

  console.log(items.itemId);

  var id = items.itemId; 

  var promise = ItemDetailService.getMenuItems(id);

  itemDetail.newarray = [];

  promise.then(function (response) 
  {
    
     itemDetail.items = response.data;

   

    for (var i = 0; i < itemDetail.items['menu_items'].length; i++) 
    {
      
      if (itemDetail.items['menu_items'][i].short_name.includes(id)) 
      {
        itemDetail.newarray.push(itemDetail.items['menu_items'][i]);

      }
    }

    console.log(itemDetail.newarray);

  })

  .catch(function (error) 
  {
    console.log("Something went wrong.");
  });


}



})();