import React from 'react'
import { Link } from 'react-router-dom';

// shopping bage
import { FiShoppingBag } from "react-icons/fi";
// left arrow icon
import { IoArrowBack } from "react-icons/io5";

const ArtistNavbar = () => {
    return (
        <div className='shadow-ArtistNavbar md:hidden  h-[3rem] sm:h-[4rem]'>
            <div className='w-[87%] mx-auto flex justify-between items-center text-[#2D2D2D] h-full'>
                <Link to='/landingPage'>
                    <IoArrowBack className='text-2xl sm:text-[28px]'/>
                </Link>
                <h3 className='text-base sm:text-lg font-SulphurPoint font-bold'>Abhigyna Makeovers</h3>
                <div>
                    <FiShoppingBag className='text-2xl sm:text-[28px]'/>
                </div>
            </div>
        </div>
    )
}

export default ArtistNavbar
