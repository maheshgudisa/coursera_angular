(function(){
    
 'use strict';    
angular.module('data',['ui.router'])
.config(function(){
    console.log('In data config');
})
.run(function(){
    console.log('In data run');
})
    
})();