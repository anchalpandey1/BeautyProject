import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../../Pages/ArtistPortfolioImage/ArtistPortfolioImage.css'

// import '../ArtistPortfolioImage/ArtistPortfolioImage.css'


// import required modules
import { FreeMode, Navigation, Pagination, Thumbs , Autoplay } from 'swiper/modules';


// category icon
import makeupImage from '../../assets/Image/icon-park-lipstick1.png'
import hairImage from '../../assets/Image/mingcute_hair.png'
import nailCareImage from '../../assets/Image/nail-care-image.png'
import waxingImage from '../../assets/Image/WaxingImage.png'
import specialpackagesImage from '../../assets/Image/Special-Packages-image.png'

// left arrow icon
import { IoArrowBack } from "react-icons/io5";

const ArtistServicesCategory = () => {
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // data for catgories.
    const portfolioCategroy = [
        {
            serviceImage: makeupImage, 
            servicesName : 'Makeup'
        },
        {
            serviceImage: hairImage, 
            servicesName : 'Hair'
        },
        {
            serviceImage: nailCareImage, 
            servicesName : 'Nail care'
        },
        {
            serviceImage: waxingImage, 
            servicesName : 'Waxing'
        },
        {
            serviceImage: specialpackagesImage, 
            servicesName : 'Special Packages'
        },
    ]

    // stored selected category by the user.
    const [selectedCategory, setSelectedCategory] = useState('Makeup');

    // when user will click on specific category.
    const selectCategory = (category)=>{
        setSelectedCategory(category)
    }



    return (
        <div className='borderss h-[5rem]  w-[95%]s md:bg-[#FFFFFF] max-w-[1000px]s  my-4 lg:my-5 mx-auto flex items-center justify-between  gap-x-[2rem]'>
                
            <Swiper 
                slidesPerView={'auto'}
                className=" w-[100%] mb-1 mt-1"
                >
                {
                    portfolioCategroy.map((val, index)=>{
                        return(
                            <SwiperSlide
                            key={index}
                            className='w-fit borders border-black bg-transparent px-2 md:px-4' >
                                <div
                                onClick={()=>{selectCategory(val.servicesName)}}
                                className={`borders border-black w-fit px-4 py-1 sm:px-6 borders md:border-[3px]s ${selectedCategory === val.servicesName ? 'border-[#D66F11]':'border-[#FFFFFF]' }  rounded-xl flex flex-col md:flex-row items-center justify-center gap-x-2 md:gap-x-3 cursor-pointer `}>
                                    {/* background: linear-gradient(78.14deg, #FFD8D8 7.08%, #FAE7A1 111.96%); */}

                                    <div className=' 
                                    bg-gradient-to-r from-[#FFD8D8] to-[#FAE7A1] 
                                    h-10 w-10 sm:h-12 sm:w-12 md:w-12 md:h-12 xl:w-9s md:h-9s borders border-black rounded-[2rem] p-1 lg:p-2'>
                                        <img  src={val.serviceImage} alt="" />
                                    </div>
                                    <p className='font-DMSans font-normal text-sm sm:text-base md:text-xl xl:text-[22px] text-[#2D2D2D]'>{val.servicesName}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default ArtistServicesCategory
