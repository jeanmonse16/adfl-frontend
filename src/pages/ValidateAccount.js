import React from 'react'
import { validateAccount } from '../_services/user.service'
import { useNavigate } from '@reach/router'

export default ({ token }) => {
  const navigator = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    return validateAccount(token)
      .then(() => navigator('/campaignWizard', { replace: true }))
      .catch((e) => console.error(e))
  }

  return (
    <div>
      <nav className='top-nav'>
        <div className='nav-center'>
          <h1 className='welcome-campaign-creation'> Activa tu cuenta</h1>
          <div className='client' onClick={handleSubmit}> Activar </div>
        </div>
      </nav>
    </div>
  )
}
