import React, { useState } from 'react'
import Axios from 'axios'
import { createPortal } from 'react-dom'
import LoginLogo from './LoginLogo.js'
import InputGroup from './InputGroup.js'
import Go from './Go.js'

export default () => {
  const [UserInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: '',
    confirmedPassword: ''
  })

  const onChange = e => {
    setMessageError(false)
    setUserInfo({
      ...UserInfo,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (UserInfo.email === '' || UserInfo.password === '' || !UserInfo.email.includes('@') || !UserInfo.email.includes('.com') || !UserInfo.password.length > 4) { return setMessageError(true) } else {
      return login(UserInfo)
        .then(response => {
          response.text().then(text => {
            const data = text && JSON.parse(text)
            console.log(data)
            if (!response.ok) {
              if (response.status === 401) {
                alert('Permission Error.')
              }
              if (response.status === 400) {
                setBadLoginRequestMessage(true)
              }
              const error = (data && data.message) || response.statusText
              return Promise.reject(error)
            }
            return window.Location.href('localhost:8080/campaignWizard'
            )
          })
        })
        .catch(e => console.error(e))
    }
  }

  function Register (user) {
    /* Axios.post(apiUrl, user)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    */
    // eslint-disable-next-line no-undef
    return fetch('https://adfldemo.com/api/auth/login/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
  }

  const [messageError, setMessageError] = useState(false)
  const [badLoginRequestMessage, setBadLoginRequestMessage] = useState(false)

  return (
    <div className='login-form'>
      <LoginLogo />
      <form>
        <InputGroup icon='loginIcons fal fa-user' nameId='email' placeHolderText='User Email' onChange={onChange} />
        <InputGroup icon='loginIcons fal fa-lock' nameId='username' placeHolderText='Username' onChange={onChange} />
        <InputGroup icon='loginIcons fal fa-lock' nameId='password' placeHolderText='Password' onChange={onChange} />
        <InputGroup icon='loginIcons fal fa-lock' nameId='confirmedPassword' placeHolderText='Confirm Password' onChange={onChange} />
        {messageError
          ? <div style={{ display: 'block', width: '100%', marginTop: '0.25rem', fontSize: '80%', color: '#f86c6b' }}>
            <span style={{ marginRight: '150px' }}>Ambos campos deben ser válidos</span>
          </div>
          : null}
        <div className='forgot-password'>
          <a style={{ fontFamily: 'Arial', fontWeight: '500', fontSize: '12px' }}>Forgot Password</a>
        </div>
        <Go onClick={onSubmit} />
      </form>
    </div>
  )
}

const BadLoginRequestModal = () => {
  return createPortal(
    <div className='generic-modal hide-footer fadeIn'>
      <div tabIndex='-1' role='dialog' className='modal overflow-auto fade show d-block modal-warning'>
        <div dialog='document' className='modal-dialog'>
          <div className='modal-content'>
            <header className='modal-header'>
              <h5 className='modal-title'>Warning</h5>
              <button type='button' aria-label='Close' className='close'>x</button>
            </header>
            <div className='modal-body'>Credenciales inválidas</div>
          </div>
        </div>
      </div>
    </div>, document.getElementById('modal')
  )
}
