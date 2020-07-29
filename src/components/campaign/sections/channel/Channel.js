import React from 'react'
import ChooseTitle from '../../ChooseTitle.js'
import Types from '../Types.js'
import NextButton from '../../NextButton.js'
import PreviousButton from '../../PreviousButton.js'
import HelpMenu from '../../HelpMenu.js'

export default () => {
  return (
    <div>
      <div className='timeline-step campaign-type'>
        <ChooseTitle
          title='Choose an Ad Channel'
        />
        <div className='list-types'>
          <Types
            typeIcon='fab fa-google fa-5x animated type-icon'
            typeTitle='Google'
          />
          <Types
            typeIcon='fab fa-facebook-f fa-5x animated type-icon'
            typeTitle='Facebook'
          />
        </div>
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
