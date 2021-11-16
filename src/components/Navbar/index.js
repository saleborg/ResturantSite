import React from 'react'
import logo from '../../images/hot-wok.png'
import { Nav, NavLink, NavIcon, Bars, HeaderImg, HeaderContainer, HeaderWrap, NavP } from './NavbarElements'

export const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <HeaderContainer>
                        <HeaderWrap>
                            <HeaderImg src={logo} alt='Hot Wok logo' />
                        </HeaderWrap>
                    </HeaderContainer>
                </NavLink>
                <NavIcon onClick={toggle}>
                    <NavP>Menu</NavP>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar