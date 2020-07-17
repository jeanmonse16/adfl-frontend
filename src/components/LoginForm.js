import React, { useState } from 'react'
import LoginLogo from '../components/LoginLogo.js'
import InputGroup from '../components/InputGroup.js'
import Go from '../components/Go.js'

export const LoginForm = () => {
  const [UserInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setUserInfo({
      ...UserInfo,
      [e.target.name]: e.target.value
    })
    console.log(UserInfo)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (UserInfo.email === '' && UserInfo.password === '' && !UserInfo.email.includes('@.') && !UserInfo.password.length > 4) { return 0 } else {
      return login(UserInfo)
    }
  }

  function login (user) {
    // eslint-disable-next-line no-undef
    return fetch('https://adfldemo.com/api/auth/login/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then(response => console.log(`${response} éxito`))
      .catch(e => console.error(e))
  }

  return (
    <div className='login-form'>
      <LoginLogo />
      <form>
        <InputGroup icon='loginIcons fal fa-user' nameId='email' placeHolderText='User Email' onChange={onChange} />
        <InputGroup icon='loginIcons fal fa-lock' nameId='password' placeHolderText='Password' onChange={onChange} />
        <div className='forgot-password'>
          <a style={{ fontFamily: 'Open Sans', fontWeight: '500' }}>Forgot Password</a>
        </div>
        <Go onClick={onSubmit} />
      </form>
    </div>
  )
}
