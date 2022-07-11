const ClassSchema = require('./schema-ms')


//Lấy thông tin tất cả lớp học
exports.fetch = async (filter = {}) => {
    const classes = await ClassSchema.find(filter).lean()
    return classes
}

//lấy tên lớp học theo id
exports.getnamebyId = async id => {
    const _class = await ClassSchema.findOne({id:id})
    nameclass = _class.class_name
    console.log(nameclass)
    return nameclass
}

//Them class mơi
exports.creat = async newClass => {
    await newClass.save()
    return newClass
}

//Sửa thông tin class
exports.update = async (id,newname)=> {
    await ClassSchema.findOneAndUpdate({id:id},{class_name : newname}).exec()
    console.log(newname)
}

//Thêm subject vào class
exports.addsubject = async (id_class, id_subject) => {
    const insert_class = await ClassSchema.findOne({id:id_class})
    const list_subject_insert_class = insert_class.subject_list
    list_subject_insert_class.push(id_subject)
    ClassSchema.findOneAndUpdate({id:id_class},{
        subject_list: list_subject_insert_class,
    }).exec()
}

//Get subject
exports.getListSubjectByIdClass = async id_class => {
    const _class = await ClassSchema.findOne({id:id_class})
    const list_id_subject = _class.subject_list
    return list_id_subject
}

//Xóa subject khỏi class
exports.removesubjectbyidclass = async (id_class, id_subject) => {
    const remove_class = await ClassSchema.findOne({id:id_class})
    const list_subject_remove_class = remove_class.subject_list
    const newlistsubject = list_subject_remove_class.filter(item => item != id_subject)
    ClassSchema.findOneAndUpdate({id:id_class},{
        subject_list: newlistsubject,
    }).exec()
}

