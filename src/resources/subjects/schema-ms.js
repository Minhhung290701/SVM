const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { DefaultDB } = require('../../connections/mongodb')

var subjectSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    id:Number,
    subject_name: String,
})

module.exports = DefaultDB.model('Subject', subjectSchema, 'subjects')