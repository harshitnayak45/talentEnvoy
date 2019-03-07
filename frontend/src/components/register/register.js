import React, { Component } from 'react';
 import registerService from '../../services/registerService';
 const Api = new registerService();
class Register extends Component {
    constructor(props){
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
        this.state={
           
        }
    }
    componentDidMount() {
      
    }

    RegisterMe=(event)=>{
        event.preventDefault();
        let userInfo={
            'email':this.emailEl.current.value,
            'password':this.passwordEl.current.value
        }
        console.log('xxxxxxxxxxx', userInfo);
        Api.registerUser(userInfo)
        .then(result => {
          console.log('xxxxxxxxxxx reg', result.data.data);
          if(result.data.data.createUser.email){
            this.props.history.replace('/login');
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
                        <h2 className="form-signin-heading">Please Register</h2>
                        <input type="text" className="form-control"  name="email"  id="email" ref={this.emailEl} />
                        <input type="password" className="form-control" name="password" placeholder="Password" id="password" ref={this.passwordEl}  />
                       
                        <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.RegisterMe}>Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;