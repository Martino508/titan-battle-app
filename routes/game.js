const express = require('express')
const router = express.Router()
const gameController = require('../controllers/game')


router.get('/', gameController.getTitans)
router.put('/userCharacter', gameController.userCharacter)
module.exports = router