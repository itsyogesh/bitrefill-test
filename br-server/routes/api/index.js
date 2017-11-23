const router = require('express').Router()

router.use('/', require('./auth'))
router.use('/', require('./users'))
router.use('/subscriptions', require('./subscriptions'))
router.use('/orders', require('./orders'))
router.use('/phone-numbers', require('./phones'))

module.exports = router
