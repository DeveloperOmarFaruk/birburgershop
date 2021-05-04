import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWarp
} from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick={toggle}>
                <CloseIcon>

                </CloseIcon>
            </Icon>

            <SidebarMenu>
                <SidebarLink to="/">Burgers</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>

            <SideBtnWarp>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWarp>
        </SidebarContainer>
    )
}

export default Sidebar
