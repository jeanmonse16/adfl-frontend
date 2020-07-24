import React from 'react'
import LoginLogo from './LoginLogo.js'
import InputGroup from './InputGroup.js'
import Go from './Go.js'

class LoginForm extends React.Component{
    render(){
        return(
            <div className="login-form">
                <LoginLogo />
                <form>
                    <InputGroup 
                        icon = "loginIcons fal fa-user"
                        nameId = "uname"
                        placeholderText = "User Email"
                    />
                    <InputGroup 
                        icon = "loginIcons fal fa-lock"
                        nameId = "password"
                        placeholderText = "Password"
                    />
                    <div  className="forgot-password">
                        <a href="#">Forgot Password</a>
                    </div>
                    <Go />
                </form>
            </div>
        )
    }
}
export default LoginForm