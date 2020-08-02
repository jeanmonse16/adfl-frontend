import React from 'react'
import AgencyShortcut from './AgencyShortcut'
import ActionItems from './ActionItems'
import HamburgerMenuButton from './HamburgerMenuButton'

const TopNav = (props) => {
  const { title } = props
  return (
    <div>
      <nav className='top-nav animated fadeInDown'>
        <HamburgerMenuButton />
        <div className='nav-center'>
          <h1 className='welcome-campaign-creation'>{title}</h1>
          <AgencyShortcut />
        </div>
        <ActionItems />
      </nav>
    </div>
  )
}

export default TopNav
