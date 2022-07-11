const PointModel = require('./model')
const mongoose = require('mongoose')
const PointSchema = require('./schema-ms')

//Them moi point
exports.create = async (point,id_class,id_student,id_subject) => {
    const points = await PointModel.fetch()
    let idmax = 0
    for(x of points) {
        if(x.id > idmax) idmax = x.id
    }
    const newPoint = new PointSchema( {
        _id: mongoose.Types.ObjectId(),
        id: idmax+1,
        point:point,
        _student:id_student,
        _subject:id_subject,
        _class:id_class,
    })
    console.log(newPoint)
    await newPoint.save()
    return newPoint
}

//Sửa Point
exports.fixpoint = async(point,id_class, id_student,id_subject) => {
    PointSchema.findOneAndUpdate({
        _student: id_student,
        _subject:id_subject,
        _class:id_class,
    }, {
        point:point,
    }).exec()
}


//Xóa Point
exports.deletepoint = async (id_class, id_student,id_subject) => {
    PointSchema.findOneAndDelete({
        _student: id_student,
        _subject:id_subject,
        _class:id_class,
    }).exec()
}

//Xóa Point theo id_subject
exports.deletepointbyIdSubject = async id_subject => {
    PointSchema.findOneAndDelete({_subject:id_subject}).exec()
}

//Xóa Point theo id_class
exports.deletepointbyIdClass = async id_class => {
    await PointSchema.findOneAndDelete({_class:id_class}).exec()
}

//Get Point theo id_subject
exports.getpointbyIdSubject = async id_subject => {
    var points = await PointSchema.find({_subject: id_subject}).exec()
    return points
} 

//Get Point theo id_subject
exports.getpointbyIdStudent = async id_student => {
    var points = await PointSchema.find({_student: id_student}).exec()
    return points
} 

//Get Point có điểm lớn hơn hoặc bằng 5
exports.getpointgtefive = async () => {
    var points = await PointSchema.find({point: {$gte:5}}).exec()
    return points
}

//Xóa Point theo id_class và í_subject
exports.deletepointbyIdClass_Subject = async (id_class, id_subject) => {
    await PointSchema.findOneAndDelete({
        _class:id_class,
        _subject:id_subject,
    }).exec()
}