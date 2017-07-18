(function(){
     'use strict';
    angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject=['$q','$http','$timeout'];

function MenuDataService($q,$http,$timeout){
    var service=this;
    
    
    service.getAllCategories=function(){
        return $http({
            method:'GET',
            url:'https://davids-restaurant.herokuapp.com/categories.json'
        }).then(function(result){
            var results=result.data;
            var items=[];
            for(var i=0;i<results.length;i++){
                var item={
                    name:results[i].name,
                    short_name:results[i].short_name
                };
                items.push(item);
            }
            //console.log(items);
            return items;
        }).catch(function(error){
            console.log("Some error occurred while fetching the data");
        });
        
       
    };
    
    service.getItemsForCategory=function(ShortName){
        
        return $http({
            method:'GET',
            url:'https://davids-restaurant.herokuapp.com/menu_items.json',
            params:{
                category:ShortName
            }
        }).then(function(result){
            var results=result.data.menu_items;
            var items=[];
            for(var i=0;i<results.length;i++){
                var item={
                    name:results[i].name,
                    short_name:results[i].short_name,
                    description:results[i].description
                };
                items.push(item);
            }
           // console.log(items);
            return items;
        }).catch(function(error){
            console.log("Some error occurred while fetching the data");
        });
        
    };
    
    
}
})();