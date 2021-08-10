import Router from '@koa/router'
import authRouter from './auth'

const combinedRouter = new Router()

combinedRouter.use('/users', authRouter)

export default combinedRouter