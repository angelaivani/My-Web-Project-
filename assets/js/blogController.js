app.controller('BlogController', function($scope){
	$scope.classyFood = [
		{id:1, clFoodName:'Ice Cream', description:"Lorem ipsum dolor sit amet ipsum dolor sit amet", imagePath:"assets/images/sandwich.PNG" },
		{id:2, clFoodName:'Pempek',  description:"Lorem ipsum dolor sit amet ipsum dolor sit amet", imagePath:"assets/images/pempek.PNG" },
		{id:3, clFoodName:'Le French',  description:"Lorem ipsum dolor sit amet ipsum dolor sit amet", imagePath:"assets/images/leFrench.PNG" },
		{id:4, clFoodName:'Sandwich', description:"Lorem ipsum dolor sit amet ipsum dolor sit amet", imagePath:"assets/images/sandwich.PNG" },
		{id:5, clFoodName:'Cherries', description:"Lorem ipsum dolor sit amet ipsum dolor sit amet", imagePath:"assets/images/cherries.PNG" },
		{id:6, clFoodName:'Steak', description:"Lorem ipsum dolor sit amet ipsum dolor sit amet", imagePath:"assets/images/steak.PNG" },
		{id:7, clFoodName:'Wine', description:"Lorem ipsum dolor sit amet ipsum dolor sit amet", imagePath:"assets/images/wine.PNG" },
		{id:8, clFoodName:'Chardonay', description:"Lorem ipsum dolor sit amet ipsum dolor sit amet", imagePath:"assets/images/wine.PNG" }
	];
	
	$scope.idClFood = 0;
	$scope.edit = true;
	$scope.error = false; 
	$scope.hideform = true; 
	
	$scope.editFood = function(id) {
		$scope.hideform = false;
		if (id == 'new') 
		{
			$scope.edit = true;
			$scope.clFoodName = '';
			$scope.description = '';
		}
		else 
		{
			$scope.edit = false;
			$scope.clFoodName = $scope.classyFood[id-1].clFoodName;
			$scope.description = $scope.classyFood[id-1].description;
			$scope.idClFood = $scope.classyFood[id-1].id;
		}
	};
	
	$scope.saveFood = function(id){
		if(id == 'new')
		{
			
		}
		else{
			var id = $scope.idClFood;
			$scope.classyFood[id-1].clFoodName = $scope.clFoodName;
			$scope.classyFood[id-1].description = $scope.description;
		}
	}
});