import React from 'react'

const Card = (props) => {
    const {cardImage, cardTitle, cardName, buttonText} = props
    return(
        <div className="card-container">
            <div className="account-card m-select-card c-card transparent">
                <div className="acct-img">
                    <img src={cardImage} className="img-fluid" />
                </div>
                <div className="account-info">
                    <div className="account-name">
                        {cardTitle}<span>{cardName}</span> 
                    </div>
                    <button type="button" className="btn btn-secondary blue-btn v-ads">{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Card