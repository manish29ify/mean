const mongoose = require("mongoose")


var ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    image: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
// Compile model from schema
var ProductModel = mongoose.model('Products', ProductSchema);
module.exports = ProductModel