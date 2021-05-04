import React from 'react'
import {
    FaYoutube,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaFacebook
} from 'react-icons/fa'
import{
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    Copyright
} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">BIR BURGER SHOP</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Youtube" >
                                <FaYoutube/>
                            </SocialIconLink>


                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Twitter" 
                            rel="noopener noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>


                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Linkedin" 
                            rel="noopener noreferrer">
                                <FaLinkedin/>
                            </SocialIconLink>


                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Instagram" 
                            rel="noopener noreferrer">
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink 
                            href="/" 
                            target="_blank" 
                            aria-label="Facebook" 
                            rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            <Copyright to="/"> &copy; Copyright Reserved By &#9829; Developer.OmarFaruk</Copyright>
        </FooterContainer>
    )
}

export default Footer
