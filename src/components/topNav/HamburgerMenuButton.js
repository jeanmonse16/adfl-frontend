import React from 'react'

class HamburgerMenuButton extends React.Component{
    render(){
        return(
            <div className="hamburger-menu">
                <div className="hamburger" id="hamburger-9">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        )
    }
}

export default HamburgerMenuButton