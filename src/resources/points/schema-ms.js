const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { DefaultDB } = require('../../connections/mongodb')

var pointSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    point:Number,
    _student:{
        type: Number,
    },
    _subject:{
        type:Number,
    },
    _class:{
        type:Number,
    },  
})


module.exports = DefaultDB.model('Point', pointSchema, 'points')