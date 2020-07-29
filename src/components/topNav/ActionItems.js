import React from 'react'
import ThemesButton from './ThemesButton.js'
import NotificationsButton from './NotificationsButton.js'
import ProfileButton from './ProfileButton.js'

const ActionItems = () => {
  return (
    <div className='action-items'>
      <ThemesButton />
      <NotificationsButton />
      <ProfileButton />
    </div>
  )
}

export default ActionItems
