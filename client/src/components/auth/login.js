import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
require('./login.css');
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        let user = this.state;
        axios({
            method: 'post',
            url: '/api/auth',
            headers: {
                'content-type': 'application/json'
            },
            data: user
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                } 
              });
            // .catch(function (error) {
            //     console.log(error);
            // });
    }
    render() {
        return (
            <div className="login-body">
                <div id="login">
                    <div className="inner">
                        <form id="loginForm" className="login_form inner" autoComplete="off" onSubmit={this.submitHandler}>
                            <input type="text" className="text_ login" id="username" placeholder="Username" onChange={this.handleInputChange}/>
                            <input type="password" className="text_ login" id="password" placeholder="Password" onChange={this.handleInputChange}/>
                            <button className="buttons_ login buttons_login" id="submit">submit</button>
                        </form>
                        <hr />
                        <Link to="/sign-up" className="buttons_ login buttons_register">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;