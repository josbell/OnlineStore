var mongoose = require('mongoose');
module.exports= function(){
	var orderSchema = new mongoose.Schema({
		customer:{
			type:String,
			required:true
		},
		product:{
			type:String,
			required:true
		},
		orderQty:{
			type:Number,
			required:true,
			min:0
		}
	},{timestamps:true});

	mongoose.model('Order', orderSchema);
	
}