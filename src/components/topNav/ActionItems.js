import React from 'react'
import ThemesButton from './ThemesButton'
import NotificationsButton from './NotificationsButton'
import ProfileButton from './ProfileButton'

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
