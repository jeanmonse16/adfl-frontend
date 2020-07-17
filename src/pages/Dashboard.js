import React from 'react'
import TopNav from '../components/TopNav.js'
import WelcomeBackButton from '../components/WelcomeBackButton'
import DashModal from '../components/DashModal.js'
import '../styles/dashboard.css'
import '../fontawesome-pro/js/all.js'

class Dashboard extends React.Component{
    render(){
        return(
            <div className="dashboardContainer">
                <TopNav 
                    name = "Agency"
                    profileImage = "../images/employee.jpg"
                />
                <DashModal />
                <WelcomeBackButton />
            </div>           
        )
    }
}
export default Dashboard