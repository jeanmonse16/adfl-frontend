import React, { useEffect } from 'react'
import '../styles/campaignWizard.css'
import '../fontawesome-pro/js/all.js'
import TopNav from '../components/TopNav/TopNav'
import Details from '../components/campaign/sections/details/'
import Channel from '../components/campaign/sections/channel'
import Client from '../components/campaign/sections/client'
import Type from '../components/campaign/sections/type'
import Campaign from '../components/campaign/sections/campaign'
import AdSets from '../components/campaign/sections/ad-sets'
import TabController from '../components/TabController'
import Step from '../components/campaign/Step'
import NextButton from '../components/campaign/NextButton'
import PreviousButton from '../components/campaign/PreviousButton'
import HelpMenu from '../components/campaign/HelpMenu'

const CampaignWizard = () => {
  const [tabs, setTabs] = React.useState(TabController([
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

  const [sectionController, setSectionController] = React.useState(tabs.activeTab())

  useEffect(() => {
    setSectionController(tabs.activeTab())
    return () => console.log(sectionController)
  })

  const ActiveTab = sectionController.module

  return (
    <div>
      <TopNav
        title='Welcome to the Campaign Creation Wizard'
      />
      {/* <CampaignTimeline sectionController={sectionController} /> */}
      <div className='campaign-timeline wizard-tl'>
        <div className='lineup'>
          {tabs.tabs().map((section, i) => {
            return <Step key={section.id} name={section.id} controller={setSectionController} index={i} tabs={tabs} />
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
      <div className='control-panel-buttons'>
        <PreviousButton />
        <NextButton />
      </div>
      <HelpMenu
        title='Campaign Type'
        text='This block of text will explain to the user what they need to do in this section of the wizard. Each section is different, therefore this block is made up of dynamic text.'
      />
    </div>
  )
}

export default CampaignWizard
