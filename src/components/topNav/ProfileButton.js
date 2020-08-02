import React from 'react'
import ProfileImage from '../../images/employee.jpg'

const ProfileButton = () => {
  return (
      <div>
        <div className='profile'>
          <img src={ProfileImage} />
        </div>
        <div className='user_menu animated fadeInRight'>
          <ul>
            <li>
              <a><i className='fal fa-user-circle mr-2' />My Profile</a>
            </li>
            <li>
              <a><i className='fal fa-unlock mr-2' />Change Password</a>
            </li>
            <li>
              <a><i className='fal fa-plug mr-2' />Integrations</a>
            </li>
            <li>
              <a><i className='fal fa-plus mr-2' />Invite Team Members</a>
            </li>
            <li>
              <a><i className='fal fa-question mr-2' />Help Center</a>
            </li>
            <li>
              <a><i className='fal fa-sign-out mr-2' />Logout</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }

export default ProfileButton
