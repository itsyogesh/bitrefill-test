const HttpStatus = require('http-status-codes')
const router = require('express').Router()

const Order = require('../../models/Order')
const jwt = require('../../config/jwt')

router.get('/', jwt.isAuthenticated, async (req, res, next) => {
  const query = { user: req.user._id }
  try {
    const phones = await Order.find(query).distinct('orderPhone').exec()

    return res.status(HttpStatus.OK).json({
      phone_numbers: phones
    })
  } catch (err) {
    return next(err)
  }
})

module.exports = router
