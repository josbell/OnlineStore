app.controller('ordersController', ['$scope','productFactory','customerFactory','orderFactory', function($scope,productFactory,customerFactory,orderFactory){
	


	var index = function(){
		productFactory.index(function(returned_data){
			$scope.products = returned_data;
			$scope.selectedProduct = $scope.products[0];
			customerFactory.index(function(returned_data){
				$scope.customers = returned_data;
				$scope.selectedCustomer = $scope.customers[0];
				orderFactory.index(function(returned_data){
					$scope.orders = returned_data;
				})
			})
		})
	}
	index();
	$scope.create = function(){
		console.log('ordersController input', $scope.selectedCustomer,$scope.selectedProduct, $scope.selectedQty);
		var newOrder = {customer:$scope.selectedCustomer.name, product:$scope.selectedProduct.name, orderQty:$scope.selectedQty}
		orderFactory.create(newOrder, function(returned_data){
			console.log(returned_data);
			$selectedQty = null;
			index();
		})
	}
	$scope.delete = function(id){
		console.log('ordersController input', id);
		orderFactory.delete(id, function(returned_data){
			console.log(returned_data);
			index();
		})
	}

}])