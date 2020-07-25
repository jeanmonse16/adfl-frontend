import React from 'react'
import ChooseTitle from '../../ChooseTitle.js'
import Search from '../Search.js'
import Card from '../Card.js'
import AcctImg from '../../../../images/acctImg.png'
import NextButton from '../../NextButton.js'
import PreviousButton from '../../PreviousButton.js'
import HelpMenu from '../../HelpMenu.js'

export default () => {
    return(
        <div>
            <div className="timeline-step">
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