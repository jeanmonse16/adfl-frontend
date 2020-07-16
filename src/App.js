import React from 'react'
import { Router } from '@reach/router'
import Login from './pages/Login'

export default () => {
  return (
    <Router>
      <Login path='/login' />
    </Router>
  )
}
