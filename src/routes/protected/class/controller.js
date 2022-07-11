const { Class, Student, Subject, Point } = require('../../../resources')


/**
 * Lay danh sach ten class
 */
exports.getname = async ctx => {
    const nameclasses = await Class.Service.getname()
    ctx.body = nameclasses
}

//Tạo mới class
exports.creatclass = async ctx => {
    const nameNewClass = ctx.header.nameclass
    ctx.body = await Class.Service.creat(nameNewClass)
}

//Sửa thông tin class
exports.updateclass = async ctx => {
    const {id} = ctx.params
    const newname = ctx.header.newname
    console.log(newname)
    console.log(id)
    Class.Service.update(id,newname)
    ctx.body = 'Update class done'
}

//Thêm học sinh vào lớp
exports.addStudent = async ctx => {
    const {id_class} = ctx.header
    const {id_student} = ctx.header
    Student.Service.addclass(id_student,id_class)
    ctx.body = 'Add student done'
}

//Xoa hoc sinh ra khoi lop
exports.deleteStudent = async ctx => {
    const {id_class} = ctx.header
    const {id_student} = ctx.header
    Student.Service.deleteclass(id_student,id_class)
    ctx.body = 'Delete student done'
}

//Xem hoc sinh trong lop
exports.getstudent = async ctx => {
    const id_class = ctx.params.id 
    ctx.body = await  Student.Service.getNameStudentbyIdClass(id_class)
}

//Them subject vào lớp
exports.addsubject = async ctx => {
    const {id_class} = ctx.header
    const {id_subject} = ctx.header
    Class.Service.addsubject(id_class, id_subject)
    ctx.body = 'Add subject done'
}

//Xem môn học được dạy trong lớp
exports.getsubject = async ctx => {
    const id_class = ctx.params.id
    ctx.body = await Class.Service.getsubject(id_class)
}

//Xóa lớp
exports.deleteclass = async ctx => {
    const {id} = ctx.params
    Class.Service.delete(id)
    Point.Service.deletepointbyIdClass(id)
    const students = await Student.Model.getByIdClass(id)
    for (x of students) await Student.Model.deleteclass(x.id,id) 
    ctx.body = 'Delete class done'
}

//Xóa môn học được dạy trong lớp
exports.deletesubject = async ctx => {
    const id_class = ctx.header.id_class
    const id_subject = ctx.header.id_subject
    await Point.Service.deletepointbyIdClass_Subject(id_class,id_subject)
    await Class.Service.removeSubjectbyidclass(id_class, id_subject)
    ctx.body = 'Remove Subject done'
}


//Xem điểm của học sinh trong lớp
exports.getpoint = async ctx => {
    const {id} = ctx.params
    const points = await Point.Service.deletepointbyIdClass(id)
    const info_point = []
    for (x of points) {
        const c_name = await Student.Model.getnamebyId(x._student)
        const s_name = await Subject.Model.getnamebyId(x._subject)
        info_point.push({
            studentname:c_name,
            subjectname: s_name,
            point:x.point,
        })
    }
    ctx.body = info_point
}