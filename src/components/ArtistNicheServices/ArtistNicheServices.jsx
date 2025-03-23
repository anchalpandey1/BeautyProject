import React, { useState } from 'react'

// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// chat icon
import { IoChatbubbleOutline } from "react-icons/io5";

// right arrow
import { FaAngleRight } from "react-icons/fa";

import artistService from '../../assets/Image/artistService.png'
import ArtistNicheServicesCard from './ArtistNicheServicesCard';

import { useSelector } from 'react-redux';
const ArtistNicheServices = () => {
    // const [ArtistServiceCategory, setArtistServiceCategory] = useState()
    const selectedArtistServicesCategory = useSelector((state) => state.value.selectedArtistServicesCategory)
    

    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit pb-[8rem] md:pb-[10rem]'>           
            <div className='w-[85%] md:w-[85%] bg-[#FFFFFF]  rounded-xl 
            lg:w-[85%] mx-auto font-SulphurPoint p-3 md:p-5 md:max-w-[1000px]
            '>
                <div className='p-1 xs:p-2 md:py-4 lg:py-3 lg:pb-6
                f font-DMSans font-normal text-[#A21D3C] flex items-center
                text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl py-2  
                '>
                    <FaAngleRight/> 
                    {
                        selectedArtistServicesCategory ? 
                        <p>Category: {selectedArtistServicesCategory}</p>
                        : 
                        null
                    }
                    
                </div>
                <ArtistNicheServicesCard/>
                <ArtistNicheServicesCard/>
                <ArtistNicheServicesCard/>
                <ArtistNicheServicesCard/>
            </div>
        </div>
    )
}

export default ArtistNicheServices
