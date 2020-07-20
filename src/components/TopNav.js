import React from 'react'
import AgencyShortcut from '../components/AgencyShortcut.js'
import ActionItems from '../components/ActionItems.js'
import HamburgerMenuButton from '../components/HamburgerMenuButton.js'

class TopNav extends React.Component{
    render(){
        const {title} = this.props
        return(
            <div>
                <nav className="top-nav">
                    <HamburgerMenuButton />
                    <div className="nav-center">
                        <h1 className="welcome-campaign-creation">{title}</h1>
                        <AgencyShortcut />
                    </div>
                    <ActionItems />
                </nav>
            </div>
        )
    }
}

export default TopNav