const Router = require('@koa/router')
const ctrl = require('./controller')


const subjectRouter = new Router({ prefix: '/subject' })

//Lấy danh sách các môn học
subjectRouter.get('/',ctrl.getname)
//Tạo mới môn học
subjectRouter.post('/', ctrl.creatnewsubject)
//Cập nhật tên môn học
subjectRouter.put('/:id', ctrl.updatesubject)
//Xóa môn học
subjectRouter.delete('/:id', ctrl.deletesubject)
//Xem điểm học sinh đã học môn này
subjectRouter.get('/point/:id', ctrl.getpointinsubject)
//Danh sách học sinh có điểm lớn hơn hoặc bằng 5
subjectRouter.get('/advanced', ctrl.getpointgtefive)

module.exports = [subjectRouter]
