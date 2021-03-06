const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    products: [
        {
            product: { type: Object, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    total: { type: Number, required: true },
    user: {
        email: { type: String, required: true },
        username: { type: String, required: true },
        userId: { type: Schema.Types.ObjectId, required: true, ref: 'User'}
    },

});

// orderSchema.methods.grandTotal = function() {

// }
module.exports = mongoose.model('Order', orderSchema);
