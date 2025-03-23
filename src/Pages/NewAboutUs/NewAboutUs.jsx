import React from 'react'
import ArtistDetails from '../../components/ArtistDetails/ArtistDetails'
import Artistdemo from '../../components/ArtistDetails/Artistdemo'
import AboutArtist from '../../components/AboutArtist/AboutArtist'
import DiscountOnServies from '../../components/DiscountOnServices/DiscountOnServies'
import ArtistNavbar from '../../components/ArtistNavbar/ArtistNavbar'
import Heading from '../../components/Heading/Heading'
import Review from '../../components/Reviews/Review'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BestBeautyPicks from '../../components/BestBeautyPicks/BestBeautyPicks'
import ArtistNiche from '../../components/ArtistNiche/ArtistNiche'
import ArtistNicheServices from '../../components/ArtistNicheServices/ArtistNicheServices'
// import ArtistPortfolio from '../../components/ArtistPortfolio/ArtistPortfolio'


import image43 from '../../assets/Image/nature4-3.jpg'
import dmiImg from '../../assets/Image/pexels.jpg'
import dmiImg2 from '../../assets/Image/pic1.png'
// import ArtistPortfolio2 from '../../components/ArtistPortfolio/ArtistPortfolio2'

const NewAboutUs = () => {
    return(
        <div className='bg-[#F3EFEF]'>
            <ArtistNavbar/>
            <div className='hidden md:block'>
                <Navbar/>
                <Heading fromWhere = {'ArtistSection'}/>
            </div>

            {/* <div className='border border-black'>
                <img className='w-[350px]s h-[350px]s w-[430px]s h-[400px]s
                h-[400px]S w-[800px]S
                h-[200px] w-[150px]
                ' src={dmiImg2} alt="" />
                
            </div> */}




            <ArtistDetails/>

            {/* for overview section */}
            {/* <AboutArtist/>
            <Review/> */}

            {/* for sevices */}
            {/* <ArtistNiche/>
            <ArtistNicheServices/>
            <div className='md:hidden fixed bottom-0 w-full h-[75px] bg-[#DDDDDD] bg-[#b82f4f]s flex items-center justify-center'> 
                <p className='font-Roboto font-bold cursor-pointer text-lg text-[#504949] text-whites'>Send Chat Request</p> 
            </div> */}


            {/* for portfolio */}
            {/* <ArtistPortfolio/> */}
            {/* <ArtistPortfolio2/> */}
            {/* <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>           
            <div className='w-[85%] md:w-[85%]   rounded-xl 
            lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]
            grid grid-cols-2 gap-4 md:gap-6
            '>
                <img className='rounded-[8px]' src={image43} alt="" />
                <img className='rounded-[8px]' src={image43} alt="" />
                <img className='rounded-[8px]' src={image43} alt="" />
                <img className='rounded-[8px]' src={image43} alt="" />
            </div>
            </div> */}
        



            <div className='hidden md:block'>
                {/* for overview section */}
                {/* <BestBeautyPicks/> */}
                {/* <Footer/> */}
            </div>
        </div>
    )
}

export default NewAboutUs
