import React from 'react'
import '../styles/campaignWizard.css'
import '../styles/details.css'
import '../styles/channel.css'
import '../styles/client.css'
import '../styles/type.css'
import '../styles/campaign.css'
import TopNav from '../components/topNav/TopNav.js'
import CampaignTimeline from '../components/campaign/CampaignTimeline.js'
import Sections from '../components/campaign/sections/Sections.js'
import '../fontawesome-pro/js/all.js'

class CampaignWizard extends React.Component {
  render () {
    return (
      <div>
        <TopNav
          title='Welcome to the Campaign Creation Wizard'
        />
        <CampaignTimeline />
        <Sections />
      </div>
    )
  }
}

export default CampaignWizard
