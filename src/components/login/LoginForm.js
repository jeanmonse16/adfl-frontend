import React, { useState } from 'react'
import { login } from '../../_services/user.service'
import { useNavigate } from '@reach/router'
import ErrorMessage from '../ErrorMessage'
import Validator from '../../_helpers/Validator'
import InputGroup from './InputGroup'
import Go from './Go'

import Logo2 from '../../images/logo2.png'

export default () => {
  const navigator = useNavigate()

  const [UserInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setMessageError('')
    setUserInfo({
      ...UserInfo,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (Validator(UserInfo.email, 'email') !== 1 || Validator(UserInfo.password, 'password') !== 1) {
      const setMessage = isNaN(Validator(UserInfo.email, 'email')) ? Validator(UserInfo.email, 'email') : Validator(UserInfo.password, 'password')
      return setMessageError(setMessage)
    } else {
      return login(UserInfo)
        .then(response => navigator('/campaignWizard', { replace: true }))
        .catch(e => setMessageError('ocurrio un error al iniciar sesión, intentalo de nuevo'))
    }
  }

  const [messageError, setMessageError] = useState('')

  return (
    <div className='login-form'>
      <div className='login-logo animated fadeInDown'>
        <img src={Logo2} />
      </div>
      <form>
        <InputGroup classInput="input-group animated fadeInLeft" icon='loginIcons fal fa-user' typeInput="text" classInput="input-group animated fadeInLeft" nameId='email' placeHolderText='User Email' onChange={onChange} />
        <InputGroup classInput="input-group animated fadeInRight" icon='loginIcons fal fa-lock' typeInput="password" nameId='password' placeHolderText='Password' onChange={onChange} />
        {messageError !== ''
          ? <ErrorMessage message={messageError} />
          : null}
        <div className='forgot-password animated fadeInLeft'>
          <a style={{ fontFamily: 'Arial', fontWeight: '500', fontSize: '12px' }}>Forgot Password</a>
        </div>
        <Go onClick={onSubmit} goText="Login" />
      </form>
    </div>
  )
}
