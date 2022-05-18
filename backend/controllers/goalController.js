const asyncHandler = require('express-async-handler')
const getGoals = async(req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

const setGoals = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set goals' })
})

const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` })
})

const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete  goals ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}