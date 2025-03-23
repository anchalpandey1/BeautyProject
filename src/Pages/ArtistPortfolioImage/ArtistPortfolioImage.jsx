import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../../Pages/ArtistPortfolioImage/ArtistPortfolioImage.css'

// import '../ArtistPortfolioImage/ArtistPortfolioImage.css'


// import required modules
import { FreeMode, Navigation, Pagination, Thumbs , Autoplay } from 'swiper/modules';


import ArtistPortfolioImage1 from '../../assets/Image/ArtistPortfolioImg1.png'
import ArtistPortfolioImage2 from '../../assets/Image/ArtistPortfolioImg2.png'
import ArtistPortfolioImage3 from '../../assets/Image/ArtistPortfolioImg3.png'
import ArtistPortfolioImage4 from '../../assets/Image/ArtistPortfolioImg4.png'
import ArtistPortfolioImage5 from '../../assets/Image/ArtistPortfolioImg5.png'
import ArtistPortfolioImage6 from '../../assets/Image/ArtistPortfolioImg6.png'
import ArtistPortfolioImage7 from '../../assets/Image/ArtistPortfolioImg7.png'

// category icon
import makeupImage from '../../assets/Image/icon-park-lipstick1.png'
import hairImage from '../../assets/Image/mingcute_hair.png'
import nailCareImage from '../../assets/Image/nail-care-image.png'
import waxingImage from '../../assets/Image/WaxingImage.png'
import specialpackagesImage from '../../assets/Image/Special-Packages-image.png'

// left arrow icon
import { IoArrowBack } from "react-icons/io5";

const ArtistPortfolioImage = () => {
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

    //data for artist portfolio image.
    const portfolioImage = [ 
        {ArtistPortfolioImage :ArtistPortfolioImage1},
        {ArtistPortfolioImage :ArtistPortfolioImage2},
        {ArtistPortfolioImage :ArtistPortfolioImage3},
        {ArtistPortfolioImage :ArtistPortfolioImage4},
        {ArtistPortfolioImage :ArtistPortfolioImage5},
        {ArtistPortfolioImage :ArtistPortfolioImage6},
        {ArtistPortfolioImage :ArtistPortfolioImage7},
    ]

    // stored selected category by the user.
    const [selectedCategory, setSelectedCategory] = useState('Makeup');

    // when user will click on specific category.
    const selectCategory = (category)=>{
        setSelectedCategory(category)
    }
    return (
        <div className='  max-h-[100vh] h-fit overflow-hidden'>
        <div className='w-[95%] md:w-[90%] xl:w-[90%] max-w-[1000px] my-1 md:my-2 lg:my-3 h-full mx-auto flex items-center justify-between  gap-x-[2rem]'>
                <div>
                    <Link to="/artistPage/portfolio"
                    className='w-[30px] md:w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] md:bg-[#AD3853] cursor-pointer
                        rounded-full flex items-center justify-center
                    '>
                        <IoArrowBack className='text-2xl md:text-xl lg:text-[28px] text-[#504949] md:text-[#F3EFEF]'/>
                    </Link>
                </div>
            <Swiper 
                slidesPerView={'auto'}
                className=" w-[100%] mb-1 mt-1"
                >
                {
                    portfolioCategroy.map((val, index)=>{
                        return(
                            <SwiperSlide
                            key={index}
                            className='w-fit bg-transparent px-2 md:px-4' >
                                <div
                                onClick={()=>{selectCategory(val.servicesName)}}
                                className={`w-fit px-4 py-1 sm:px-6 border-2 md:border-[3px] ${selectedCategory === val.servicesName ? 'border-[#D66F11]':'border-[#FFFFFF]' }  rounded-xl flex items-center justify-center gap-x-2 md:gap-x-3 bg-[#FFFFFF] cursor-pointer`}>
                                    <div className=' h-5 w-5 sm:h-6 sm:w-6 xl:w-9 md:h-9 '>
                                        <img  src={val.serviceImage} alt="" />
                                    </div>
                                    <p className='font-DMSans font-normal text-base sm:text-lg md:text-xl xl:text-2xl text-[#2D2D2D]'>{val.servicesName}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>



        <div className='h-full md:max-h-fit  md:min-h-[90vh] md:h-[90vh] md:flex w-[100%] lg:w-[85%] md:max-w-[950px] mx-auto' >
        <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                loop= {true}
                navigation = {true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation ,Autoplay ,Thumbs]}
                className="mySwiper2  h-[75vh]  md:h-[88vh] lg:h-[83vh] max-w-[630px] max-h-[650px] w-auto grow lg:mr-4 xl:mr-8"
            >
                {
                    portfolioImage.map((val, index)=>{
                        return(
                            <SwiperSlide 
                            key={index}
                            className='border-4 w-full h-full'>
                                <img  src={val.ArtistPortfolioImage} alt="" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Swiper
            breakpoints={{
                768:{
                    direction: 'vertical',
                    slidesPerView : 3
                    
                }
            }}
                onSwiper={setThumbsSwiper}
                loop = {true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="mySwiper w-[20rem]s max-w-[630px] md:w-[20rem]md:h-[88vh] lg:h-[83vh] p-1"
            >
                {
                    portfolioImage.map((val, index)=>{
                        return(
                            <SwiperSlide 
                            key={index}
                            className='h-[90px] lg:w-[230px]'>
                                <img className='rounded-lg'  src={val.ArtistPortfolioImage} alt='' />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
        </div>
        
    )
}

export default ArtistPortfolioImage
