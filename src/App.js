import React from 'react'
import { Router } from '@reach/router'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CampaignWizard from './pages/CampaignWizard'

export default () => {
  return (
    <Router>
      <Login path='/login' />
      <Dashboard path='/dashboard' />
      <CampaignWizard path='/campaignWizard' />
    </Router>
  )
}
