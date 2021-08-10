import Router from "@koa/router";

import { login, register } from "../services/auth/auth";

const router = new Router();

router.post('/register', async(ctx: any, next: any) => {
  const { name, email, password} = ctx.request.body
  await register(name, email, password)
  ctx.status = 201;
})

router.post('/login', async(ctx: any, next: any) => {
  console.log('asd')
  const { email, password} = ctx.request.body
  const user = await login(email, password)
  ctx.body = user;
  ctx.status = 200;
})


export default router.routes()