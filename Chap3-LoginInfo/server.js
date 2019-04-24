const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var url = require('url')
const app = express()
const port = 3000


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/login', function(req, res) {
  var {usr, pwd} = url.parse(req.url, true).query;

  if ((usr === 'aa')&&(pwd === 'bb')) {
    result = 1;
    message = "登录成功";
  }else{
    result = 0;
    message = "登录失败";
  }

  let ret = {
    result: result,
    message: message
  }

  res.send(ret);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))