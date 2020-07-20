import React from 'react'
import Step from '../components/Step.js'

class CampaignTimeline extends React.Component{
    render(){
        return(
            <div className="campaign-timeline wizard-tl">
                <div className="lineup">
                    <Step 
                        name="Details"
                    />
                    <Step 
                        name="Channel"
                    />
                    <Step 
                        name="Client"
                    />
                    <Step 
                        name="Type"
                    />
                    <Step 
                        name="Campaign"
                    />
                    <Step 
                        name="Ad Sets"
                    />
                    <Step 
                        name="Rules"
                    />
                    <Step 
                        name="Maps"
                    />
                    <Step 
                        name="Ad Injection"
                    />
                    <Step 
                        name="Review"
                    />
                    <Step 
                        name="Launch"
                    />
                </div>
            </div>
        )
    }
}

export default CampaignTimeline