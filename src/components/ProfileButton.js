import React from 'react'
import ProfileImage from '../images/employee.jpg'

class ProfileButton extends React.Component{
    render(){
        return(
            <div>
                <div className="profile">
                    <img src={ProfileImage} />
                </div>
                <div className="user_menu">
                    <ul>
                        <li>
                            <a><i className="fal fa-user-circle mr-2"></i>My Profile</a>
                        </li>
                        <li>
                            <a><i className="fal fa-unlock mr-2"></i>Change Password</a>
                        </li>
                        <li>
                            <a><i className="fal fa-plug mr-2"></i>Integrations</a>
                        </li>
                        <li>
                            <a><i className="fal fa-plus mr-2"></i>Invite Team Members</a>
                        </li>
                        <li>
                            <a><i className="fal fa-question mr-2"></i>Help Center</a>
                        </li>
                        <li>
                            <a><i className="fal fa-sign-out mr-2"></i>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProfileButton