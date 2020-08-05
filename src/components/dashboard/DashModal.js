import React from 'react'
import Choice from './Choice.js'

const DashModal = () => {
    return(
        <div className="dash_modal modal-bg dashboard-modal">
            <div className="dash-body">
            {/*para mostar el DashModal, quitar el "Display: none" de sus estilos en "dashboard.css" en la clase "dash-modal" linea 225*/}
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
                        //para quitar el boton principal, añadir "out" al final de frontStatus
                            frontStatus = "front out" 
                            iconFront = "dashboard-icons far fa-plus-circle"
                            textFront = "Create a New Campaign"
                        //para colocar los dos botones secundarios, colocar "in" al final de backStatus
                            backStatus = "back in"
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
