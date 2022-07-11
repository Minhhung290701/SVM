const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { DefaultDB } = require('../../connections/mongodb')

var studentSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    id: Number,
    student_name: String,
    dateOfBirth: Number,
    classlist: [{
        type: Number,
    }],
})


module.exports = DefaultDB.model('Student', studentSchema, 'students')