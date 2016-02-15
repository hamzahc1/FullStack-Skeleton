var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
	task: String
});


module.exports = mongoose.model('Item', ItemSchema);
