import React from 'react'
import  './details.css'
import FormGroup from './FormGroup'
import ChooseTitle from '../../ChooseTitle'

const Details = () => {
  return (
    <div className='timeline-step animated fadeInUp c-details active'>
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
  )
}

export default Details
