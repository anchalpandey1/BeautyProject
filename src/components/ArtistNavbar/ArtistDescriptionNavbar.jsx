import React from 'react'
import { Link } from 'react-router-dom';

// shopping bage
import { FiShoppingBag } from "react-icons/fi";
// left arrow icon
import { IoArrowBack } from "react-icons/io5";

const ArtistProductNavbar = () => {
    return (
        <div className='shadow-ArtistNavbar md:hidden  h-[3rem] sm:h-[4rem]'>
            <div className='w-[87%] mx-auto flex justify-between items-center text-[#2D2D2D] h-full'>
                <Link to='/ArtistProduct'>
                    <IoArrowBack className='text-2xl sm:text-[28px]'/>
                </Link>
                <h3 className='text-base lg:text-2xl font-SulphurPoint font-bold'>More Information</h3>
                <div>
              
                </div>
            </div>
        </div>
    )
}

export default ArtistProductNavbar
