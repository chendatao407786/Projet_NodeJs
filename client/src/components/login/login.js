import React, { Component } from 'react';
require('./login.css');
class Login extends Component {
    render() {
        return (
            // <form classNameName="login-form">
            //     <input/>
            //     <input/>
            //     <button>Sign In</button>
            // </form>
            <div className="login-body">
                <div id="login">
                    <div className="inner">
                        <form id="loginForm" className="login_form inner" autoComplete="off">
                            <input type="text" className="text_ login" id="username" placeholder="Identifiant" />
                            <input type="password" className="text_ login" id="password" placeholder="Mot de Passe" />
                            <input type="submit" className="buttons_ login buttons_login" id="submit" />
                        </form>
                        <hr />
                        <form>
                            <p>
                                <input type="submit" className="buttons_ login buttons_register" value="Enregistrez-vous" />
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;