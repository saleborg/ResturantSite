import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    SocialAdress,
    SocialPhone

} from './FooterElements';



const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Hot Wok</SocialLogo>
                        <SocialAdress href="https://www.google.com/maps/place/Hot+Wok/@56.8787595,14.7971473,17z/data=!3m2!4b1!5s0x4657238caba288b3:0x4b020f87f7eeb0f8!4m5!3m4!1s0x465723f4ab6a0321:0xfd6332e28f331a66!8m2!3d56.8787566!4d14.799336">Lidbergsgatan 4 352 30 Växjö</SocialAdress>
                        <SocialPhone>
                            <FaPhoneAlt />
                            0470-666 66
                        </SocialPhone>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaMailBulk />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>


    )
}

export default Footer
