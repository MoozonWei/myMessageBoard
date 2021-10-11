const User = require('../model/User')

async function register(userInfo = {}) {
    const newUser = await User.create(userInfo)
    return newUser
}

async function login(username = "", password = "") {
    const user = await User.findOne({ username, password })
    return user != null;

}

module.exports = {
    register,
    login
}
