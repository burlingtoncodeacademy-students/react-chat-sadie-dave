const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/chatroom", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind("connection error"));



const messageSchema = new mongoose.Schema({

    when: Date,
    user: String,
    room: String,
    body: String,

})

module.exports = messageSchema
