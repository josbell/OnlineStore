var mongoose = require('mongoose');
module.exports= function(){
	
	var productSchema = new mongoose.Schema({
		name:{
			type:String,
			required: true,
			lowercase:true
		},
		qty:{
			type:Number,
			required:true,
			min:1
		},
		imgUrl:{
			type:String,
			default: 'http://www.pioneergardens.com/wp-content/uploads/2012/09/NO-IMAGE-AVAILABLE-ICON-web1.jpg'
		},
		description:String

	},{timestamps:true}, {minimize:false});

	mongoose.model('Product', productSchema);
}