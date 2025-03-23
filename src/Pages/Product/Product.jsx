import React from 'react'
import '../LandingPage/LandingPage.css'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import CategoriesProduct from '../../components/Categories/CategoriesProduct'
import AppLandingPageBottomNavBar from '../../components/AppLandingPageBottomNavBar/AppLandingPageBottomNavBar'
import MobileMenuBar from '../../components/MobileMenuBar/MobileMenuBar'
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading'
import ArtistProductNav from '../../components/ArtistNavbar/ArtistProductNav';


const Product = () => {
    const showsideMenu = useSelector((state) => state.value.ShowSideMenuBar)
    return (
        <div className={`${showsideMenu ? 'h-screen' : null} w-full min-h-screen bg-[#F3EFEF] overflow-hidden 
        custom-css-on-landing-pages
        `}>
            < MobileMenuBar />           
            <div className='bg-[#F3EFEF]'>
            <ArtistProductNav />
            <div className='hidden md:block'>
            <Navbar />
            <Heading AllArtist landingPage backbutton />
      
            </div>

                <CategoriesProduct />
                <Card />
                <Footer />
                <AppLandingPageBottomNavBar />
            </div>
            
        </div>
    )
}

export default Product
