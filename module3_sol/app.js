(function(){
  angular.module("NarrowItDownApp",[])
  .controller("NarrowItDownController",NarrowItDownController)
  .service("MenuSearchService",MenuSearchService)
  .directive('foundItems',FoundItems)
  .directive('loopItems',LoopItems);
    
    
  NarrowItDownController.$inject=["MenuSearchService"];
    
  function NarrowItDownController(MenuSearchService){
      var list=this;
      list.searchTerm="";
      list.items=[];
      list.getMatchedItems=function(searchTerm){
         MenuSearchService.getMatchedMenuItems(searchTerm).then(function(data){
             list.items=data;
         });
      }
      list.delete=function(index){
         list.items=MenuSearchService.delete(index);
      }
  }
    
  function LoopItems(){
    var ddo={
        restrict:'E',
        templateUrl:'loopitems.html',
        scope:{
            list:'=myList',
            onRemove:'&'
        }
    }  
      
    return ddo;
  }
    
  function FoundItems(){
      var ddo={
          restrict:'E',
          templateUrl:'listofitems.html',
          scope:{
              list:'=myList',
          }
          
      }
      return ddo;
  }
    
  MenuSearchService.$inject=["$http"];
    
    
  function MenuSearchService($http){
      var search=this;
      var foundItems=[];
      search.getMatchedMenuItems=function(searchTerm){
        return $http({
              method:"GET",
              url:"https://davids-restaurant.herokuapp.com/menu_items.json"})
          .then(
            function(response){
                var results=response.data.menu_items;
                //console.log(searchTerm);   
                foundItems=[];
                for(var i=0;i<results.length;i++){
                    
                    if(results[i].description && results[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1){
                     //   console.log(results[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())+" "+results[i].description);
                      var item={
                            name:results[i].name,
                            short_name:results[i].short_name,
                            description:results[i].description
                        }
                        foundItems.push(item);
                    }
                }
                //console.log(foundItems);
                return foundItems;
            }    
          )
          .catch(function(error){
              console.log(error.message);
          });
      }
      search.delete=function(index){
          foundItems.splice(index,1);
          return foundItems;
      }
  }
  
})();