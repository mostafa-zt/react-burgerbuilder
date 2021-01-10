const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orderItems: [
        {
            item: { type: Object, required: true },
            price: { type: Number, required: false },
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    success: {
        type: Boolean,
        required: true
    },
    deliveryMethod: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema);