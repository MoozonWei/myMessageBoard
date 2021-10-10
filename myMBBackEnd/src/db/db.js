const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'comment'

// 开始连接
mongoose.connect(
    `${url}/${dbName}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// 获取连接对象
const conn = mongoose.connection

conn.on('error', err => {
    console.log('mongodb connection error')
})

module.exports = mongoose
