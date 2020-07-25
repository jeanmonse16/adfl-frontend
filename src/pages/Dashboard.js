import React from 'react'
import TopNav from '../components/TopNav.js'
import WelcomeBackButton from '../components/WelcomeBackButton'
import DashModal from '../components/DashModal.js'
import '../styles/dashboard.css'
import '../fontawesome-pro/js/all.js'

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
      <TopNav
        title='Agency Dashboard'
      />
      <DashModal />
      <WelcomeBackButton />
    </div>
  )
}

export default Dashboard
