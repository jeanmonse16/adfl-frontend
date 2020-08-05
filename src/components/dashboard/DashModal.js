import React from 'react'
import Choice from './Choice.js'

class DashModal extends React.Component {
  render () {
    return (
      <div className='dash_modal modal-bg dashboard-modal'>
        <div className='dash-body'>
          <div className='modal-header'>
            <h5 className='modal-title'>Welcome back, !</h5>
          </div>
          <div className='modal-body'>
            <h3>What would you like to do first?</h3>
            <div className='choices'>
              <Choice
                icon='dashboard-icons far fa-tachometer-alt'
                text='View my Dashboard'
              />
              <Choice
                icon='dashboard-icons far fa-plus-circle'
                text='Create a New Campaign'
              />
              <Choice
                icon='dashboard-icons far fa-store'
                text='View my active campaigns'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashModal
