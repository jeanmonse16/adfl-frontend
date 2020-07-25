import React from 'react'
import ChooseTitle from '../../ChooseTitle.js'
import PreviousButton from '../../PreviousButton.js'
import NextButton from '../../NextButton.js'
import HelpMenu from '../../HelpMenu.js'
import Search from '../Search.js'
import Card from '../Card.js'
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
            <div className="control-panel-buttons">
                <PreviousButton />
                <NextButton />
            </div>
            <HelpMenu 
                title = "Campaign Type"
                text = "This block of text will explain to the user what they need to do in this section of the wizard. Each section is different, therefore this block is made up of dynamic text."
            />
        </div>
    )
}