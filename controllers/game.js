const Titan = require('../models/titanStats')

module.exports = {
    getTitans: async (req,res) => {
        try{
            const chars = await Titan.find()
            // console.log(chars)
            res.render('index.ejs',{titanChar: chars})
        }catch(err){
            console.log(err)
        }
    },
    userCharacter: async (req, res)=> {
        try {
            await Titan.findOneAndUpdate({_id: req.body.titanID}, {
                userSelect: true
            })
            console.log('User Titan Selected')
            res.json('User Titan Selected')
        } catch (err) {
            console.log(err)
        }
    }
}