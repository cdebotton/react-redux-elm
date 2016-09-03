import Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      console.log(err);
    }
});

app.use(ctx => {
  ctx.body = 'Hello';
});

app.listen(3000, () => {
  console.log('Application running on port 3000');
});
