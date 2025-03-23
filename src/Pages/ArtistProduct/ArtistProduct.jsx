import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Heading from '../../components/Heading/Heading'
import Navbar from '../../components/Navbar/Navbar'
import Box from '../../components/ArtistProductBox/Box'
import ArtistProductApp from '../../components/ArtistProductBox/ArtistProductApp'
import MobileMenuBar from '../../components/MobileMenuBar/MobileMenuBar'
import Categories from '../../components/Categories/Categories'
import AboutProduct from '../../components/AboutProduct/AboutProduct'
import Footer from '../../components/Footer/Footer'
import AppLandingPageBottomNavBar from '../../components/AppLandingPageBottomNavBar/AppLandingPageBottomNavBar'
import ProductReview from '../../components/ProductReview/ProductReview';
const ArtistProduct = () => {
    function showsideMenu() {
        //   console.log("Showing side menu...");
    }

    return (
        <div className={`${showsideMenu ? '' : null} w-full min-h-screen bg-[#F3EFEF] overflow-hidden 
        custom-css-on-landing-pages
        `}>
            < MobileMenuBar />

            <div className='bg-[#F3EFEF]'>
                <Navbar />
                <Heading AllArtist landingPage backbutton />

               
            </div>
         
            <div className={`md:hidden`}>
                <ArtistProductApp />
            </div>

            <div className=''>
                <Box />
                <AboutProduct/>
                <ProductReview/>
                <Footer />
                <AppLandingPageBottomNavBar />
            </div>
            <div>

            </div>

        </div>
    )


}
export default ArtistProduct