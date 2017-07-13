(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];


function ToBuyController(ShoppingListCheckOffService){
    var Tobuy=this;
    Tobuy.items=ShoppingListCheckOffService.getBuyItems();
    Tobuy.bought=function(index){
        ShoppingListCheckOffService.bought(index);
    }
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
    var Alb=this;
    Alb.items=ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
    var service=this;
    var items1=[{name:"Cookies", quantity:10},
              {name:"chocolates",quantity:5},
              {name:"pasta",quantity:3},
              {name:"Maggi",quantity:5},
              {name:"Icecream",quantity:10}];
    
    service.getBuyItems=function(){
        return items1;
    }
    
    var items2=[];
    service.bought=function(index){
        var item={
            name:items1[index].name,
            quantity:items1[index].quantity
        }
        items2.push(item);
        items1.splice(index,1);
    }
    
    service.getBoughtItems=function(){
        return items2;
    }
    
}
})();

/*
(function () {
   'use strict';

   angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckoffService', ShoppingListCheckoffService);

   ToBuyController.$inject = ['ShoppingListCheckoffService'];
   function ToBuyController(ShoppingListCheckoffService){
     var toBuyList = this;

     toBuyList.items = ShoppingListCheckoffService.getToBuyItems();

     toBuyList.buy = function(index) {
        ShoppingListCheckoffService.buyItem(index);
     };

   }

   AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
   function AlreadyBoughtController(ShoppingListCheckoffService){
      var alreadyBoughtList = this;

      alreadyBoughtList.items = ShoppingListCheckoffService.getAlreadyBoughtItems();

   }

   function ShoppingListCheckoffService() {
     var service = this;

     // List of shopping items
     //Initialise to buy List
     var toBuyItems = [
       {
         name: "Cartons of Milk",
         quantity: 2
       },
       {
         name: "Eggs",
         quantity: 12
       },
       {
         name: "Loaves of Bread",
         quantity: 3
       },
       {
         name: "Chocolate Hobnobs",
         quantity: 2
       },
       {
         name: "Tea",
         quantity: 2
       }
     ];

     var alreadyBoughtItems = [];

     service.getToBuyItems = function () {
       return toBuyItems;
     }

     service.getAlreadyBoughtItems = function() {
       return alreadyBoughtItems;
     }

     service.buyItem = function (itemIndex){
       // extract the item values
       var item = {
         name: toBuyItems[itemIndex].name,
         quantity: toBuyItems[itemIndex].quantity
       }
       // add to bought and remove from to buy
       alreadyBoughtItems.push(item);
       toBuyItems.splice(itemIndex, 1);

     };


   }

})();
*/