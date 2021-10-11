const router = require('koa-router')()
const {register, login} = require('../controller/user')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/users')

// register
router.post('/register', async (ctx, next) => {
    const userInfo = ctx.request.body
    try {
        const newUser = await register(userInfo)
        ctx.response.body = {
            errno: 0,
            data: newUser
        }
    } catch (err) {
        console.error(err)
        ctx.response.body = {
            errno: -1,
            message: 'register failed'
        }
    }
})

// login
router.post('/login', async (ctx, next) => {
    const {username, password} = ctx.request.body
    const res = await login(username, password)
    if (res) {
        ctx.session.userInfo = {
            username
        }
        ctx.response.body = {
            errno: 0
        }
    } else {
        ctx.response.body = {
            errno: -1,
            message: "login failed"
        }
    }
})

// get user info
router.get('/getUserInfo', loginCheck, async (ctx, next) => {
    ctx.response.body = {
        errno: 0,
        data: ctx.session.userInfo
    }
})

module.exports = router
