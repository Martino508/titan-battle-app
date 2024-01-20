const mongoose = require('mongoose')
const connectDB = require('./config/database')
const Titan = require('./models/titanStats')

require('dotenv').config({path: './config/.env'})

connectDB()



const titanSeeds = [
    {
        titan: 'Atack Titan',
        character: 'Eren',
        specialAbility: 'See the future',
        height: 15,
        wins: 0,
        losses: 0,
        image: 'https://assets-prd.ignimgs.com/2023/11/17/image-2-1700185462558.png'
    },
    {
        titan: 'Armored Titan',
        character: 'Reiner',
        specialAbility: 'Skin Hardening',
        height: 15,
        wins: 0,
        losses: 0,
        image: 'https://www.stgcollection.com/cdn/shop/files/823ARMOREDTITANArtbyCeasarIanMuyuela.webp?v=1693901075'
    },
    {
        titan: 'Beast Titan',
        character: 'Zeke',
        specialAbility: 'Titan Creation',
        height: 17,
        wins: 0,
        losses: 0,
        image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ed281412-ed6f-4aea-94bb-3808987bdbf2/width=450/Beast%20Titan%20Sitting.jpeg'
    },
    {
        titan: 'Colossal Titan',
        character: 'Armin',
        specialAbility: 'See the future',
        height: 15,
        wins: 0,
        losses: 0,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f35f78c-61fa-4cc8-99a4-3a89755afad2/decav0z-bcccecee-3d07-4cb5-9076-7f55fd13ab54.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmMzVmNzhjLTYxZmEtNGNjOC05OWE0LTNhODk3NTVhZmFkMlwvZGVjYXYwei1iY2NjZWNlZS0zZDA3LTRjYjUtOTA3Ni03ZjU1ZmQxM2FiNTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HkV2ry4s35hsucOoKUD-8vV2b1RJcvlYTi3oMZ7M8yk'
    },
    {
        titan: 'Female Titan',
        character: 'Annie',
        specialAbility: 'All-Around Capablities',
        height: 14,
        wins: 0,
        losses: 0,
        image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a6efc368-8306-4e17-85b5-02baef8928f2/width=1200/a6efc368-8306-4e17-85b5-02baef8928f2.jpeg'
    },
    {
        titan: 'Jaw Titan',
        character: 'Falco',
        specialAbility: 'Flying',
        height: 5,
        wins: 0,
        losses: 0,
        image: 'https://sportshub.cbsistatic.com/i/2022/03/21/9f5964ba-a65a-4bb5-94ae-9d8666bc5be9/attack-on-titan-season-4-new-jaw-titan-falco-anime.jpg'
    },
    {
        titan: 'Cart Titan',
        character: 'Pieck',
        specialAbility: 'Stamina and Endurance',
        height: 4,
        wins: 0,
        losses: 0,
        image: 'https://miro.medium.com/v2/resize:fit:1400/1*N2xE51RQh1y9DOGsVqFGtw.jpeg'
    },
    {
        titan: 'Founding Titan',
        character: 'Eren',
        specialAbility: 'The Rumbling',
        height: 500,
        wins: 0,
        losses: 0,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c0c68ca-4310-4d9b-872f-a2e4cc1b976d/dfr8gaz-5f26cb83-542e-4866-8b67-c8cae32f4597.png/v1/fill/w_1280,h_1697,q_80,strp/eren_founding_titan_by_vvenkov_dfr8gaz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY5NyIsInBhdGgiOiJcL2ZcLzhjMGM2OGNhLTQzMTAtNGQ5Yi04NzJmLWEyZTRjYzFiOTc2ZFwvZGZyOGdhei01ZjI2Y2I4My01NDJlLTQ4NjYtOGI2Ny1jOGNhZTMyZjQ1OTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.va7uRwCHy5aJ_Tmm4_yX3-qWx46fEnKJCqEcrYiHSss'
    },
    {
        titan: 'War Hammer Titan',
        character: 'Lara Tybur',
        specialAbility: 'Weapon Creation',
        height: 15,
        wins: 0,
        losses: 0,
        image: 'https://qph.cf2.quoracdn.net/main-qimg-d5e203985e4a89e127d34e094076a519-lq'
    },

]
const seedDB = async () => {
    await Titan.deleteMany({})
    await Titan.insertMany(titanSeeds)
}

seedDB().then(() => {
    mongoose.connection.close()
})