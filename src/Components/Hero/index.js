import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar/index'
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
} from './HeroElements'
const Hero = () => {

    const[isOpen, steIsOpen] = useState(false)

    const toggle = () =>{
        steIsOpen(!isOpen)
    }
    return (
        <>
            <HeroContainer>
                <Navbar toggle = {toggle}/>
                <Sidebar isOpen = {isOpen} toggle = {toggle}/>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Burger Ever</HeroH1>
                        <HeroP>Ready in only 3 minutes</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
