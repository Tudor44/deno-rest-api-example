import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port : 5000 })