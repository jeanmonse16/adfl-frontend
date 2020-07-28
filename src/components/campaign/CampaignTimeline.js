import React from 'react'
import Step from './Step.js'

const CampaignTimeline = ({ sectionController }) => {
  return (
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
  )
}

export default CampaignTimeline
