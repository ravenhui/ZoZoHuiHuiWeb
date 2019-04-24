import React, { Component } from 'react';
import './Login.css';
import axios from 'axios'
import Info from './Info'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, msg: null,show: true }
  }

  doLogin = (e) => {
    e.preventDefault()
    let usr = e.currentTarget['usr'].value
    let pwd = e.currentTarget['pwd'].value
    let data = { username:usr, password:pwd  }
    console.log(data)
    axios.post('http://localhost:3000/api/login',data).then( (r)=> {
      this.setState({msg: r.data.message, show: true})
    }).catch((error)=>{
      // handle error
      let msg = error.response.data.message;
      console.log(msg);
      this.setState({msg: msg, show: true});
      
         
    })
  } 

  render() {  
    let msg = this.state.msg;
    let show = this.state.show;

    return (
      
        <div className="g-login">
        <div className="m-login-wrap">
        <div className="m-login-logo"></div>
          <Info info={msg} show={show}/>
          <form onSubmit={this.doLogin}>
            <div className="row">
              <input type="text" id='usr'/>
            </div>
            <div className="row">
              <input type="password" id='pwd' />
            </div>
            <div className="row">
              <button type="submit">登录</button>
            </div>
            <div class="m-login-fotter">
              <li id="register">免费注册</li>
              <li>忘记密码</li>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login