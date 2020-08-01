import React from 'react'
import './campaign.css'
import ChooseTitle from '../../ChooseTitle'
import Search from '../Search'
import Card from '../Card'

import Lucia from '../../../../images/lucia3.jpg'

export default () => {
    return(
        <div>
            <div className="timeline-step list-of-campaigns">
                <ChooseTitle 
                    title = "Select One or More Facebook Campaign(s)"
                />
                <div className="section">
                    <div className="discrepencies">
                        <p>
                            <i className="fas fa-exclamation-square mr-1"></i>
                            Discrepencies found in your campaign scheduling!
                        </p>
                    </div>
                </div>
                <div className="mb-4">
                    <Search 
                        searchPlaceholder = "Search Campaigns..."
                    />
                </div>
                <div className="list-types">
                    <Card 
                        cardImage = {Lucia}
                        cardTitle = "Campaign Name: "
                        cardName = "Florida Market 2020"
                        buttonText = "View Ad Sets"
                    />
                    <Card 
                        cardImage = {Lucia}
                        cardTitle = "Campaign Name: "
                        cardName = "New York Markets 2020"
                        buttonText = "View Ad Sets"
                    />
                    <Card 
                        cardImage = {Lucia}
                        cardTitle = "Campaign Name: "
                        cardName = "California Markets 2020"
                        buttonText = "View Ad Sets"
                    />
                    <Card 
                        cardImage = {Lucia}
                        cardTitle = "Campaign Name: "
                        cardName = "Nevada Markets 2020"
                        buttonText = "View Ad Sets"
                    />
                </div>
            </div>
        </div>
    )
}