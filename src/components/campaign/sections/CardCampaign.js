import React from 'react'

export default (props) => {
    return(
        <div className="card-container">
            <div className="card row account-card homeDepotAcct">
                <div className="acct-img">
                    <img src={props.cardImage} className="img-fluid" />
                </div>
                <div className="account-info">
                    <div className="account-name">
                        {props.cardTitle}
                    </div>
                    <div className="name">
                        Account #:
                        <span>{props.cardAccount}</span>
                    </div>
                    <div className="email">
                        Primary Contact:
                        <span>{props.contact}</span>
                    </div>
                    <div className="campaign-a">
                        <i className={props.firstIcon}></i>
                        <i className={props.secondIcon}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}