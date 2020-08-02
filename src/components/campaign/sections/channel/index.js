import React from 'react'
import './channel.css'
import ChooseTitle from '../../ChooseTitle'
import Types from '../Types'

export default () => {
  return (
    <div>
      <div className='timeline-step animated fadeInUp campaign-type'>
        <ChooseTitle
          title='Choose an Ad Channel'
        />
        <div className='list-types'>
          {/*Para seleccionar un typeIcon y que aparezca su animacion,  al final del props "type-icon" añadir "selected"*/}
          <Types
            typeIcon='fab fa-google fa-5x animated type-icon selected'
            typeTitle='Google'
          />
          <Types
            typeIcon='fab fa-facebook-f fa-5x animated type-icon'
            typeTitle='Facebook'
          />
        </div>
      </div>
    </div>

  )
}
