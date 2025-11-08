const express = require("express");
const { createOrders } = require("../controllers/orderController");
const router = express.Router();

router.route('/order').post(createOrders);

module.exports = router;