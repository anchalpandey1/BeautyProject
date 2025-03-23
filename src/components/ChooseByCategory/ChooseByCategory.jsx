import React from 'react'

// import required images


import image1 from '../../assets/Image/icon-park-lipstick1.png';
import image2 from '../../assets/Image/fluent-emoji-flat-woman.png';
import image3 from '../../assets/Image/icon-park-lipstick2.png';
import image4 from '../../assets/Image/icon-park-lipstick3.png';
import image5 from '../../assets/Image/game-icons-eyelashes.png';
import image6 from '../../assets/Image/icon-park-lipstick4.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const ChooseByCategory = () => {
    return (
        <div className='hidden md:block
        w-[80%]  mx-auto py-[1.5rem] xl:py-[3rem]
        '> 
        
        <h4 className='font-SulphurPoint font-normal text-4xl lg:text-5xl text-center mt-[1rem] mb-[4rem]'>Choose by category</h4>

<Swiper 

                breakpoints={{
                    100: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView : 4.5,
                    },
                    1050: {
                        slidesPerView : 5.3,
                    },
                    1350:{
                        slidesPerView:6,
                    }
                }}

                className=" w-[97%] mx-auto my-10"
                
            >
                {/* give them inner show also */}
                {/* box-shadow: 0px 0px 30px 0px #0000000A inset; */}

                <SwiperSlide className='flex justify-center'>
                    <div className= "bg-gradient-to-r from-[#FFD8D8] to-[#FAE7A1] w-[100px] h-[100px] lg:w-[124px] lg:h-[124px] rounded-[50%] flex justify-center items-center"> 
                        <img src={image1} className='w-[60%]'  alt="dellLogo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                    <div className= "bg-gradient-to-r from-[#FFD8D8] to-[#FAE7A1]  w-[100px] h-[100px] lg:w-[124px] lg:h-[124px] rounded-[50%] flex justify-center items-center"> 
                        <img src={image2} className='w-[60%]'  alt="dellLogo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                    <div className= "bg-gradient-to-r from-[#FFD8D8] to-[#FAE7A1] w-[100px] h-[100px] lg:w-[124px] lg:h-[124px] rounded-[50%] flex justify-center items-center"> 
                        <img src={image3} className='w-[60%]'  alt="dellLogo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                    <div className= "bg-gradient-to-r from-[#FFD8D8] to-[#FAE7A1]  w-[100px] h-[100px] lg:w-[124px] lg:h-[124px] rounded-[50%] flex justify-center items-center"> 
                        <img src={image4} className='w-[60%]'  alt="dellLogo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                    <div className= "bg-gradient-to-r from-[#FFD8D8] to-[#FAE7A1] w-[100px] h-[100px] lg:w-[124px] lg:h-[124px] rounded-[50%] flex justify-center items-center"> 
                        <img src={image5} className='w-[60%]'  alt="dellLogo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                    <div className= "bg-gradient-to-r from-[#FFD8D8] to-[#FAE7A1] w-[100px] h-[100px] lg:w-[124px] lg:h-[124px] rounded-[50%] flex justify-center items-center"> 
                        <img src={image6} className='w-[60%]'  alt="dellLogo" />
                    </div>
                </SwiperSlide>
                
            </Swiper>







        </div>
    )
}

export default ChooseByCategory
