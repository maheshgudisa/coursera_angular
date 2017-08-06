(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject=['MenuService'];
    
function SignUpController(MenuService){
  var $ctrl = this;
  $ctrl.firstname="";
    $ctrl.lastname="";
    $ctrl.email="";
    $ctrl.phone="";
    $ctrl.menu="";
    $ctrl.message1="";
    $ctrl.message2="";
  $ctrl.user={};
  $ctrl.submit=function(){
     $ctrl.user={
         firstname:$ctrl.firstname,
         lastname:$ctrl.lastname,
         email:$ctrl.email,
         phone:$ctrl.phone,
         menu:$ctrl.menu
     };
      //MenuService.setShortNameSelected($ctrl.menu);
      MenuService.getMenuItemsSelected($ctrl.menu).then(function(response){
         console.log(response);
          MenuService.storeUser($ctrl.user);
          $ctrl.message2="";
          $ctrl.message1="Your information has been saved.";
      })
      .catch(function(response){
          $ctrl.message1="";
          $ctrl.message2=response;
          //console.log(response);
      });
  }
}

})();
