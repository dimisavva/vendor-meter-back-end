const router = require('express').Router()
const ratingsCtrl = require('../controllers/ratings.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.put('/', checkAuth, ratingsCtrl.castRating)

module.exports = router
