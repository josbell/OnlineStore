app.controller('dashboardController', ['$scope','productFactory','orderFactory', 'customerFactory', function($scope, productFactory, orderFactory, customerFactory){
	$scope.products = [];
	$scope.orders = [];
	$scope.customers = [];
	$scope.productsLimit = 4;
	$scope.ordersLimit = 4;
	
	
	var index = function(){

		productFactory.index(function(product_data){
			$scope.products = product_data;
			console.log('Dashboard: products', product_data);
			orderFactory.index(function(order_data){
				$scope.orders = order_data;
				console.log('Dashboard: orders', order_data);
					customerFactory.index(function(customer_data){
						console.log('Dashboard: customers', customer_data);
						$scope.customers = customer_data;
					})
			})
		})
	}
	index();
}])