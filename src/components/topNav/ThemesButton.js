import React from 'react'

const ThemesButton = () => {
  return (
      <div className='themes' id='themes'>
                Theme
        <div className='themeSelect'>
          <li id='light' className='lightTheme' value='light'>Light</li>
          <li id='dark' className='darkTheme' value='dark'>Dark</li>
        </div>
      </div>
    )
  }
export default ThemesButton
