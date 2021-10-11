const Comment = require('../model/Comment')

// create a comment
async function create(content, username) {
    return await Comment.create({
        content,
        username
    })
}

// get comment list
async function getList(username = '') {
    const findOpt = {}
    if (username !== '') {
        findOpt.username = username
    }
    return Comment.find(findOpt).sort({_id: -1})
}

// delete a comment
async function deleteComment(id = '', username = '') {
    await Comment.remove({
        _id: id,
        username
    })
}

// update a comment
async function updateComment(id = '', username = '', content = '') {
    return Comment.findOneAndUpdate(
        {
            _id: id,
            username
        },
        {
            content
        },
        {
            new: true
        }
    );
}

module.exports = {
    create,
    getList,
    deleteComment,
    updateComment
}
