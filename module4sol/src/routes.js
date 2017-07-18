(function(){
     'use strict';
angular.module('data')
.config(routesConfig);

routesConfig.$inject=['$stateProvider','$urlRouterProvider'];

function routesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'src/MenuApp/templates/home.template.html',
            
        })
    
        .state('Categories',{
            url:'/categories',
            templateUrl:'src/MenuApp/templates/category-list.template.html',
            controller:'CategoriesListController as mainList',
            resolve:{
                categories:['MenuDataService',function(MenuDataService){
                    return MenuDataService.getAllCategories().then(function(result){
                       // console.log(result);
                        return result;
                    });
                }]
            }
        })
    
        .state('Items',{
            url:'/{shortName}',
            templateUrl:'src/MenuApp/templates/item-detail.template.html',
            controller:'ItemsDetailController as itemDetail',
            resolve:{
                items:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.shortName).then(function(result){
                        return result;
                    });
                }]
            }
        });
}
    
})();