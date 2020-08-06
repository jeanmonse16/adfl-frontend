import React from 'react'
import '../styles/waitingActivation.css'
import '../styles/animate.css'
import Go from '../components/login/Go'

import Logo2 from '../images/logo2.png'

export default () => {
  return (
    <div className="waiting-container">
      <div className="waiting-message">
        <div className='waiting-logo animated fadeInDown'>
          <img src={Logo2} />
        </div>
        <p className="animated fadeInLeft">Activate your account</p>
        <p className="animated fadeInLeft">Please check your email for an activation link</p>
        <div className="resend">
          <p className="animated fadeInRight">Didn't receive an activation link in your email?</p>
          <Go goText="Resend"/>
        </div>
      </div>
    </div>
  )
}
