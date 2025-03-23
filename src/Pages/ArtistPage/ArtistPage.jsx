import React from 'react'
import ArtistNavbar from '../../components/ArtistNavbar/ArtistNavbar';
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading'
import ArtistDetails from '../../components/ArtistDetails/ArtistDetails'
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const ArtistPage = () => {
    return (
        <div className='bg-[#F3EFEF]'>
            <ArtistNavbar />
            <div className='hidden md:block'>
                <Navbar/>
                <Heading fromWhere = {'ArtistPage'}/>
            </div>
            <ArtistDetails/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default ArtistPage
