import React from 'react'
import ChooseTitle from '../../ChooseTitle.js'
import CardCampaign from '../CardCampaign.js'
import PreviousButton from '../../PreviousButton.js'
import NextButton from '../../NextButton.js'
import HelpMenu from '../../HelpMenu.js'
import Search from '../Search.js'

import Hdepot from '../../../../images/hdepot-logo.jpg'
import Lucia from '../../../../images/lucia3.jpg'
import Trane from '../../../../images/traneLogo.jpg'
import Pj from '../../../../images/pj_logo.jpg'
import Tacobell from '../../../../images/tacobell.png'
import PlanetFitness from '../../../../images/planet-fitness-logo.jpg'

export default () => {
    return(
        <div>
            <div className="timeline-step">
                <ChooseTitle 
                    title = "Choose a Client"
                />
                <p className="ch-cl">No Client Chosen</p>
                <div className="mb-4">
                    <Search 
                        searchPlaceholder = "Search Clients..."
                    />
                </div>
                <div className="list-types">
                    <CardCampaign 
                        cardImage = {Hdepot}
                        cardTitle = "Home Depot Indoor Outdoor"
                        cardAccount = " 109314"
                        contact = "Jane Smith"
                        firstIcon = "fal fa-cloud-sun edit fa-lg allowed"
                        secondIcon = ""
                    />
                    <CardCampaign 
                        cardImage = {Lucia}
                        cardTitle = "Saint Lucia Tourism Board"
                        cardAccount = " 1092314"
                        contact = "Joe Miha"
                        firstIcon = "fal fa-cloud-sun edit fa-lg allowed"
                        secondIcon = "fal fa-plane-alt delete-account fa-lg allowed"
                    />
                    <CardCampaign 
                        cardImage = {Trane}
                        cardTitle = "Trane"
                        cardAccount = " 1023314"
                        contact = "Harry Thomas"
                        firstIcon = "fal fa-cloud-sun edit fa-lg allowed"
                        secondIcon = ""
                    />
                    <CardCampaign 
                        cardImage = {Pj}
                        cardTitle = "Papa Johns"
                        cardAccount = " 1012314"
                        contact = "Harold Jonn"
                        firstIcon = "fal fa-cloud-sun edit fa-lg allowed"
                        secondIcon = "fal fa-basketball-ball edit fa-lg allowed"
                    />
                    <CardCampaign 
                        cardImage = {Tacobell}
                        cardTitle = "Taco Bell"
                        cardAccount = " 11291214"
                        contact = "Sally Jenson"
                        firstIcon = "fal fa-cloud-sun edit fa-lg allowed"
                        secondIcon = "fal fa-basketball-ball edit fa-lg allowed"
                    />
                    <CardCampaign 
                        cardImage = {PlanetFitness}
                        cardTitle = "Planet Fitness"
                        cardAccount = " 112434"
                        contact = "Jon Taco"
                        firstIcon = "fal fa-basketball-ball edit fa-lg allowed"
                        secondIcon = ""
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