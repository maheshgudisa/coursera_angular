(
angular.module('LunchCheck',[])
.controller('LunchCheckController',["$scope",function ($scope) {
  $scope.lunchMenu="";
  $scope.message="";
  $scope.check= function () {
    if($scope.lunchMenu!=""){
      var items=$scope.lunchMenu.split(',');
      if(items.length<=3){
        $scope.message="Enjoy!";
      }else{
        $scope.message="Too Much!";
      }
    }else{
      $scope.message="Dishes empty..select any";
    }
  }
}])

());
