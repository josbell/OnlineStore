app.factory('customerFactory',['$http', function($http){
	var customers = [],
		factory = {};


	factory.index = function(callback) {
		$http.get('/customers').then(function(returned_data){
			console.log('customerFactory index: returned_data', returned_data);
			callback(returned_data.data);
		})
	};
	factory.create = function(newCustomer, callback){
		console.log('customerFactory create: inputData', newCustomer);
		$http.post('/customers', newCustomer).then(function(returned_data){
			console.log('customerFactory create: returned_data', returned_data);
			callback(returned_data.data);
		});
	};
	factory.delete = function(id,callback){
		console.log('customerFactory delete: inputData', id);
		$http.delete('/customers/'+id).then(function(returned_data){
			console.log('customerFactory delete: returned_data', returned_data);
			callback(returned_data.data);
		});
	}
	factory.edit = function(customer, callback){
		console.log(customer);
		$http.put('/customer/'+customer._id, customer),then(function(returned_data){
			console.log(returned_data);
			callback(returned_data.data);
		});
	}
	return factory;
}])