import React from 'react'
import Navbar from '../Navbar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'

function Hero() {
    return (
        
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greates Pizza Ever</HeroH1>
                    <HeroP>Readin in 60 secounds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
