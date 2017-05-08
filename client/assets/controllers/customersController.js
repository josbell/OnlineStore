app.controller('customersController',['$scope','customerFactory', function($scope, customerFactory){
	$scope.customers = [];

	var index = function(){
		customerFactory.index(function(returned_data){
			console.log('customersController index: returned_data', returned_data);
			$scope.customers = returned_data;
		})
	};

	var customerNameValidation = function(newName){
		var err ='';
		$scope.customers.forEach(function(customer){
			console.log('inside validation',customer.name, newName);
			if(customer.name==newName){
				err = 'There is already a customer with this name';
			}
		});
		return err;
	}

	index();
	$scope.create = function(){

		$scope.newCustomer.err = customerNameValidation($scope.newCustomer.name)
		if($scope.newCustomer.err){return;}

		console.log('customersController create: input data', $scope.newCustomer);
		customerFactory.create($scope.newCustomer, function(returned_data){
			console.log('customersController create: returned_data', returned_data);
			$scope.newCustomer =null;
			index();
		})
	};
	$scope.delete = function(id){
		customerFactory.delete(id, function(returned_data){
			index();
		})
	};
	$scope.update = function(customer){
		console.log('customerController edit: input data', customer);
		customerFactory.edit(customer, function(returned_data){
			console.log(returned_data);
			customer.editing = false;
			index();
		})
		
	}
}])