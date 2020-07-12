import React from 'react'
import LoginForm from '../components/LoginForm'
import '../styles/login.css'
import '../fontawesome-pro/js/all.js'

class Login extends React.Component{
    render(){
        return(
            <div className="loginContainer">
                <LoginForm />
            </div>
        )
    }
}
export default Login