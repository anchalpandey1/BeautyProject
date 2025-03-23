import React , {useState, useEffect } from 'react'

import '../LandingPage/LandingPage.css'
import { useSelector, useDispatch } from 'react-redux';


import Heading from '../../components/Heading/Heading'
import Navbar from '../../components/Navbar/Navbar'
import ChooseByCategory from '../../components/ChooseByCategory/ChooseByCategory'
import BestBeautyPicks from '../../components/BestBeautyPicks/BestBeautyPicks'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import ArtistsSpotlight from '../../components/ArtistsSpotlight/ArtistsSpotlight'
import Review from '../../components/Reviews/Review'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import GetGlamgoMobileApp from '../../components/GetGlamgoMobileApp/GetGlamgoMobileApp'
import Categories from '../../components/Categories/Categories'
import AppLandingPageBottomNavBar from '../../components/AppLandingPageBottomNavBar/AppLandingPageBottomNavBar'
import MobileMenuBar from '../../components/MobileMenuBar/MobileMenuBar'
import WelcomeToGlamgo from '../../components/WelcomeToGlamgo/WelcomeToGlamgo'
// import Splash from '../SplashPage/Splash';
import SplashScreen from '../../components/SplashScreen/SplashScreen'



const LandingPage = () => {
    const [showLoader, setShowLoader] = useState(true);



    useEffect(() => {
        // Simulate a 2-second loading time
        const loaderTimeout = setTimeout(() => {
            setShowLoader(false);
            console.log(showLoader)
        }, 2000);

    
        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(loaderTimeout);
    }, []);
    


    const showsideMenu = useSelector((state) => state.value.ShowSideMenuBar)

    return (
        <div>
            {
                showLoader ? 
                <SplashScreen/>
                :
                <div className={`${showsideMenu ? 'h-screen': null} w-full min-h-screen bg-[#FFFFFF] overflow-hidden 
        custom-css-on-landing-pages
        `}>
        < MobileMenuBar/>
            {/* top section with different background color */}
            <div className='md:py-6
		bg-[#F3F3F3] 
        
        md:bg-gradient-to-b from-[#A21D3C] to-[#FFFFFF] via-[#932f47]
        border-2 border-blacks'>

            {/* Navbar of the website */}
            <Navbar/>

            

            {/* Heading of the website */}
            <Heading landingPage />

            {/* Welcome to galmgo */}
            {/* <WelcomeLast/> */}
            <WelcomeToGlamgo/>


            {/* choose by categories in mobile view */}
            <Categories/>
            
            </div>

            <div className=''>
                <ChooseByCategory/>

                <BestBeautyPicks/>


                <PopularProducts/>
                <ArtistsSpotlight/>

                <div className='hidden md:block'>
                <Review/>
                </div>
                <GetGlamgoMobileApp/>
               
                <Newsletter/>
                <Footer/>

                <AppLandingPageBottomNavBar/>
            </div>
            <div>

            </div>
        
        </div>

            }
        </div>
    )
}

export default LandingPage
