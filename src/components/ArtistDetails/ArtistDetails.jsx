import React from 'react'
import { NavLink } from 'react-router-dom'

import overview from '../../assets/Image/overview.png'
import services from '../../assets/Image/services.png'
import gallery from '../../assets/Image/gallery.png'
import shop from '../../assets/Image/shop.png'

// icons
// image icon
import { CiImageOn } from "react-icons/ci";
import { FaImage } from "react-icons/fa6";
import { LiaBrushSolid } from "react-icons/lia";
// overview icon
import { AiTwotoneAppstore } from "react-icons/ai";
import { AiFillAppstore } from "react-icons/ai";
// shop icon
import { SiShopify } from "react-icons/si";

// heart icon
import { FaRegHeart } from "react-icons/fa";
// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// start fill
import { GoStarFill } from "react-icons/go";

import artistImage from '../../assets/Image/artistImage.png'


const ArtistDetails = () => {
    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] min-h-[19rem] lg:min-h-[21rem] xl:min-h-[25rem] h-full'>

            <div className='relative w-[85%] md:w-[85%] lg:w-[85%] max-w-[390px] mx-auto md:flex md:max-w-[1000px]'>

                <div className='md:bg-[#FFFFFF] rounded-xl md:shadow-ArtistBackgroundBox md:absolute left-0 right-0 md:h-[150px] lg:h-[180px] xl:h-[200px]'>

                    <div className='md:flex gap-4 xl:gap-6 md:pl-[10px] md:pt-[10px] lg:pl-[1rem] lg:pt-[1rem]'>

                        <div className='relative'>
                            <img className='w-fit h-fit md:w-[240px] lg:w-[290px] xl:w-[342px] xl:h-[310px] rounded-[12px]' src={artistImage} alt="" />
                            <div className='hidden absolute top-2 right-2 shadow-wishlistIcon w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#FFFFFF] rounded-[2rem] md:flex justify-center items-center'>
                                <FaRegHeart className='text-2xl xl:text-3xl text-[#D66F11]' />
                            </div>
                        </div>

                        <div className='grow bg-transparent md:flex flex-col justify-between my-1 md:my-0 rounded-[12px] font-SulphurPoint'>
                            <div className='my-2 md:my-0 bg-[#FFFFFF] rounded-xl'>
                                <div className='flex md:flex-col justify-between items-center md:items-start p-2 md:p-1'>
                                    <h4 className='font-bold text-[#2D2D2D] md:text-[#A21D3C] text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Abhigyna Makeovers</h4>
                                    <FaRegHeart className='text-2xl text-[#D66F11] md:hidden' />
                                    <div className='hidden md:flex items-center gap-2 lg:my-1'>
                                        <div className='flex items-center'>
                                            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                            <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                        </div>
                                        <p className='font-Inter font-normal text-base xl:text-lg text-[#000000]'>5.0</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-2 pr-0 md:p-1 md:pr-1'>
                                    <div>
                                        <p className='font-normal text-[#989898] text-sm lg:text-base'>Starts</p>
                                        <p className='flex items-center justify-center text-[#2D2D2D] text-2xl lg:text-3xl xl:4xl lg:my-1 font-bold'>
                                            <FaRupeeSign />
                                            <span>699/-</span>
                                        </p>
                                        <p className='font-normal text-sm text-[#989898] mt-1 md:hidden'>Tax Inclusive</p>
                                    </div>
                                    <div className='flex items-center gap-2 md:hidden p-1 px-2 bg-[#F5F5F5]'>
                                        <GoStarFill className='text-xl text-[#F6BB35] ' />
                                        <p className='font-Inter font-normal text-[15px] text-[#000000]'>5.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#FFFFFF] md:bg-[#F3EFEF] rounded-[12px] overflow-hidden
                    flex justify-between items-center md:gap-4
                    '>
                                <NavLink
                                    to="/artistPage"
                                    end
                                    // className='flex flex-col p-2 rounded-xl bg-[#FFFFFF] gap-1 items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px]'
                                    className={({ isActive }) =>
                                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                                    }

                                >
                                    {/* <img className='w-6 h-6 lg:w-7 lg:h-7'  src={overview} alt="" /> */}
                                    <AiFillAppstore className='text-2xl lg:text-[28px]' />
                                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Overview</p>
                                </NavLink>

                                {/* <NavLink 
                        to= '/artistPage/services'
                        className='flex flex-col p-2 rounded-xl bg-[#FFFFFF] gap-1 items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px]'
                        
                        >
                            <img className='w-6 h-6 lg:w-7 lg:h-7'  src={services} alt="" />
                            <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Services</p>
                        </NavLink> */}
                                <NavLink
                                    to='/artistPage/services'
                                    className={({ isActive }) =>
                                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                                    }
                                >
                                    {/* <img className='w-6 h-6 lg:w-7 lg:h-7'  src={services} alt="" /> */}
                                    {/* <SiShopify className='text-2xl lg:text-3xl'/> */}
                                    <LiaBrushSolid className='text-2xl lg:text-3xl' />
                                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Services</p>
                                </NavLink>



                                <NavLink
                                    to='/artistPage/portfolio'
                                    className={({ isActive }) =>
                                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                                    }
                                // className='flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px]'

                                >
                                    {/* <img className='w-6 h-6 lg:w-7 lg:h-7'  src={gallery} alt="" /> */}
                                    <FaImage className='text-2xl lg:text-[26px]' />
                                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Portfolio</p>
                                </NavLink>

                                <NavLink
                                    to='/artistPage/shop'
                                    className={({ isActive }) =>
                                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                                    }
                                // className='flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px]'

                                >
                                    {/* <img className='w-6 h-6 lg:w-7 lg:h-7'  src={shop} alt="" /> */}
                                    <SiShopify className='text-2xl lg:text-[28px]' />
                                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Shop</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistDetails
