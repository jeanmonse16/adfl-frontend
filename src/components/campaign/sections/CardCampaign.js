import React from 'react'

const CardCampaign = (props) => {
    const {cardImage, cardTitle, cardAccount, contact, firstIcon, secondIcon} = props
    return(
        <div className="card-container">
            <div className="card row account-card homeDepotAcct">
                <div className="acct-img">
                    <img src={cardImage} className="img-fluid" />
                </div>
                <div className="account-info">
                    <div className="account-name">
                        {cardTitle}
                    </div>
                    <div className="name">
                        Account #:
                        <span>{cardAccount}</span>
                    </div>
                    <div className="email">
                        Primary Contact:
                        <span>{contact}</span>
                    </div>
                    <div className="campaign-a">
                        <i className={firstIcon}></i>
                        <i className={secondIcon}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCampaign