import React from 'react'
import '../styles/validateAccount.css'
import Go from '../components/login/Go'
import { validateAccount } from '../_services/user.service'
import { useNavigate } from '@reach/router'

import Logo2 from '../images/logo2.png'

export default ({ token }) => {
  const navigator = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    return validateAccount(token)
      .then(() => navigator('/campaignWizard', { replace: true }))
      .catch((e) => console.error(e))
  }

  return (
    <div className="validate-container">
      <div className="validate-message">
        <div className='validate-logo animated fadeInDown'>
          <img src={Logo2} />
        </div>
        <p className="animated fadeInLeft">Your account has been activated</p>
        <p className="animated fadeInRight">Click in the button below to go to your Dashboard</p>
        <Go goText="Go to my Dashboard" onClick={handleSubmit}/>
      </div>
    </div>
  )
}
