const {Point} = require('../../../resources')

//Tạo mới Point
exports.creatpoint = async ctx => {
    const point = ctx.header.point
    const {id_class} = ctx.header
    const {id_student} = ctx.header
    const {id_subject} = ctx.header
    ctx.body = await Point.Service.create(point,id_class,id_student,id_subject)
}

//Sửa Point
exports.fixpoint = async ctx => {
    const point = ctx.header.point
    const {id_class} = ctx.header
    const {id_student} = ctx.header
    const {id_subject} = ctx.header
    await Point.Service.fixpoint(point,id_class,id_student,id_subject)
    ctx.body = 'Fix done'
}

//Xóa point
exports.deletepoint = async ctx => {
    const {id_class} = ctx.header
    const {id_student} = ctx.header
    const {id_subject} = ctx.header
    await Point.Service.deletepoint(id_class,id_student,id_subject)
    ctx.body = 'Delete Done'
}