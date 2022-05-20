//Register new user POST
const registerUser = (req, res) => {
    res.json({ message: 'Register User' })
}

//Authenticate new user POST
// Post /api/users/login
const loginUser = (req, res) => {
    res.json({ message: 'Login User' })
}

//GET user data
// Get /api/users/me
const getMe = (req, res) => {
    res.json({ message: 'User data display' })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}