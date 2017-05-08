app.factory('orderFactory',['$http', function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get('/orders').then(function(returned_data){
			callback(returned_data.data);
		})
		
	}
	factory.create = function(newOrder, callback){
		console.log('Order Factory create: input data',newOrder);
		$http.post('/orders', newOrder).then(function(returned_data){
			console.log('Order Factory create: returned_data',returned_data);
			callback(returned_data.data);
		})
	}
	factory.delete = function(id, callback){
		console.log('Order Factory delete: input data', id);
		$http.delete('/orders/'+id).then(function(returned_data){
			console.log('Order Factory delete: returned_data', returned_data);
			callback(returned_data.data);
		})
	}
	return factory;
}]);