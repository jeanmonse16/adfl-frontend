import React from 'react'
import TopNav from '../components/TopNav/TopNav.js'
import WelcomeBackButton from '../components/dashboard/WelcomeBackButton.js'
import DashModal from '../components/dashboard/DashModal.js'
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
