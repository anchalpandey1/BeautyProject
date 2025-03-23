import React from 'react'

// heart icon
import { FaRegHeart } from "react-icons/fa";
// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// start fill
import { GoStarFill } from "react-icons/go";

import artistProduct from '../../assets/Image/artistProduct.png'

const ArtistProductCard = () => {
    return (
        <div className= 'my-[4rem] flexs flex-wrap items-center justify-centerss justify-start sjustify-between grid grid-cols-2 md:grid-cols-3 justify-items-centers gap-3 xs:gap-6 sm:gap-6 lg:gap-8'>
            
            {Array.from({ length: 5 }, (_, index) => (
                    <div key={index}>

                            {/* card */}
                            <div className='border border-black cursor-pointer w-fit w-[180px]s h-[300px]s bg-[#FFFFFF] p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-productCardSmall md:shadow-productCard' >

                            <div>
                                <div className='relative'>
                                    <img className='w-[130px] h-[130px] xs:h-[140px] xs:w-[140px] sm:w-[160px] sm:h:w-[160px] md:w-[170px] md:h-[170px] lg:w-[260px] lg:h-[260px] rounded-xl' src={artistProduct} alt="" />
                                    {/* hearticonsdf */}
                                    <div className='absolute top-1 right-1 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-[#FFFFFF] flex items-center justify-center rounded-[2rem] cursor-pointer'>
                                        <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]'/>
                                    </div>
                                </div>

                                <div className='py-2 lg:py-3'>
                                    <h3 className='font-SulphurPoint font-bold text-base lg:text-2xl text-[#A21D3C] mb-1 lg:mb-2'>NYX Eyeshadow</h3>
                                    <h4 className='font-Inter font-normal text-[12px] lg:text-lg text-[#989898]'>Abhigyna Makeovers</h4>
                                </div>

                                <div className='flex justify-between mt-2 lg:mt-4'>

                                    <div className='font-SulphurPoint font-bold  flex items-center justify-center gap-x-1 text-[#2D2D2D]'>
                                        <FaRupeeSign className='lg:text-2xl'/>
                                        <p className='text-base lg:text-3xl'>499/-</p>
                                    </div>

                                    <div className='font-Inter font-normal flex items-center justify-center gap-x-1'>
                                        <GoStarFill className='text-lg lg:text-2xl text-[#F6BB35]'/>
                                        <p className='text-[12px] lg:text-xl text-[#000000]'>4.8</p>
                                    </div>
                                </div>

                            </div>
                            </div>

                    </div>
            ))}
        </div>
    )
}

export default ArtistProductCard
