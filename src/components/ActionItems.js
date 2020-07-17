import React from 'react'
import ThemesButton from '../components/ThemesButton.js'
import NotificationsButton from '../components/NotificationsButton.js'
import ProfileButton from '../components/ProfileButton.js'


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