var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports={
	
	index:function(req, res){
		Order.find({}, function(err, orders){
			if(err){console.log(err)};
			res.json(orders);
		})
	},
	create:function(req, res){
		console.log('Orders Server Controller create: input Data',req.body);
		var newOrder = new Order({customer:req.body.customer,product:req.body.product,orderQty:req.body.orderQty });
		newOrder.save(function(err, order){
			if(err){console.log(err)};
			res.json(order)
		})
	},
	delete:function(req, res){
		console.log('Order Server Controller delete: input data', req.params.id);
		Order.remove({_id:req.params.id}, function(err){
			if(err){console.log(err)};
			res.json();
		})
	}
}