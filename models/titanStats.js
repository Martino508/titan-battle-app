const mongoose = require('mongoose')

const titanStatsSchema = new mongoose.Schema({
    titan: {
        type: String,
        required: true,
    },
    wins: {
        type: Number,
        required: true,
    },
    losses: {
        type: Number,
        required: true,
    },
    character: {
        type: String,
        required: true,
    },
    specialAbility: {
        type: String,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    userSelect: {
        type: Boolean,
        required: false,
    },
    oppSelect: {
        type: Boolean,
        required: false,
    }
})
mongoose.pluralize(null)
/*module.exports = mongoose.model('titanInfo', titanStatsSchema, 'titanInfo')*/
module.exports = mongoose.model('Eldian', titanStatsSchema)
