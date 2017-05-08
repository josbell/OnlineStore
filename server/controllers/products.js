var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports={

	index:function(req, res){
		Product.find({}, function(err, products){
			if(err){console.log('Something went wrong when retrieving products', err)};
			res.json(products);
		})
	},
	create:function(req, res){
		console.log('products Express Controller | create: inputData ', req.body);
		var newProduct = new Product(req.body);
		newProduct.save(function(err, product){
			if(err){console.log('Something went wrong when saving new product')};
			res.json(product);
		})
	},
	delete:function(req, res){
		Product.remove({_id:req.params.id}, function(err){
			if(err){console.log(err)};
			res.json();
		})
	},
	update:function(req, res){
		Product.update({_id:req.params.id},req.body, function(err,product){
			if(err){console.log(err)};
			console.log(product);
			res.json(product);
		})
	}	
}