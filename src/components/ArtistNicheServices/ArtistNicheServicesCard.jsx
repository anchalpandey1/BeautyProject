import React from 'react'
// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// chat icon
import { IoChatbubbleOutline } from "react-icons/io5";

import artistService from '../../assets/Image/artistService.png'

const ArtistNicheServicesCard = () => {
    return (
        <div className='flex gap-x-2 md:gap-x-4 lg:gap-x-5 items-start justify-between p-1 py-2 xs:p-2 xs:py-3 md:py-3 lg:py-5'>
                    {/* box for image */}
                    <img className='w-[54px] h-[45px]s xs:w-[64px] xs:h-[62px]s sm:w-[90px] sm:h-[87px]s
                    lg:w-[130px] xl:w-[154px] xl:h-[150px]
                    flex-shrink-0 
                    rounded-[8px] overflow-hidden shadow-artistServiceCategory
                    ' src={artistService} alt="" />

                    {/* box for name, discription for mobile view */}
                    <div className='font-DMSans font-normal grow flex md:flex-col justify-between items-start gap-x-2 xs:gap-x-3 md:gap-y-1 '>
                        <div className=''>
                            <h2 className='text-[#2D2D2D] text-sm xs:text-base sm:text-lg lg:text-2xl xl:text-[28px] leading-tight sm:mb-2 md:mb-0'>Professional Makeup</h2>
                            <p className='text-[10px] xs:text-xs sm:text-sm lg:text-lg xl:text-xl text-[#989898] leading-tight'>Full-face makeup application for any occasion.</p>
                        </div>

                        <p className='font-SulphurPoint font-bold text-sm xs:text-base sm:text-lg lg:text-2xl xl:text-[28px] flex items-center justify-centers text-[#2D2D2D]'>
                            <FaRupeeSign className='text-xs'/>
                            <span>699/-</span>
                        </p>
                    </div>

                    <div className='hidden cursor-pointer bg-[#A21D3C] rounded-xl md:flex flex-col items-center justify-between px-4 py-[6px] lg:px-5  xl:px-6 xl:py-3 gap-y-1'>
                        <IoChatbubbleOutline className='text-xl lg:text-3xl text-[#F3EFEF]'/>
                        <p className='font-Roboto font-bold text-sm lg:text-lg text-[#F3EFEF]'>Chat</p>
                    </div>
                        
                </div>
    )
}

export default ArtistNicheServicesCard
