const StudentModel = require('./model')
const mongoose = require('mongoose')
const StudentSchema = require('./schema-ms')

//Lấy tên tất cả student
exports.getname = async () => {
    const students = await StudentModel.fetch()
    const name_students= []
    for (x of students ) name_students.push(x.student_name)
    return name_students
}

//Them moi student
exports.creat = async (nameNewStudent,birthdayNewStudent) => {
    const students = await StudentModel.fetch()
    let idmax = 0
    for(x of students) {
        if(x.id > idmax) idmax = x.id
    }
    const newStudent = new StudentSchema( {
        _id: mongoose.Types.ObjectId(),
        id: idmax+1,
        student_name:nameNewStudent,
        dateOfBirth:birthdayNewStudent,
    })
    StudentModel.creat(newStudent)
    return newStudent
}

//Sửa thông tin lớp học
exports.update = async (id, newname, newbirth) => {
    StudentModel.update(id, newname, newbirth)
}

//Them class vào classlist
exports.addclass = async (id_student, id_class) => {
    StudentModel.addclass(id_student,id_class)
}

//Xoa class khỏi classlist
exports.deleteclass = async (id_student, id_class) => {
    StudentModel.deleteclass(id_student,id_class)
}

//Lấy tên học sinh hoc trong lớp theo id
exports.getNameStudentbyIdClass = async id_class => {
    const students = await StudentModel.getByIdClass(id_class)
    const name_students= []
    for (x of students ) name_students.push(x.student_name)
    return name_students
}

//Xóa học sinh
exports.delete = async id => {
    await StudentSchema.findOneAndDelete({id:id})
}

