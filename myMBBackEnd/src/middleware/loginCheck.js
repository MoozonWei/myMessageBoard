async function loginCheck(ctx, next) {
    const session = ctx.session
    if (session && session.userInfo && session.userInfo.username) {
        await next()
        return
    }
    ctx.response.body = {
        errno: -1,
        message: 'pls login'
    }
}

module.exports = loginCheck
