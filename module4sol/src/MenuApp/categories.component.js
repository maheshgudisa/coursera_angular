(function(){
    'use strict';
    
angular.module('data')
.component('categoriesList',{
    templateUrl:'src/MenuApp/templates/listofcategories.template.html',
    bindings:{
        categories:'<'
    }
});


})();