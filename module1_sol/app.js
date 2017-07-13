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
        $scope.style={"color":"green","border-color":"green"};
      }else{
        $scope.message="Too Much!";
        $scope.style={"color":"red","border-color":"green"};
      }
    }else{
      $scope.message="Dishes empty..select any";
      $scope.style={"border-color":"red"};
    }
  }
}])

());
