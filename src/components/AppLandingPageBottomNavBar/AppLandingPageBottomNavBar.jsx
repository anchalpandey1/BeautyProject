// In this page display bottom Navbar of the Glamgo App.

import React from 'react'

import { Link } from 'react-router-dom';

// import required image
import HomeImg from '../../assets/Image/HomeIcon.png';

// import icons
// shopping bag icon
import { CiShop } from "react-icons/ci";
// diamand icon
import { IoDiamondOutline } from "react-icons/io5";
// login icon
import { BsPerson } from "react-icons/bs";

import artistsImage from '../../assets/Image/artists.png'

const AppLandingPageBottomNavBar = () => {
    return (
        <div className='block md:hidden w-full h-[74px] bg-[#FFFFFF] shadow-AppBottomNavbar fixed bottom-0 z-10'>
            <div className=" w-[85%] mx-auto h-full flex justify-between items-center">
                <div className='w-[24px] h-[24px] cursor-pointer'>
                <img 
                    className='w-fit h-fit'
                src={HomeImg} alt="" />
                </div>

                <div className='cursor-pointer'> 
                    <img className='w-7 h-7' src={artistsImage} alt="" />
                </div>

                
                <div>
                    <CiShop className='text-2xl text-[#2D2D2D] cursor-pointer'/>
                </div>

               <Link to={'/Login'}>
                    <BsPerson className='text-2xl text-[#2D2D2D] cursor-pointer'/>
                </Link>
                                        
            </div>
        </div>
    )
}

export default AppLandingPageBottomNavBar
