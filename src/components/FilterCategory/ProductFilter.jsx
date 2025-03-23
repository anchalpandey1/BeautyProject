import React from 'react'
import cross from '../../assets/Image/cross.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

// Import Swiper styles
import 'swiper/css';

const ProductFilter = () => {
    return (
        <div className=' py-12 md:hidden'>

            <Swiper 

                breakpoints={{
                    180:{
                        slidesPerView:3,
                    },
                }}

                className=" w-[100%] mb-2 "
                
            >
              
                <SwiperSlide className='flex justify-center items-center'>
                    <div className=' border border-[#D66F11] rounded-[20px] w-fit px-4 py-[6px]'>
                        <p className='font-Inter font-normal text-base text-[#5F5F5F]'> Ratings <b>˅</b></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div className=' border border-[#D66F11] rounded-[20px] w-fit px-4 py-[6px]'>
                        <p className='font-Inter font-normal text-base text-[#5F5F5F]'>Sort <b>˅</b></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div className=' border border-[#D66F11] rounded-[20px] w-fit px-4 py-[6px]'>
                        <p className='font-Inter font-normal text-base text-[#5F5F5F]'>Images </p>
                    </div>
                </SwiperSlide>               
            </Swiper>



           {/* <div className="sm:hidden h-auto bg-white shadow-box p-4 mx-10 my-5 rounded-tl-[20px] rounded-tr-[20px]">
  
  <div className="flex items-center font-SulphurPoint font-bold justify-between">
    <p>Filter by Ratings</p>
    <div className="right bg-white shadow-box">
  <img src={cross} />             
  </div>
  
  </div>
  </div>*/}










            </div>



    )
}

export default ProductFilter