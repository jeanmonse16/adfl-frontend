import React from 'react'

class NotificationsButton extends React.Component{
    render(){
        return(
            <div className="notifications">
                <i className="fal fa-bell"></i>
                <i className="fas fa-circle alert"></i>
            </div>
        )
    }
}

export default NotificationsButton