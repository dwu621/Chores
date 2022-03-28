const db = require('../db')
const { Chore } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const chores = [
        {
            name: 'Laundry',
            description: 'Do your laundry',
            pointsWorth: '10',
            isComplete: false
        },
        {
            name: 'Garbage',
            description: 'Take out garbage',
            pointsWorth: '10',
            isComplete: false
        },
        {
            name: 'Dishes',
            description: 'Load dishwasher',
            pointsWorth: '10',
            isComplete: false
        },
        {
            name: 'Vacuum',
            description: 'Vacuum the house',
            pointsWorth: '20',
            isComplete: false
        },
        {
            name: 'Clean Room',
            description: 'Clean your room',
            pointsWorth: '10',
            isComplete: false
        },
        
    ]
    
    await Chore.insertMany(chores)
    console.log('Created chores')
}
const run = async () => {
    await main()
    db.close
}

run()