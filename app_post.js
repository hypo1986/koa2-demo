// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

// 创建一个Koa对象表示web app本身:
const app = new Koa();

const bodyParser = require('koa-bodyparser');

app.use(bodyParser());


// 对于任何请求，app将调用该异步函数处理请求：

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});

router.post('/signin', async (ctx, next) => {
  var
      name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
      ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
      ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
  }
});

// add router middleware:
app.use(router.routes());



// 在端口3000监听:
app.listen(3200);
console.log('app started at port 3200...');