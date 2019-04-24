$(init)

function init() {
  $('body').on('click','.m-btn-login', doLogin);
  $('body').on('click','#register',doRegister);
}

function doRegister(){
  window.location = '../Pages/homework1_index.html'
}


function doLogin() {
  let usr = document.querySelector('.u-usr').value;
  let pwd = document.querySelector('.u-pwd').value;
  
  let data = {
      username: usr,
      password: pwd
    
  }
  axios.post('http://localhost:3000/api/login',data)
    .then(function (response) {
      // handle success
      let status = response.data.status;
      document.querySelector('.m-login-msg').innerHTML = '登录成功';
      document.querySelector('.m-login-message').style.display = 'block'
      setTimeout(doClose,3000); 

      if (status === 2) {
        window.location = '../Pages/homework1_index.html'
      }
    })
    .catch(function (error) {
      // handle error
      let status = error.response.data.status;
      document.querySelector('.m-login-msg').innerHTML = (status===0)?'用户不存在！':'密码错误';
      document.querySelector('.m-login-message').style.display = 'block'
      setTimeout(doClose,3000); 
         
    })
}

function doClose() {
  document.querySelector('.m-login-message').style.display = 'none'
}