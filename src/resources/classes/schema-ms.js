const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { DefaultDB } = require('../../connections/mongodb')

const classSchema = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        id: Number,
        class_name:String,
        subject_list: [{
            type:Number,
        }],
    },
)

module.exports = DefaultDB.model('Class', classSchema, 'classes')
