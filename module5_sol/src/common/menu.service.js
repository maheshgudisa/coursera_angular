(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath','$q'];
function MenuService($http, ApiPath,$q) {
  var service = this;
  service.short_name="";
    service.name="";
    service.description="";
  service.registerdUser={};
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
    
    
   service.getMenuItemsSelected = function (short_name) {
       var deferred=$q.defer();
       setTimeout(function(){
           $http.get(ApiPath + '/menu_items/'+short_name +'.json')
           .then(function(response){
               service.name=response.data.name;
               service.description=response.data.description;
               //console.log(service.registerdUser);
               deferred.resolve(response.data);
           })
           .catch(function(response){
               deferred.reject("No such menu number exists.");
           });
       },1000);
       return deferred.promise;
   };   
    
    service.storeUser=function(user){
       service.registerdUser={
           firstname:user.firstname,
           lastname:user.lastname,
           email:user.email,
           phone:user.phone,
           menu:user.menu
       }
   }
    service.isRegisterdUser=function(){
        return service.registerdUser.firstname!=null;
    }
    
    service.getUser=function(){
        service.registerdUser.name=service.name;
        service.registerdUser.description=service.description;
        return service.registerdUser;
    }
 
}



})();
