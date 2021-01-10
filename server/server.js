const express = require('express');
const { check, validationResult, body } = require('express-validator');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const path = require('path');

const { checkOrder } = require('./middleware/validator');
const Order = require('./models/order');

const app = express();

mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('client/build'));

app.post('/api/order', checkOrder(), (req, res, next) => {
    const body = req.body;
    const errors = validationResult(req).array();
    if (errors.length > 0) {
        return res.json({
            success: false,
            messages: errors
        });
    }
    const model = {
        fullname: body.fullname,
        street: body.street,
        zipcode: body.zipcode,
        country: body.country,
        email: body.email,
        orderItems: body.orderItems,
        totalPrice: body.totalPrice,
        success: body.success,
        deliveryMethod: body.deliveryMethod
    };
    const order = new Order(model);
    order.save((err, doc) => {
        if (err) res.json({
            success: false,
            message: err.toString()
        })
        res.status(200).json({
            success: true,
            message: 'Your order has been successfully saved.',
            order: doc
        });
    })
})

app.get('/api/orders', (req, res) => {
    Order.find((err, docs) => {
        if (err) res.json({
            success: false,
            message: err.toString()
        });
        res.status(200).json({
            success: true,
            orders: docs
        });
    })
});

app.get('/api/getorder', (req, res) => {
    const orderId = req.query.orderId;
    Order.findById(orderId, (err, order) => {
        if (err) return res.json({ success: false, err })
        return res.json({
            order,
            success: true
        })
    })
});

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 3001;
mongoose.connect(config.DATABASE)
    .then(result => {
        // console.log('database connected...');
        app.listen(port, () => {
            // console.log('server running...');
        })
    })