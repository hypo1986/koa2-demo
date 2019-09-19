
var fn_index = async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/post" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
};

var datas = [{
    name: '1111', age:3
},{
    name: '1111', age:10
},{
    name: '222222',age:20
},{
    name: '333333',age:30
}]

var fn_signin = async (ctx, next) => {
  var
      name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
      // 登录成功:
      ctx.render('signin-ok.html', {
        title: name,
        data: datas
    });
  } else {
      // 登录失败:
      ctx.render('signin-failed.html', {
        title: 'Sign In Failed'
    });
  }
};

module.exports = {
  'GET /login': fn_index,
  'POST /post': fn_signin
};