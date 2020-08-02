import React from 'react'

const ThemesButton = () => {
  return (
    <div>
      <div className='themes' id='themes'>
          Theme
      </div>
      <div className='themeSelect animated fadeInRight'>
        <ul>
          <li id='light' className='lightTheme' value='light'>Light</li>
          <li id='dark' className='darkTheme' value='dark'>Dark</li>
        </ul>
      </div>
    </div>
    )
  }
export default ThemesButton
