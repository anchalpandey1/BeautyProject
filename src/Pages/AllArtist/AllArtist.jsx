
// import ArtistServiceCard from '../../components/ArtistService/ArtistServiceCard'
// import ArtistProduct from '../../components/ArtistProduct/ArtistProduct'
// import ArtistServiceCard from '../../components/ArtistServiceCard'



// 

// jo filter screen h mobile ke liye use bhi yhi use krna h.








import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import ArtistProduct from '../ArtistProduct/ArtistProduct';
// import ArtistProductCard from '../ArtistProduct/ArtistProductCard';
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading';
import ArtistProductCard from '../../components/ArtistProduct/ArtistProductCard';
import ArtistServices from '../../components/ArtistService/ArtistServices';
import MobileMenuBar from '../../components/MobileMenuBar/MobileMenuBar';
const AllArtist = () => {
    // artist product category.
    const category = ['All', 'Hair', 'Makeup','Skincare', 'Nail Care','Waxing']

    // stored selected category by the user.
    const [selectedCategory, setSelectedCategory] = useState('All');

    // when user will click on specific category.
    const selectCategory = (category)=>{
        setSelectedCategory(category)
    }

    return (
        <div className='borders border-black w-full bg-[#F3EFEF] pb-[1rem] min-h-[19rem]s lg:min-h-[21rem]s xl:min-h-[25rem]s h-full'>
            
            <Navbar/>
            <Heading AllArtist landingPage  backbutton/>

            <div className='hidden md:block'>
                {/* <Heading/> */}
                <h1 className='text-center font-SulphurPoint font-bold text-3xl lg:text-[32px] text-[#2D2D2D]'>Artist</h1>

            </div>

            <div className='w-[85%] md:w-[95%] mt-[2rem] relative mx-auto flex flex-col'>
                <h2 className='md:hidden font-SulphurPoint font-bold pb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-[#2D2D2D]'>Category</h2>
            
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                className="mySwiper h-fit md:hidden"
            >
                {
                    category.map((val, index)=>{
                        return(
                            <SwiperSlide
                            key={index}
                            onClick={()=>{selectCategory(val)}}
                            className='w-[20rem]s w-fit bg-transparent'>
                                <div className={`border md:border-[2px] border-[#D66F11] ${selectedCategory === val ? 'bg-[#D66F11]': null} rounded-[20px] w-fit px-4 py-[5px] md:px-6 cursor-pointer`}>
                                    <p className={`font-Inter font-normal text-base md:text-lg lg:text-xl ${selectedCategory === val ? 'text-[#FEFEFE]': 'text-[#5F5F5F]'}`}>{val}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            {/* <ArtistProductCard/> */}
            {/* <ArtistProductCard/> */}
            {/* <ArtistServiceCard/> */}
            <ArtistServices/>
            </div>
        </div>

    )
        // <div>
        //     <ArtistServiceCard/>
        // </div>
   
}

export default AllArtist
