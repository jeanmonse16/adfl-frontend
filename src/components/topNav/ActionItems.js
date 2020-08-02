import React from 'react'
import ThemesButton from './ThemesButton'
import NotificationsButton from './NotificationsButton'
import ProfileButton from './ProfileButton'

const ActionItems = () => {
  return (
    <div className='action-items'>
      {/*Para mostar los menu de cada boton, quitar el "display: none" de sus respectivas clases en "dashboard.css" linea 69 y 129*/}
      <ThemesButton />
      <NotificationsButton />
      <ProfileButton />
    </div>
  )
}

export default ActionItems
