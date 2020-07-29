import React from 'react'
import { Router } from '@reach/router'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CampaignWizard from './pages/CampaignWizard'

export default () => {
  return (
    <Router>
      <Register path='/register' />
      <Login path='/login' />
      <Dashboard path='/dashboard' />
      <CampaignWizard path='/campaignWizard' />
    </Router>
  )
}
