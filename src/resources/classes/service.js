const ClassModel = require('./model')
const mongoose = require('mongoose')
const ClassSchema = require('./schema-ms')
const SubjectSchema = require('../subjects/schema-ms')

//Lấy tên tất cả lớp học
exports.getname = async () => {
    const classes = await ClassModel.fetch()
    const name_classes= []
    for (x of classes) name_classes.push(x.class_name)
    return name_classes
}

//Them moi lop hoc
exports.creat = async nameNewClass => {
    const classes = await ClassModel.fetch()
    let idmax = 0
    for(x of classes) {
        if(x.id > idmax) idmax = x.id
    }
    const newClass = new ClassSchema( {
        _id: mongoose.Types.ObjectId(),
        id: idmax+1,
        class_name:nameNewClass,
    })
    ClassModel.creat(newClass)
    return newClass
}

//Sửa thông tin class
exports.update = async (id, newname) => {
    ClassModel.update(id, newname)
}

//Thêm subject vào class
exports.addsubject = async (id_class, id_subject) => {
    ClassModel.addsubject(id_class, id_subject)
}

//Get subject
exports.getsubject = async id_class => {
    const list_id_subject = await ClassModel.getListSubjectByIdClass(id_class)
    const list_name = []
    for (x of list_id_subject) {
        const _subject = await SubjectSchema.findOne({id:x})
        const _subject_name = _subject.subject_name
        list_name.push(_subject_name)
    }
    return list_name
}

//Xóa môn học được dạy ra khỏi lớp
exports.removeSubjectbyidclass = async(id_class,id_subject) => {
    ClassModel.removeSubjectbyidclass(id_class,id_subject)
}

//Xóa môn học khỏi tất cả các lớp
exports.removesubject = async id_subject => {
    const classes = await ClassModel.fetch()
    for (x of classes) ClassModel.removesubjectbyidclass(x.id,id_subject)
}

//Xóa lơp
exports.delete = async id => {
    ClassSchema.findOneAndDelete({id: id})
}