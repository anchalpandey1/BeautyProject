
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 

// import Artist Product card.
import ArtistProductCard from './ArtistProductCard';


const ArtistProduct = () => {

    // artist product category.
    const category = ['All', 'Hair', 'Makeup','Skincare', 'Nail Care','Waxing']

    // stored selected category by the user.
    const [selectedCategory, setSelectedCategory] = useState('All');

    // when user will click on specific category.
    const selectCategory = (category)=>{
        setSelectedCategory(category)
    }

    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] min-h-[19rem]s lg:min-h-[21rem]s xl:min-h-[25rem]s h-full'>
            
            <div className='relative w-[90%] xs:w-[85%] sm:w-[90%] md:w-[85%] lg:w-[85%] max-w-[400px] mx-auto md:flex md:max-w-[1000px] flex flex-col'>
                <h2 className='font-SulphurPoint font-bold pb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-[#2D2D2D]'>Category</h2>
            
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                className="mySwiper h-fit"
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

            <ArtistProductCard/>
            </div>
        </div>
    )
}

export default ArtistProduct

