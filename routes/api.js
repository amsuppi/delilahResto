const router = require('express').Router();

const midelware = require('../midelware');
const apiProducts = require('./api/products');
const apiUsers = require('./api/users');
const apiOrders = require('./api/orders');

router.use('/products', apiProducts);
router.use('/users', midelware.validateToken, apiUsers);
router.use('/orders', apiOrders);


module.exports = router;  