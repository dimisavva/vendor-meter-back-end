const { Rating, Profile } = require('../models')

async function castRating(req, res) {
  try {
    req.body.raterId = req.user.profile.id

    const prevRating = await Rating.findOne({
      where: {
        raterId: req.body.raterId,
        profileId: req.body.profileId
      }
    })
  
    if (prevRating) {
      prevRating.value = req.body.value
      await prevRating.save()
    }else {
      await Rating.create(req.body)
    }

    const profile = await Profile.findByPk(
      req.body.profileId,
      { include: [{ model: Rating, as: 'ratingsReceived' }]}
    )

    res.status(200).json(profile)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  castRating
}