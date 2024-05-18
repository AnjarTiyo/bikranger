import React from 'react'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '../ui/menubar'

const Header = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Home</MenubarTrigger>
                <MenubarTrigger>Order</MenubarTrigger>
                <MenubarTrigger>Price</MenubarTrigger>
                <MenubarTrigger>Service</MenubarTrigger>
                <MenubarTrigger>Contact</MenubarTrigger>
            </MenubarMenu>
        </Menubar>

    )
}

export default Header