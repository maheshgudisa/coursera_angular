(function(){
     'use strict';
angular.module('MenuApp',['data'])
.config(function(){
    console.log('In MenuAppConfig');
})
.run(function(){
    console.log('In MenuApp run');
});
})();