(function(){
     'use strict';
    angular.module('data')
    .controller('ItemsDetailController',ItemsDetailController);
    
   ItemsDetailController.$inject=['items'];
    function ItemsDetailController(items){
        var itemDetail=this;
        itemDetail.items=items;
    }
    
})();


