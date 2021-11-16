import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import { HashLink } from 'react-router-hash-link';




const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
            
                <SidebarLink to="/"><HashLink smooth to="/#starters">Förrätter</HashLink></SidebarLink>
                <SidebarLink to="/"><HashLink smooth to="/#vietnamesiskt">Vietnamesiskt</HashLink></SidebarLink>
                <SidebarLink to="/"><HashLink smooth to="/#sushi">Sushi</HashLink></SidebarLink>
                <SidebarLink to="/"> <HashLink smooth to="/#thai">Thai</HashLink></SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Beställ nu</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>

    )
}

export default Sidebar
