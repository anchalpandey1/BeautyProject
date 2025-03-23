import React from 'react'
// home icon
import { BiSolidCategory } from "react-icons/bi";
// shop icon
import { CiShop } from "react-icons/ci";
// diamand icon
import { IoDiamondOutline } from "react-icons/io5";
// person icon
import { BsPerson } from "react-icons/bs";
// heart icon
import { FaRegHeart } from "react-icons/fa";
// shopping bag icon
import { FiShoppingBag } from "react-icons/fi";
// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// start fill
import { GoStarFill } from "react-icons/go";
import image1 from '../../assets/Image/Rectangle 588 (2).png'
import image2 from '../../assets/Image/Rectangle 588 (1).png';
import image3 from '../../assets/Image/Rectangle 588.png'
import image4 from '../../assets/Image/Rectangle 588 (3).png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const CategoriesProduct = () => {
    return (
        <div className='bg-background py-12 md:hidden'>

            <Swiper 

                breakpoints={{
                    180:{
                        slidesPerView:3,
                    },
                }}

                className=" w-[100%] mb-2 "
                
            >
                <SwiperSlide className='flex justify-center items-center' >
                    <div className='bg-[#D66F11] rounded-[20px] w-fit px-4 py-[6px]'>
                        <p className='font-Inter font-normal text-base text-[#FEFEFE]'>All</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div className=' border border-[#D66F11] rounded-[20px] w-fit px-4 py-[6px]'>
                        <p className='font-Inter font-normal text-base text-[#5F5F5F]'>Hair</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div className=' border border-[#D66F11] rounded-[20px] w-fit px-4 py-[6px]'>
                        <p className='font-Inter font-normal text-base text-[#5F5F5F]'>Makeup</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div className=' border border-[#D66F11] rounded-[20px] w-fit px-4 py-[6px]'>
                        <p className='font-Inter font-normal text-base text-[#5F5F5F]'>Hair</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div className=' border border-[#D66F11] rounded-[20px] w-fit px-4 py-[6px] '>
                        <p className='font-Inter font-normal text-base text-[#5F5F5F]'>Skincare</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div className=' border border-[#D66F11] rounded-[20px] w-fit px-4 py-[6px]'>
                        <p className='font-Inter font-normal text-base text-[#5F5F5F]'>Nails</p>
                    </div>
                </SwiperSlide>
            </Swiper>






            <Swiper 
                breakpoints={{
                    180: {
                        slidesPerView: 1,
                    },
                    385: {
                        slidesPerView: 2,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                }}
                className="w-[100%] pl-5"
            >

<div className="flex justify-between mb-4">
<div className='w-[226px] h-[314px] bg-[#FFFFFF] p-[1rem] shadow-MobileCategoryCard rounded-[10px] '>
                    <div className='rounded-[12px] w-[198px] h-[208px] relative'>
                    <img className='w-fit h-fit' src={image2} alt="" />
                        {/* wishlist icon */}
                        <div className='w-[35px] h-[35px] bg-[#FFFFFF] flex items-center justify-center rounded-[2rem]
                            absolute top-3 right-3 shadow-wishlistIcon
                            '>
                        <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]'/>
                        </div>
                    </div>
                    {/* content box */}
                    <div className='w-full mt-[0px] relative flex flex-col justify-center'>  
                    <p className='text-[#A21D3C] '>NYX Eyeshadow</p>
                      <h2 className='font-SulphurPoint font-bold text-[14px] leading-[1.6rem] xs:leading-[2.2rem] text-[#504949]'>Abhigyna Makeovers</h2>

                        {/* price and rating */}
                        <div className='flex justify-between '>
                            {/* price */}
                            <div className='flex items-center'>
                                {/* rupee html &#8377; */}
                                <FaRupeeSign  className='text-lg xs:text-xl  text-[#2D2D2D]'/>
                                <h2 className='font-SulphurPoint font-bold text-xl xs:text-[22px] text-[#2D2D2D]'>699/-</h2>
                            </div>

                            {/* rating */}
                            <div className='flex items-center gap-x-1'>
                                <GoStarFill  className='text-xl text-[#F6BB35]'/>
                                <h2 className='font-Inter font-normal text-xs text-[#000000] '>5.0</h2>
                            </div>
                        </div>                
                    </div>
                </div>
                
              
                <div className='w-[226px] h-[314px] bg-[#FFFFFF] p-[1rem] shadow-MobileCategoryCard rounded-[10px]'>
                    <div className='rounded-[12px] w-[198px] h-[208px] relative'>
                    <img className='w-fit h-fit' src={image1} alt="" />
                        {/* wishlist icon */}
                        <div className='w-[35px] h-[35px] bg-[#FFFFFF] flex items-center justify-center rounded-[2rem]
                            absolute top-3 right-3 shadow-wishlistIcon
                            '>
                        <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]'/>
                        </div>
                    </div>
                    {/* content box */}
                    <div className='w-full mt-[0px] relative flex flex-col justify-center'>
                    <p className='text-[#A21D3C] '>NYX Eyeshadow</p>
                        <h2 className='font-SulphurPoint font-bold text-[14px] leading-[1.6rem] xs:leading-[2.2rem] text-[#504949]'>Abhigyna Makeovers</h2>

                        {/* price and rating */}
                        <div className='flex justify-between '>
                            {/* price */}
                            <div className='flex items-center'>
                                {/* rupee html &#8377; */}
                                <FaRupeeSign  className='text-lg xs:text-xl  text-[#2D2D2D]'/>
                                <h2 className='font-SulphurPoint font-bold text-xl xs:text-[22px] text-[#2D2D2D]'>699/-</h2>
                            </div>

                            {/* rating */}
                            <div className='flex items-center gap-x-1'>
                                <GoStarFill  className='text-xl text-[#F6BB35]'/>
                                <h2 className='font-Inter font-normal text-xs text-[#000000] '>5.0</h2>
                            </div>
                        </div>                
                    </div>
                </div>
                </div>
                
               


             <div className="flex justify-between">
                <div className='w-[226px] h-[314px] bg-[#FFFFFF] p-[1rem] shadow-MobileCategoryCard rounded-[10px] mb-4'>
                    <div className='rounded-[12px] w-[198px] h-[208px] relative'>
                    <img className='w-fit h-fit' src={image3} alt="" />
                        {/* wishlist icon */}
                        <div className='w-[35px] h-[35px] bg-[#FFFFFF] flex items-center justify-center rounded-[2rem]
                            absolute top-3 right-3 shadow-wishlistIcon
                            '>
                        <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]'/>
                        </div>
                    </div>
                    {/* content box */}
                    <div className='w-full mt-[0px] relative flex flex-col justify-center'>
                    <p className='text-[#A21D3C] '>NYX Eyeshadow</p>
                        <h2 className='font-SulphurPoint font-bold text-[14px] leading-[1.6rem] xs:leading-[2.2rem] text-[#504949]'>Abhigyna Makeovers</h2>

                        {/* price and rating */}
                        <div className='flex justify-between '>
                            {/* price */}
                            <div className='flex items-center'>
                                {/* rupee html &#8377; */}
                                <FaRupeeSign  className='text-lg xs:text-xl  text-[#2D2D2D]'/>
                                <h2 className='font-SulphurPoint font-bold text-xl xs:text-[22px] text-[#2D2D2D]'>699/-</h2>
                            </div>
                            {/* rating */}
                            <div className='flex items-center gap-x-1'>
                                <GoStarFill  className='text-xl text-[#F6BB35]'/>
                                <h2 className='font-Inter font-normal text-xs text-[#000000] '>5.0</h2>
                            </div>
                        </div>                
                    </div>
                </div>               
                
                <div className='w-[226px] h-[314px] bg-[#FFFFFF] p-[1rem] shadow-MobileCategoryCard rounded-[10px]'>
                    <div className='rounded-[12px] w-[198px] h-[208px] relative'>
                    <img className='w-fit h-fit' src={image4} alt="" />
                        {/* wishlist icon */}
                        <div className='w-[35px] h-[35px] bg-[#FFFFFF] flex items-center justify-center rounded-[2rem]
                            absolute top-3 right-3 shadow-wishlistIcon
                            '>
                        <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]'/>
                        </div>
                    </div>
                    {/* content box */}
                    <div className='w-full mt-[0px] relative flex flex-col justify-center mb-4'>
                    <p className='text-[#A21D3C] '>NYX Eyeshadow</p>
                        <h2 className='font-SulphurPoint font-bold text-[14px] leading-[1.6rem] xs:leading-[2.2rem] text-[#504949]'>Abhigyna Makeovers</h2>

                        {/* price and rating */}
                        <div className='flex justify-between '>
                            {/* price */}
                            <div className='flex items-center'>
                                {/* rupee html &#8377; */}
                                <FaRupeeSign  className='text-lg xs:text-xl  text-[#2D2D2D]'/>
                                <h2 className='font-SulphurPoint font-bold text-xl xs:text-[22px] text-[#2D2D2D]'>699/-</h2>
                            </div>

                            {/* rating */}
                            <div className='flex items-center gap-x-1'>
                                <GoStarFill  className='text-xl text-[#F6BB35]'/>
                                <h2 className='font-Inter font-normal text-xs text-[#000000] '>5.0</h2>
                            </div>
                        </div>                
                    </div>
                </div>               
             </div>






             <div className="flex justify-between">
                <div className='w-[226px] h-[314px] bg-[#FFFFFF] p-[1rem] shadow-MobileCategoryCard rounded-[10px] mb-4'>
                    <div className='rounded-[12px] w-[198px] h-[208px] relative'>
                    <img className='w-fit h-fit' src={image1} alt="" />
                        {/* wishlist icon */}
                        <div className='w-[35px] h-[35px] bg-[#FFFFFF] flex items-center justify-center rounded-[2rem]
                            absolute top-3 right-3 shadow-wishlistIcon
                            '>
                        <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]'/>
                        </div>
                    </div>
                    {/* content box */}
                    <div className='w-full mt-[0px] relative flex flex-col justify-center'>
                    <p className='text-[#A21D3C] '>NYX Eyeshadow</p>
                        <h2 className='font-SulphurPoint font-bold text-[14px] leading-[1.6rem] xs:leading-[2.2rem] text-[#504949]'>Abhigyna Makeovers</h2>

                        {/* price and rating */}
                        <div className='flex justify-between '>
                            {/* price */}
                            <div className='flex items-center'>
                                {/* rupee html &#8377; */}
                                <FaRupeeSign  className='text-lg xs:text-xl  text-[#2D2D2D]'/>
                                <h2 className='font-SulphurPoint font-bold text-xl xs:text-[22px] text-[#2D2D2D]'>699/-</h2>
                            </div>
                            {/* rating */}
                            <div className='flex items-center gap-x-1'>
                                <GoStarFill  className='text-xl text-[#F6BB35]'/>
                                <h2 className='font-Inter font-normal text-xs text-[#000000] '>5.0</h2>
                            </div>
                        </div>                
                    </div>
                </div>               
                
                <div className='w-[226px] h-[314px] bg-[#FFFFFF] p-[1rem] shadow-MobileCategoryCard rounded-[10px]'>
                    <div className='rounded-[12px] w-[198px] h-[208px] relative'>
                    <img className='w-fit h-fit' src={image2} alt="" />
                        {/* wishlist icon */}
                        <div className='w-[35px] h-[35px] bg-[#FFFFFF] flex items-center justify-center rounded-[2rem]
                            absolute top-3 right-3 shadow-wishlistIcon
                            '>
                        <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]'/>
                        </div>
                    </div>
                    {/* content box */}
                    <div className='w-full mt-[0px] relative flex flex-col justify-center mb-4'>
                    <p className='text-[#A21D3C] '>NYX Eyeshadow</p>
                        <h2 className='font-SulphurPoint font-bold text-[14px] leading-[1.6rem] xs:leading-[2.2rem] text-[#504949]'>Abhigyna Makeovers</h2>

                        {/* price and rating */}
                        <div className='flex justify-between '>
                            {/* price */}
                            <div className='flex items-center'>
                                {/* rupee html &#8377; */}
                                <FaRupeeSign  className='text-lg xs:text-xl  text-[#2D2D2D]'/>
                                <h2 className='font-SulphurPoint font-bold text-xl xs:text-[22px] text-[#2D2D2D]'>699/-</h2>
                            </div>

                            {/* rating */}
                            <div className='flex items-center gap-x-1'>
                                <GoStarFill  className='text-xl text-[#F6BB35]'/>
                                <h2 className='font-Inter font-normal text-xs text-[#000000] '>5.0</h2>
                            </div>
                        </div>                
                    </div>
                </div>               
             </div>

             

             
             
                



            </Swiper>
        </div>
    )
}

export default CategoriesProduct