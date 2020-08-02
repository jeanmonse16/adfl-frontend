import React from 'react'
import './type.css'
import ChooseTitle from '../../ChooseTitle'
import Types from '../Types'

export default () => {
  return (
    <div>
      <div className='timeline-step animated fadeInUp campaign-type'>
        <ChooseTitle
          title='Choose Your Trigger'
        />
        <div className='list-types'>
          <div className='list-center'>
            <Types
              typeIcon='fal fa-cloud-sun fa-5x animated type-icon'
              typeTitle='Weather'
            />
            <Types
              typeIcon='fal fa-plane-alt fa-5x animated type-icon'
              typeTitle='Travel'
            />
            <Types
              typeIcon='fal fa-film fa-5x animated type-icon'
              typeTitle='Film'
            />
            <Types
              typeIcon='fal fa-tv fa-5x animated type-icon'
              typeTitle='Live Ads'
            />
            <Types
              typeIcon='fal fa-tv fa-5x animated type-icon'
              typeTitle='OTT TV'
            />
            <Types
              typeIcon='fal fa-basketball-ball fa-5x animated type-icon'
              typeTitle='Sports'
            />
            <Types
              typeIcon='fal fa-football-ball fa-3x animated type-icon'
              typeTitle='Football'
            />
            <Types
              typeIcon='fal fa-basketball-hoop fa-3x animated type-icon'
              typeTitle='Basketball'
            />
            <Types
              typeIcon='fal fa-baseball fa-3x animated type-icon'
              typeTitle='Baseball'
            />
            <Types
              typeIcon='fal fa-hockey-sticks fa-3x animated type-icon'
              typeTitle='Hockey'
            />
            <Types
              typeIcon='fal fa-futbol fa-3x animated type-icon'
              typeTitle='Soccer'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
