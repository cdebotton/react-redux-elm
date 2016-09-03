import Koa from 'koa';
import convert from 'koa-convert';
import compress from 'koa-compress';
import Pug from 'koa-pug';
import Router from 'koa-router';
import path from 'path';
import Boom from 'boom';
import bodyParser from 'koa-bodyparser';

const ENV = (process.env.NODE_ENV || '').trim();
const app = new Koa();
const router = new Router();

const pug = new Pug({
  viewPath: path.join(__dirname, 'views'),
});

pug.use(app);

app.use(convert(compress()));
app.use(convert(bodyParser()));

if (ENV === 'development') {
  const webpack = require('webpack');
  const config = require('../../webpack.config.babel').default;
  const options = config({ development: true });
  const devMiddleware = require('koa-webpack-dev-middleware');

  const compiler = webpack(options);

  app.use(convert(devMiddleware(compiler, {
    hot: true,
    historyApiFallback: true,
    publicPath: options.output.publicPath,
  })));

  const hotMiddleware = require('koa-webpack-hot-middleware');
  app.use(convert(hotMiddleware(compiler)));
}

app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      console.log(err);
    }
});

router.get('/', async (ctx, next) => {
  ctx.render('index');
});

router.get('/api/test', ctx => {
  ctx.body = {
    items: Array.from({ length: ctx.request.query.count })
      .map(() => Math.random()),
  };
});

app.use(router.routes());
app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => new Boom.notImplemented(),
  methodNotAllowed: () => new Boom.methodNotAllowed(),
}));

app.listen(3000, () => {
  console.log('Application running on port 3000');
});
