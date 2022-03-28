const db = require('../db')
const { Reward } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const rewards = [
        {
             name: 'Bicycle',
             description: 'Redeem for new bike',
             pointsRedeem: '1000'
        },
        {
            name: 'Video Game',
            description: 'Redeem for one video game',
            pointsRedeem: '500'
        },
        {
            name: 'Video Game Console',
            description: 'Redeem for Video Game Console',
            pointsRedeem: '30000'
        },
        {
            name: 'Zoo/Musuem',
            description: 'Redeem for a trip to zoo, museum, aquarium',
            pointsRedeem: '10000'
        },
        {
            name: 'Six Flags',
            description: 'Redeem for a trip to Six Flags',
            pointsRedeem: '10000'
        },
        {
            name: 'Disney World',
            description: 'Redeem for trip to Disney World',
            pointsRedeem: '100000'
        }
    ]

    await Reward.insertMany(rewards)
    console.log('Created rewards')
}
const run = async () => {
    await main()
    db.close
}

run()