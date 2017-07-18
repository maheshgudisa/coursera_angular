(function(){
     'use strict';
    angular.module('data')
    .controller('CategoriesListController',CategoriesListController);
    
    CategoriesListController.$inject=['categories'];
    function CategoriesListController(categories){
        var mainList=this;
        mainList.categories=categories;
        //console.log(categories[0].name);
    }
    
})();