import React from 'react'
import '../styles/campaign.css'
import TopNav from '../components/topNav/TopNav.js'
import CampaignTimeline from '../components/campaign/CampaignTimeline.js'
import Details from '../components/campaign/sections/details/Details.js'
import '../fontawesome-pro/js/all.js'

class Campaign extends React.Component{
    render(){
        return(
            <div>
                <TopNav 
                    title = "Welcome to the Campaign Creation Wizard"
                />
                <CampaignTimeline />
                <Details />
            </div>
        )
    }
}

export default Campaign