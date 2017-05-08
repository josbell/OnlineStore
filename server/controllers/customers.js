var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports= {
	index:function(req, res){
		Customer.find({}, function(err,customers){
			if(err){console.log(err)};
			console.log('Customer Server Controller index: returned data', customers);
			res.json(customers);
		})
		
	},
	create:function(req, res){
		console.log('Customer Controller create: input data', req.body);
		var newCustomer = new Customer(req.body);
		newCustomer.save(function(err, customer){
			if(err){console.log(err)};
			console.log('Customer Server Controller create: returned data', customer);
			res.json(customer);
		})
	},
	update:function(req, res){
		console.log('Customer Controller update: input data', req.body);
		Customer.update({_id:req.body._id},{name:req.body.name}, function(err,customer){
			if(err){console.log(err)};
			res.json(customer);
		})
		
	},
	delete:function(req, res){
		console.log('Delete input data', req.params.id);
		Customer.remove({_id:req.params.id}, function(err){
			if(err){console.log(err)};
			res.json();
		})
		
	}
}