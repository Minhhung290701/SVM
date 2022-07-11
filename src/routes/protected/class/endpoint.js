const Router = require('@koa/router')
const ctrl = require('./controller')

const classRouter = new Router({ prefix: '/class' })

//Lay danh sach ten cac lop hoc
classRouter.get('/', ctrl.getname)

//Them lop hoc theo ten
classRouter.post('/', ctrl.creatclass)

//Sửa lớp học theo id
classRouter.put('/class/:id', ctrl.updateclass)

//Them hoc sinh moi vao lop
classRouter.post('/student',ctrl.addStudent)

//Xoa hoc sinh ra khoi lop
classRouter.delete('/student',ctrl.deleteStudent)

//Hien thi tên danh sach hoc sinh trong lop
classRouter.get('/student/:id', ctrl.getstudent )

//Them mon hoc moi vao lơp
classRouter.put('/subject', ctrl.addsubject)

//Hiển thị tên các môn học được day trong lơp
classRouter.get('/subject/:id', ctrl.getsubject)

//Xem điểm của hoc sinh
classRouter.get('/point/:id', ctrl.getpoint)

//Xóa lớp đồng thời xóa tất cả thông tin liên quan
classRouter.delete('/class/:id', ctrl.deleteclass)

//Xóa môn học được day khỏi lớp (đồng thời xóa các thông tin điểm học viên của môn này & ở lớp này)
classRouter.delete('/subject', ctrl.deletesubject )



module.exports = [classRouter]
