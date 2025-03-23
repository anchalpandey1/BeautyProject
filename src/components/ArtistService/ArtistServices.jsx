import React from 'react'

// heart icon
import { FaRegHeart } from "react-icons/fa";
// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// start fill
import { GoStarFill } from "react-icons/go";

import artistProduct from '../../assets/Image/artistProduct.png'
import ArtistServiceCard from './ArtistServiceCard';

import filterIcon from  '../../assets/Image/filter_icon.png'
import ArtistFilter from '../FilterCategory/ArtistFilter';

const ArtistServices = () => {
    return (
        <div className='flex gap-3'>
            {/* filter screen */}
            <div className='m-2 hidden w-fit md:block'>
                <ArtistFilter/>
                {/* <div className='bg-[#FFFFFF] rounded-[24px] p-2'>
                    <div className='flex gap-2 items-center'> 
                        <img className='border border-black w-[30px] h-[30px]'  src={filterIcon} alt="" />
                        <h3 className='font-SulphurPoint font-bold text-3xl text-[#D66F11]'>Filters</h3>
                    </div>

                </div> */}
            </div>

            <div className= 'w-full my-[1rem] md:my-0 grid grid-cols-2 xl:grid-cols-3 justify-items-center gap-3 xs:gap-6 sm:gap-6 lg:gap-8'>
            {Array.from({ length: 5 }, (_, index) => (
                    <div key={index}>

                            <ArtistServiceCard/>

                    </div>
            ))}
        </div>

        </div>
    )
}

export default ArtistServices;
