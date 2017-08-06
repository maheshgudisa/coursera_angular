(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject=['MenuService'];
    
function MyInfoController(MenuService){
    var $ctrl=this;
    $ctrl.user={};
    $ctrl.registerd=MenuService.isRegisterdUser();
    if($ctrl.registerd){
        $ctrl.user=MenuService.getUser();
        //console.log($ctrl.user);
    }
}


})();
