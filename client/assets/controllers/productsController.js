app.controller('productsController', ['$scope','productFactory', function($scope,productFactory){
	$scope.products = [];
	$scope.inputProduct = {};

	var index = function(){
		productFactory.index(function(returned_data){
			$scope.products = returned_data;
		})
	};
	var update = function(){
		productFactory.update($scope.inputProduct, function( returned_data){
			$scope.inputProduct = null;
			index();
		})
	};
	index();
	$scope.create = function(){
		if(!$scope.productForm.$valid) {
       	return;
     	};
     	if($scope.inputProduct.editing){
     		update();
     	}
		var input_data = $scope.inputProduct;
		console.log('productsController new: input_data',input_data);
		productFactory.create($scope.inputProduct, function(returned_data){
			console.log('productsController new: returned_data', returned_data);
			$scope.inputProduct = null;
			index();
		})
	}
	$scope.delete = function(id){
		console.log('productsController delete: input data', id);
		productFactory.delete(id,function(returned_data){
			index();
		})
	}
	$scope.edit = function(product){
		for(var key in product){
			console.log(key);
			$scope.inputProduct[key] = product[key];
			console.log($scope.inputProduct);
		}
		$scope.inputProduct.editing = true;
		console.log($scope.inputProduct);
	}
	return;
	
}])