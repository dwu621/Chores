const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        {
            userName: 'Parent1',
            password: 'parent1',
            isParent: true,
            isChild: false
        },
        {
            userName: 'Parent2',
            password: 'parent2',
            isParent: true,
            isChild: false
        },
        {
            userName: 'Child1',
            password: 'child1',
            isParent: false,
            isChild: true,
            choresList: [],
            pointsEarned: '0'
        },
        {
            userName: 'Child2',
            password: 'child2',
            isParent: false,
            isChild: true,
            choresList: [],
            pointsEarned: '0'
        }
    ]

    await User.insertMany(users)
    console.log('Created users')
}
const run  = async () => {
    await main()
    db.close
}

run()