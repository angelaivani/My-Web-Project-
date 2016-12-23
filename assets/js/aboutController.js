app.controller('AboutController', function($scope){
	$scope.message = 'Hello from About Controller';
	$scope.foodRequests = [
		{user:'John', userEmail:'John@gmail.com', foodReqName:'Ice Cream', reqMessage:"Ice cream would be a great recipe"},
		{user:'Anna', userEmail:'Anna@gmail.com', foodReqName:'Pempek',  reqMessage:"Please teach us how to make pempek"}		
	];
	
	
	
	$scope.incomplete = false;
	$scope.error = false;
	$scope.txtUserName = '';
	$scope.txtUserEmail = '';
	$scope.txtFoodRecipe = '';
	$scope.txtRequirement = '';
	$scope.errorMessage = '';
	
	$scope.foodReq = {user:'', userEmail:'', foodReqName:'', reqMessage:''};
	
	$scope.addFoodRequests = function() {
		$scope.errorMessage = '';
		
		if (!$scope.txtUserName.length || !$scope.txtFoodRecipe.length || !$scope.txtRequirement.length || !$scope.txtUserEmail.length) {
			$scope.errorMessage = 'Field may not empty';
		}		
		else if(!$scope.txtUserEmail.match('@') || (!$scope.txtUserEmail.match('.com') && !$scope.txtUserEmail.match('.co.id')))
		{
			$scope.errorMessage = 'Email is not valid';
		}
		else if($scope.txtUserEmail.match('@')){
			var indexAfterAddSymbol = $scope.txtUserEmail.indexOf('@')+1;
			if( ($scope.txtUserEmail[indexAfterAddSymbol] == ".") || (!isNaN($scope.txtUserEmail[indexAfterAddSymbol])) ){
				$scope.errorMessage = 'Email is not valid';
			}
		}
		else if(!isNaN($scope.txtFoodRecipe))
		{
			$scope.errorMessage = 'Food Recipe must be string';
		}
		if( $scope.errorMessage == ''){
			$scope.foodReq.user = $scope.txtUserName;
			$scope.foodReq.userEmail = $scope.txtUserEmail;
			$scope.foodReq.foodReqName = $scope.txtFoodRecipe;
			$scope.foodReq.reqMessage = $scope.txtRequirement;
			$scope.foodRequests.push($scope.foodReq);
		}
	};
  
});