import React from 'react'
import '../styles/dashboard.css'
import '../fontawesome-pro/js/all.js'
import TopNav from '../components/TopNav/TopNav'
import WelcomeBackButton from '../components/dashboard/WelcomeBackButton'
import DashModal from '../components/dashboard/DashModal'

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
