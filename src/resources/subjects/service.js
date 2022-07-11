const SubjectModel = require('./model')
const mongoose = require('mongoose')
const SubjectSchema = require('./schema-ms')

//Lấy tên tất cả subject
exports.getname = async () => {
    const subjects = await SubjectModel.fetch()
    const name_subjects= []
    for (x of subjects ) name_subjects.push(x.subject_name)
    return name_subjects
}

//Them moi subject
exports.creat = async nameNewSubject => {
    const subjects = await SubjectModel.fetch()
    let idmax = 0
    for(x of subjects) {
        if(x.id > idmax) idmax = x.id
    }
    const newSubject = new SubjectSchema( {
        _id: mongoose.Types.ObjectId(),
        id: idmax+1,
        subject_name:nameNewSubject,
    })
    SubjectModel.creat(newSubject)
    return newSubject
}

//Sửa thông tin subject
exports.update = async (id, newname) => {
    SubjectModel.update(id, newname)
}

//Xóa subject
exports.deletesubject = async id => {
    SubjectModel.delete(id)
}