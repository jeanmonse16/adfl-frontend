import React, { useState, useContext } from 'react'
import UsersProvider from '../../Context'
import { useNavigate } from '@reach/router'
import LoginLogo from './LoginLogo.js'
import InputGroup from './InputGroup.js'
import Go from './Go.js'
import { register } from '../../_services/user.service'
import ErrorMessage from '../ErrorMessage'
import Validator from '../../_helpers/Validator'

export default () => {
  const contextConsumer = useContext(UsersProvider)
  const navigator = useNavigate()
  const [UserInfo, setUserInfo] = useState({
    email: '',
    password1: '',
    password2: ''
  })

  const onChange = e => {
    console.log(contextConsumer)
    setMessageError('')
    setUserInfo({
      ...UserInfo,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (Validator(UserInfo.email, 'email') !== 1 || Validator(UserInfo.password1, 'password') !== 1 || Validator(UserInfo.password2, 'password') !== 1) {
      const setMessage = isNaN(Validator(UserInfo.email, 'email')) ? Validator(UserInfo.email, 'email') : 'debes ingresar una contraseña con mínimo un caracter minúsculo, mayúsculo, un número y un caracter especial'
      return setMessageError(setMessage)
    } else {
      return register(UserInfo)
        .then((response) => response.data ? navigator('/waiting-for-activation', { replace: true }) : setMessageError('Ocurrio un error al registrar el usuario'))
        .catch(() => setMessageError('Ocurrio un error al registrar el usuario, intentalo de nuevo'))
    }
  }

  const [messageError, setMessageError] = useState('')

  return (
    <div className='login-form'>
      <LoginLogo />
      <form>
        <InputGroup icon='loginIcons fal fa-user' nameId='email' placeHolderText='User Email' onChange={onChange} />
        <InputGroup icon='loginIcons fal fa-lock' nameId='password1' placeHolderText='Password' onChange={onChange} />
        <InputGroup icon='loginIcons fal fa-lock' nameId='password2' placeHolderText='Confirm Password' onChange={onChange} />
        {messageError !== ''
          ? <ErrorMessage message={messageError} />
          : null}
        <div className='forgot-password'>
          <a style={{ fontFamily: 'Arial', fontWeight: '500', fontSize: '12px' }}>Forgot Password</a>
        </div>
        <Go onClick={onSubmit} title='Register' />
      </form>
    </div>
  )
}
