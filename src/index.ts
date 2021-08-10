import Koa from 'koa'
import { db } from './config/db.config'
import indexRouter from './controllers/index'
import koaBody from 'koa-body'
import Router from 'koa-router'


(async() => {
  const app = new Koa();

  await db.connect()

  app.use(koaBody())

  const router = new Router()

  app.use(router.routes())
  app.use(router.allowedMethods())
  
  router.get('/radi', (ctx, next) => {
    console.log('hereee')
    ctx.body = "Hello world";
    ctx.status = 200
  })
  
  // app.use(indexRouter.routes())
  // app.use(indexRouter.allowedMethods())

  

  app.listen(3000, () => {
    console.log('Server is up')
  })
})()