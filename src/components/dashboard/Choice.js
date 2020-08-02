import React from 'react'

const Choice = (props) => {
    const { frontStatus, backStatus, iconFront, textFront, iconBackLeft, textBackLeft, iconBackRight, textBackRight} = props 
    return(
        <div className="n-camp">
            <div className={frontStatus}>
                <i className={iconFront}></i>
                <p>{textFront}</p>
            </div>
            <div className={backStatus}>
                <a href="#">
                    <div className="opt adv">
                        <i className={iconBackLeft}></i>
                        <p>{textBackLeft}</p>
                    </div>
                </a>
                <a href="#">
                    <div className="opt wiz">
                        <i className={iconBackRight}></i>
                        <p>{textBackRight}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Choice