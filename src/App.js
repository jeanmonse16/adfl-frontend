import React from 'react'
import { Router } from '@reach/router'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Campaign from './pages/Campaign'

export default () => {
  return (
    <Router>
      <Login path='/login' />
      <Dashboard path='/dashboard' />
      <Campaign path='/campaignWizard' />
    </Router>
  )
}
