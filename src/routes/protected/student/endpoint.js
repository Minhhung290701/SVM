const Router = require('@koa/router')
const ctrl = require('./controller')


const studentRouter = new Router({ prefix: '/student' })

studentRouter.get('/',ctrl.getname)
studentRouter.post('/',ctrl.creatnewstudent)
studentRouter.put('/:id', ctrl.updateStudent)
studentRouter.delete('/:id',ctrl.delete)
studentRouter.get('/:id', ctrl.getpoint)

module.exports = [studentRouter]
