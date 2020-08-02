import React from 'react'
import './adSets.css'
import ChooseTitle from '../../ChooseTitle'
import Search from '../Search'
import Card from '../Card'

import AcctImg from '../../../../images/acctImg.png'

export default () => {
    return(
        <div>
            <div className="timeline-step animated fadeInUp">
                <ChooseTitle 
                    title = "Select the Facebook Ad Set(s) You Want To Include From Each Campaign"
                />
                <div className="mb-4">
                    <Search 
                        searchPlaceholder = "Search Ad..."
                    />
                </div>
                <div className="list-types">
                    <Card 
                        cardImage = {AcctImg}
                        cardTitle = "Ad Set Name: "
                        cardName = "NYC (Health and Fitness Segment)"
                        buttonText = "Open This Ad Set"
                    />
                    <Card 
                        cardImage = {AcctImg}
                        cardTitle = "Ad Set Name: "
                        cardName = "NYC (General Segment)"
                        buttonText = "Open This Ad Set"
                    />
                    <Card 
                        cardImage = {AcctImg}
                        cardTitle = "Ad Set Name: "
                        cardName = "NYC (Family Travel)"
                        buttonText = "Open This Ad Set"
                    />
                </div>
            </div>
        </div>
    )
}