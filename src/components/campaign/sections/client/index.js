import React from 'react'
import './client.css'
import ChooseTitle from '../../ChooseTitle'
import CardCampaign from '../CardCampaign'
import Search from '../Search'

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
        </div>
    )
}