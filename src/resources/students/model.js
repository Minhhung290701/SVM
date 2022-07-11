const StudentSchema = require('./schema-ms')


//Lấy thông tin tất cả student
exports.fetch = async (filter = {}) => {
    const students = await StudentSchema.find(filter).lean()
    return students
}
//Lấy tên học sinh theo id
exports.getnamebyId = async id => {
    const _student = await StudentSchema.findOne({id:id})
    namestudent = _student.student_name
    return namestudent
}


//Them student mơi
exports.creat = async newStudent => {
    await newStudent.save()
    return newStudent
}

//Sửa thông tin student
exports.update = async (id,newname,newbirth)=> {
    await StudentSchema.findOneAndUpdate({id:id},{
        student_name:newname,
        dateOfBirth:newbirth,
    }).exec()
}

//Them class vao classlist
exports.addclass = async (id_student, id_class) => {
    const student_add = await StudentSchema.findOne({id:id_student}).exec()
    const list_class = student_add.classlist
    list_class.push(id_class)
    StudentSchema.findOneAndUpdate({
        id:id_student,
    }, {
        classlist: list_class,
    }).exec()
}

//Xóa class ra khoi classlist
exports.deleteclass = async (id_student, id_class) => {
    const student_delete = await StudentSchema.findOne({id:id_student}).exec()
    const list_class = student_delete.classlist
    const new_list_class = list_class.filter(item => item !=id_class)
    StudentSchema.findOneAndUpdate({id:id_student},{
        classlist: new_list_class,
    }).exec()
}

//Thông tin hoc sinh có hoc trong lớp theo id
exports.getByIdClass = async id_class => {
    const students = await StudentSchema.find({classlist: id_class}).exec()
    return students
}
