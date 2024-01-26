const express = require('express')

const router = express.Router()

const orderdetailsControl = require('../controllers/orderController')

router.post('/:userId', orderdetailsControl.create)

module.exports = router