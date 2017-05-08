app.factory('productFactory', ['$http', function($http){
	var products = [],
		factory = {};
	factory.index = function(callback){
		$http.get('/products').then(function(returned_data){
			console.log('productFactory index: returned_data', returned_data);
			callback(returned_data.data);
		})
	}
	factory.create = function(input_data, callback){
		console.log('productFactory create: input_data', input_data);
		$http.post('/products', input_data).then(function(returned_data){
			console.log('productFactory create: returned_data', returned_data);
			callback(returned_data.data);
		})
	}
	factory.delete = function(id,callback){
		console.log('productFactory delete: input data',id);
		$http.delete('/products/'+id).then(function(returned_data){
			console.log(returned_data);
			callback(returned_data);
		})
	}
	factory.update = function(input_data, callback){
		console.log('productFactory update: input_data', input_data);
		$http.put('/products/'+input_data._id, input_data).then(function(returned_data){
			console.log('productFactory update: returned_data', returned_data);
			callback(returned_data.data);
		})
	}
	return factory;
}])