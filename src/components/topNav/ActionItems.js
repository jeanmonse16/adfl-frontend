import React from 'react'
import ThemesButton from './ThemesButton.js'
import NotificationsButton from './NotificationsButton.js'
import ProfileButton from './ProfileButton.js'


class ActionItems extends React.Component{
    render(){
        return(
            <div className="action-items">
                <ThemesButton />
                <NotificationsButton />
                <ProfileButton />
            </div>
        )
    }
}

export default ActionItems