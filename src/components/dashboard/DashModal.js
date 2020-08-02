import React from 'react'
import Choice from './Choice.js'

const DashModal = () => {
    return(
        <div className="dash_modal modal-bg dashboard-modal">
            <div className="dash-body">
                <div className="modal-header">
                    <h5 className="modal-title">Welcome back, !</h5>
                </div>
                <div className="modal-body">
                    <h3>What would you like to do first?</h3>
                    <div className="choices">
                        <Choice 
                            iconFront = "dashboard-icons far fa-tachometer-alt"
                            textFront = "View my Dashboard"
                        />
                        <Choice
                            frontStatus = "front" 
                            iconFront = "dashboard-icons far fa-plus-circle"
                            textFront = "Create a New Campaign"
                            backStatus = "back"
                            iconBackLeft = "dashboard-icons fal fa-user-secret"
                            textBackLeft = "Advanced"
                            iconBackRight = "dashboard-icons far fa-wand-magic"
                            textBackRight = "Wizard"
                        />   
                        <Choice 
                            iconFront = "dashboard-icons far fa-store"
                            textFront = "View my active campaigns"
                        />                               
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DashModal