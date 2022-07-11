const {Subject,Point,Class,Student} = require('../../../resources')

/**
 * Lay danh sach ten subject
 */
exports.getname = async ctx => {
    const namesubjects = await Subject.Service.getname()
    ctx.body = namesubjects
}

//Them moi subject
exports.creatnewsubject = async ctx => {
    const newname = ctx.header.newname
    ctx.body = await Subject.Service.creat(newname)
}

//Sửa thông tin Subject
exports.updatesubject = async ctx => {
    const {id} = ctx.params
    const newname = ctx.header.newname
    Subject.Service.update(id,newname)
    ctx.body = 'Update subject done'
}

//xóa môn học
exports.deletesubject = async ctx => {
    const {id} = ctx.params
    Subject.Service.deletesubject(id)
    Point.Service.deletepointbyIdSubject(id)
    Class.Service.removesubject(id)
    ctx.body = 'Delete subject done'
}

//Xem điểm học sinh đã học môn này
exports.getpointinsubject = async ctx => {
    var info_student_subject = []
    const {id} = ctx.params
    const points = await Point.Service.getpointbyIdSubject(id)
    for (x of points) {
        const c_name = await Class.Model.getnamebyId(x._class)
        const s_name = await Student.Model.getnamebyId(x._student)
        info_student_subject.push({
            studentname:s_name,
            classname: c_name,
            point:x.point,
        })
    }
    ctx.body = info_student_subject
}

//Xem danh sách học sinh có số điểm lớn hơn hoặc bằng 5
exports.getpointgtefive = async ctx => {
    var info_student = []
    const points = await Point.Service.getpointgtefive()
    for (x of points) {
        const s_name = await Student.Model.getnamebyId(x._student)
        info_student.push(s_name)
    }
    ctx.body = info_student
}