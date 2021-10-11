const router = require('koa-router')()
const loginCheck = require("../middleware/loginCheck")
const {create, getList, deleteComment, updateComment} = require('../controller/comment')
const {login} = require("../controller/user");

router.prefix('/comment')

// create a comment
router.post('/create', loginCheck, async (ctx, next) => {
    const {content} = ctx.request.body
    const {username} = ctx.session.userInfo

    try {
        const newComment = await create(content, username)
        ctx.response.body = {
            errno: 0,
            data : newComment
        }
    } catch (err) {
        console.error(err)
        ctx.response.body = {
            errno: -1,
            message: 'failed to create a new comment'
        }
    }
})

// get comment list
router.get('/list', loginCheck, async (ctx, next) => {
    let {filterType} = ctx.request.query
    filterType = parseInt(filterType) || 1

    let username = ''
    if (filterType === 2) {
        username = ctx.session.userInfo.username
    }

    const list = await getList(username)

    ctx.response.body = {
        errno: 0,
        data: list
    }
})

// delete a comment
router.post('/del', loginCheck, async (ctx, next) => {
    const {_id: id} = ctx.request.body
    const {username} = ctx.session.userInfo
    try {
        await deleteComment(id, username)
        ctx.response.body = {
            errno: 0
        }
    } catch (err) {
        console.error(err)
        ctx.response.body = {
            errno: -1,
            message: 'failed to delete'
        }
    }
})

// update a comment
router.post('/update', loginCheck, async (ctx, next) => {
    const {_id: id, content} = ctx.request.body
    const {username} = ctx.session.userInfo
    try {
        const newContent = await updateComment(id, username, content)
        ctx.response.body = {
            errno: 0,
            data: newContent
        }
    } catch (err) {
        console.error(err)
        ctx.response.body = {
            errno: -1,
            message: 'failed to update'
        }
    }
})

module.exports = router
