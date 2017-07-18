(function(){
    
     'use strict';
angular.module('data')
.component('itemsList',{
    templateUrl:'src/MenuApp/templates/itemsindetail.template.html',
    bindings:{
        items:'<'
    }
});


})();