var mongoose = require('mongoose');
module.exports= function(){
	var customerSchema = new mongoose.Schema({
		name:{
			type:String,
			required:true
		}
	},{timestamps:true})

	mongoose.model('Customer', customerSchema);
}