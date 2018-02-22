var app = angular.module('myApp', []);


app.controller("MainController",['$scope',function($scope){

   $scope.data = [{ photoPath:"http://nabeel.co.in/files/bootsnipp/gallery/7.jpg",
   firstName:"Ani", lastName :"Karapetyan", email:"karapetyan@gmail.com",
	                   phone:"+374 77855885",salary:"1000$",Actions:"some ection"},
					   { photoPath:"http://nabeel.co.in/files/bootsnipp/gallery/7.jpg",
   firstName:"Ani", lastName :"Karapetyan", email:"karapetyan@gmail.com",
	                   phone:"+374 77855885",salary:"1000$",Actions:"some ection"},
	               ];


	$scope.empoyees = angular.copy( $scope.data);
	 $scope.enabledEdit =[];

    $scope.addEmployee = function(){
	    var emp ={ firstName:"",lastName:"",email:"",
	                   phone:"",salary:"",Actions:"",disableEdit:false};
		$scope.empoyees.push(emp);
		 $scope.enabledEdit[$scope.empoyees.length-1]=true;
	}
	$scope.editEmployee = function(index){
		console.log("edit index"+index);
		$scope.enabledEdit[index] = true;
	}
	$scope.deleteEmployee = function(index) {
		  $scope.empoyees.splice(index,1);
	}
	
	$scope.viewEmployee = function(index){
		$scope.enabledEdit[index] = true;
	}
	
	$scope.submitEmployee = function(){

		console.log("form submitted:"+angular.toJson($scope.empoyees ));
	}
	
}]);
