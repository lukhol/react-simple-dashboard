import React from 'react';
import './LoginPage.scss';

import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from "react-router-dom";

export interface Props {
    history: any;
}

export class LoginPage extends React.Component<Props> {

    componentDidMount() {
        toast('Logged out succesfully.', {containerId: 'B', type: toast.TYPE.SUCCESS, className: 'rotateY animated'});
    }

    onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        if(event.target.value === "") {
            if(event.target.classList.contains('focus')) {
                event.target.classList.remove('focus');
            }
        }
    }

    onLoginClicked = () => {
        localStorage.setItem('bearer-token', 'some-token');
        this.props.history.go('/');
    };

    render() {
        return (
            <div className="login-container">
                <form className="login-form">
                    <h1>Login</h1>

                    <div className="txtb">
                        <input 
                            type="text" 
                            onFocus={event => { event.target.classList.add("focus") }} 
                            onBlur={this.onInputBlur}
                        />
                        <span data-placeholder="Username"></span>
                    </div>

                    <div className="txtb">
                        <input 
                            type="password"
                            onFocus={event => { event.target.classList.add("focus") }} 
                            onBlur={this.onInputBlur}
                        />
                        <span data-placeholder="Password"></span>
                    </div>

                    <input type="button" className="logbtn" value="Login" onClick={this.onLoginClicked} />

                    <div className="bottom-text">
                        Don't have account?
                        <a href="#" onClick={() => toast('dsadsa', {containerId: 'A'})}>
                            Sign up
                        </a>
                    </div>
                </form>
                <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
            </div>
        )
    }
}

export default  withRouter(({ history }) => (<LoginPage history={history} />));