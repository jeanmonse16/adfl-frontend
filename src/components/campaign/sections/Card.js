import React from 'react'

export default (props) => {
    return(
        <div className="card-container">
            <div className="account-card m-select-card c-card transparent">
                <div className="acct-img">
                    <img src={props.cardImage} className="img-fluid" />
                </div>
                <div className="account-info">
                    <div className="account-name">
                        {props.cardTitle}<span>{props.cardName}</span> 
                    </div>
                    <button type="button" className="btn btn-secondary blue-btn v-ads">{props.buttonText}</button>
                </div>
            </div>
        </div>
    )
}