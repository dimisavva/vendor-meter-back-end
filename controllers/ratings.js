const { Rating } = require('../models')

async function castRating(req, res) {
  try {
    req.body.raterId = req.user.profile.id

    const rating = await Rating.create(req.body)
    res.status(200).json(rating)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  castRating
}