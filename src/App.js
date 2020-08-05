import React from 'react'
import { Router } from '@reach/router'
import { UsersProvider } from './Context'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CampaignWizard from './pages/CampaignWizard'
import WaitingActivation from './pages/WaitingActivation'
import ValidateAccount from './pages/ValidateAccount'

export default () => {
  return (
    <UsersProvider>
      <Router>
        <Register path='/register' />
        <Login path='/login' />
        <Dashboard path='/dashboard' />
        <CampaignWizard path='/campaignWizard' />
        <WaitingActivation path='/waiting-for-activation' />
        <ValidateAccount path='/verify-email/:token' />
      </Router>
    </UsersProvider>
  )
}
