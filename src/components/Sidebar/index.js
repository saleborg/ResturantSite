import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink smooth to="/#starters">Förrätter</SidebarLink>
                <SidebarLink smooth to="/#vietnamesiskt">Vietnamesiskt</SidebarLink>
                <SidebarLink smooth to="/#sushi">Sushi</SidebarLink>
                <SidebarLink smooth to="/#thai">Thai</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Beställ nu</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>

    )
}

export default Sidebar
