import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let data = this.state;
        console.log(data);
        axios({
            method: 'post',
            url: '/api/user',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
   
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div className="login-body">
                <div id="login">
                    <div className="inner">
                        <form id="loginForm" className="login_form inner" autoComplete="off" onSubmit={this.handleSubmit}>
                            <input type="text" className="text_ login" id="username" placeholder="Username" onChange={this.handleInputChange}/>
                            <input type="text" className="text_ login" id="email" placeholder="Email" onChange={this.handleInputChange}/>
                            <input type="password" className="text_ login" id="password" placeholder="Password" onChange={this.handleInputChange}/>
                            {/* <input type="password" className="text_ login" id="passwordConfi" placeholder="Password Confirmation" /> */}
                            <input type="submit" className="buttons_ login buttons_login" id="submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};
export default SignUp;