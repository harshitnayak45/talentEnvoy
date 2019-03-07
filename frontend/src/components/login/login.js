import React, { Component } from 'react';
import './login.scss';
import AuthService from '../../services/loginService';
//import ApolloClient from 'apollo-boost';
//import gql from 'graphql-tag';
const Auth = new AuthService();

// const client = new ApolloClient({
//   uri: 'http://localhost:3300/graphql'
// });

// client.query({
//   query: gql`
//   query {
//     login(email: "rahul@gmail.com", password: "12345") {
//       userId
//       token
//       tokenExpiration
//     }
//   }
//   `,
// })
//   .then(data => console.log("xxxxxxxxxxxxxxxxxxxxx",data))
//   .catch(error => console.error(error));

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();

  }
  componentDidMount() {
   
  }

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin };
    });
  };

  LoginMe = (event) => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    let userVo = {
      'email': email,
      'password': password
    }

    Auth.authenticateUsr(userVo)
   
      .then(result => {
        console.log('xxxxxx email 1', this.emailEl.current.value);
        console.log('xxxxxx email2', Auth.getProfile().email);
        if(this.emailEl.current.value==Auth.getProfile().email){
          this.props.history.replace('/');
        }
      }).catch(err => {
        console.log("xxxxxxxx xxxxxxxxxx xxxx err is ", err);
      });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <form className="form-signin">
            <h2 className="form-signin-heading">Please login</h2>
            <input type="text" className="form-control" name="email" placeholder="Email Address" id="email" ref={this.emailEl} />
            <input type="password" className="form-control" name="password" placeholder="Password" id="password" ref={this.passwordEl} />
            <label className="checkbox">
              <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
      </label>
            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.LoginMe}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;