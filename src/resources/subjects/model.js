const SubjectSchema = require('./schema-ms')


//Lấy thông tin tất cả subject
exports.fetch = async (filter = {}) => {
    const subject = await SubjectSchema.find(filter).lean()
    return subject
}


//Thêm subject mới
exports.creat = async newSubject => {
    await newSubject.save()
    return newSubject
}

//Sửa thông tin subject
exports.update = async (id,newname)=> {
    await SubjectSchema.findOneAndUpdate({id:id},{subject_name:newname}).exec()
}

//Xóa subject
exports.delete = async id=> {
    await SubjectSchema.findOneAndDelete({id:id}).exec()
}

//lấy tên môn học theo id
exports.getnamebyId = async id => {
    const _subject = await SubjectSchema.findOne({id:id})
    namesubject = _subject.subject_name
    return namesubject
}