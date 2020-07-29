import React from 'react'
import ChooseTitle from '../../ChooseTitle.js'
import FormGroup from './FormGroup.js'
import NextButton from '../../NextButton.js'
import HelpMenu from '../../HelpMenu.js'

const Details = () => {
  return (
    <div>
      <div className='timeline-step c-details active'>
        <ChooseTitle
          title='AdFluence Campaign Detail'
        />
        <div className='c-details-form'>
          <div className='section'>
            <p className='title'>This information exists only within AdFluence and is seperate from your individual channel campaigns.</p>
            <small>What is the name, start and end date of your new AdFluence Campaign.</small>
          </div>
          <div className='col-lg-12'>
            <FormGroup
              formControlFor='campaign-name'
              formControlName='Campaign Name'
              formControlId='campaign-name'
              formControlDescription='campaign-name'
            />
          </div>
          <div className='col-lg-12'>
            <FormGroup
              formControlFor='startTime'
              formControlName='Start Date/Time'
              formControlId='startTime'
              formControlDescription='Start calendar'
            />
          </div>
          <div className='col-lg-12'>
            <FormGroup
              formControlFor='enddatetime'
              formControlName='End Date/Time'
              formControlId='enddatetime'
              formControlDescription='End calendar'
            />
          </div>
        </div>
        <div className='c-details-form'>
          <div className='col-lg-12'>
            <div className='camp-objective'>
              <div className='section'>
                <p>AdFluence Campaign Objective</p>
                <small>Let us know what your goals are for your new AdFluence Campaign schedule. This can be as brief or descriptive as you like.</small>
              </div>
              <div>
                <div className='form-group'>
                  <textarea className='form-control hide' id='exampleFormControlTextarea1' placeholder='The objective of the campaign is to...' rows='3' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='control-panel-buttons'>
        <NextButton />
      </div>
      <HelpMenu
        title='Campaign Type'
        text='This block of text will explain to the user what they need to do in this section of the wizard. Each section is different, therefore this block is made up of dynamic text.'
      />
    </div>
  )
}

export default Details
