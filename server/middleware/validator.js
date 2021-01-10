const { check, validationResult, body } = require('express-validator');

const checkOrder = () => [
    body("fullname", "Your name is required!").notEmpty().isLength({ min: 4, max: 100 }).withMessage("Min length is 4 and max length is 100 character!").trim(),
    body("street","Street is required (max length is 250 character)").notEmpty().isLength({max:250}).trim(),
    body("zipcode","Zipcode is required (max length is 10 character)").isLength({max:10}).notEmpty().trim(),
    body("country","Country is required (max length is 250 character)").notEmpty().isLength({max:250}).trim(),
    body("deliveryMethod", "Delivery Method is required!").notEmpty(),
    body("email","Email format is not correct!").isEmail().trim()
]

module.exports = { checkOrder }