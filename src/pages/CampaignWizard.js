import React from 'react'
import '../styles/campaignWizard.css'
import '../styles/details.css'
import '../styles/channel.css'
import '../styles/client.css'
import '../styles/type.css'
import '../styles/campaign.css'
import TopNav from '../components/TopNav/TopNav.js'
import CampaignTimeline from '../components/campaign/CampaignTimeline.js'
import Details from '../components/campaign/sections/details/Details.js'
import Channel from '../components/campaign/sections/channel/Channel.js'
import Client from '../components/campaign/sections/client/Client.js'
import Type from '../components/campaign/sections/type/Type.js'
import Campaign from '../components/campaign/sections/campaign/Campaign.js'
import AdSets from '../components/campaign/sections/ad-sets/AdSets.js'
import TabController from '../components/TabController'
import Step from '../components/campaign/Step'
import '../fontawesome-pro/js/all.js'

const CampaignWizard = () => {
  const [sectionController, setSectionController] = React.useState(TabController([
    {
      id: 'Details',
      module: Details
    },
    {
      id: 'Channel',
      module: Channel
    },
    {
      id: 'Client',
      module: Client
    },
    {
      id: 'Type',
      module: Type
    },
    {
      id: 'Campaign',
      module: Campaign
    },
    {
      id: 'Ad Sets',
      module: AdSets
    }
  ]))

  const ActiveTab = sectionController.activeTab().module

  return (
    <div>
      <TopNav
        title='Welcome to the Campaign Creation Wizard'
      />
      {/* <CampaignTimeline sectionController={sectionController} /> */}
      <div className='campaign-timeline wizard-tl'>
        <div className='lineup'>
          {sectionController.tabs().map((section, i) => {
            return <Step key={section.id} name={section.id} controller={sectionController} index={i} />
          }
          )}
          <Step
            name='Rules'
          />
          <Step
            name='Maps'
          />
          <Step
            name='Ad Injection'
          />
          <Step
            name='Review'
          />
          <Step
            name='Launch'
          />
        </div>
      </div>
      <div>
        <ActiveTab />
      </div>
    </div>
  )
}

export default CampaignWizard
