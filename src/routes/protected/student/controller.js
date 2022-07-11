const { Student, Point, Class, Subject } = require('../../../resources')


/**
 * Lay danh sach ten student
 */
exports.getname = async ctx => {
    const namestudents = await Student.Service.getname()
    ctx.body = namestudents
}

//Them moi student
exports.creatnewstudent = async ctx => {
    const newname = ctx.header.newname
    const birthday = ctx.header.birthday
    ctx.body = await Student.Service.creat(newname,birthday)
}

//Sửa thông tin Student
exports.updateStudent = async ctx => {
    const {id} = ctx.params
    const newname = ctx.header.newname
    const birthday = ctx.header.birthday
    await Student.Service.update(id,newname,birthday)
    ctx.body = 'Update thong tin student done'
}

//Xóa học sinh
exports.delete = async ctx => {
    const {id} = ctx.params
    Student.Service.delete(id)
    Point.Service.deletepointbyIdClass(id)
    ctx.body = 'Delete student done'
}

//Xem điểm của học sinh
exports.getpoint = async ctx => {
    const {id} = ctx.params
    const points = await Point.Service.getpointbyIdStudent(id)
    const info_point = []
    for (x of points) {
        const c_name = await Class.Model.getnamebyId(x._class)
        const s_name = await Subject.Model.getnamebyId(x._subject)
        info_point.push({
            classname:c_name,
            subjectname: s_name,
            point:x.point,
        })
    }
    ctx.body = info_point
}