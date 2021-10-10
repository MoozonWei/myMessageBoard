const mongoose = require('../db/db')

const CommentSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        username: String
    },
    {
        timestamps: true
    }
)

const Comment = mongoose.model('comment', CommentSchema)

module.exports = Comment
