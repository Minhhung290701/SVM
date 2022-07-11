const Router = require('@koa/router')
const ctrl = require('./controller')


const pointRouter = new Router({ prefix: '/point' })

pointRouter.post('/',ctrl.creatpoint)
pointRouter.put('/',ctrl.fixpoint)
pointRouter.delete('/',ctrl.deletepoint)

module.exports = [pointRouter]
