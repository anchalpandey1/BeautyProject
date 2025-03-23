import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

import { Outlet } from 'react-router-dom'
import NavbarArtist from '../../components/Navbar/NavbarArtist'

function Layout() {
    return (
        <>
            <NavbarArtist />
            <div className=' flex gap-10'>
                <Sidebar  />
                <Outlet />
            </div>


        </>
    )
}

export default Layout