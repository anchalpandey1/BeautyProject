
import Navbar from '../../components/Navbar/Navbar'
// import Heading from '../../components/Heading/Heading'
import HomePageHeading from '../../components/Heading/HomePageHeading'
// import AppLandingPageBottomNavBar from '../../components/AppLandingPageBottomNavBar/AppLandingPageBottomNavBar'

import React from 'react'
// import AppLandingPageBottomNavBar from '../../components/AppLandingPageBottomNavBar/AppLandingPageBottomNavBar'

import userImage from '../../assets/Image/userProfileImage.png';

import { Link } from 'react-router-dom';

// arrow 
import { FaChevronRight } from "react-icons/fa6";
// diamand
import { IoDiamondOutline } from "react-icons/io5";
/// chat
import { PiChatCircleText } from "react-icons/pi";
import { BsChatText } from "react-icons/bs";

// user icon 
import { CiUser } from "react-icons/ci";

// help
import { FiHelpCircle } from "react-icons/fi";

// heart
import { FaRegHeart } from "react-icons/fa";

// bag
import { PiShoppingBagOpenLight } from "react-icons/pi";

// package
import { PiPackageLight } from "react-icons/pi";

// address
import { PiAddressBookLight } from "react-icons/pi";
import { PiAddressBook } from "react-icons/pi";
// import DemoHeader from '../../components/Demo/DemoHeader';
// import MobileNavbar from '../../components/Navbar/MobileNavbar';
import Heading from '../../components/Heading/Heading';
import AppLandingPageBottomNavBar from '../../components/AppLandingPageBottomNavBar/AppLandingPageBottomNavBar'

// const headerContent = [{text: "My Profile", url : ""}]

const UserProfile = () => {
    return (
        <div className='bg-[#F3EFEF] min-h-screen'>
            {/*  further i will work on that values */}
            <Navbar NavigateFrom = 'userProfile'/>
            <Heading/>
            {/* <Heading pageNavigation = {headerData} /> */}

            {/* <MobileNavbar/> */}

            <div className='border borer-black w-[90%] max-w-[570px] mt-[2rem] md:bg-[#FFFFFF] md:p-2  mx-auto md:rounded-[24px] overflow-hidden'>

                <div className='border border-[#E4BEC7] md:hidden p-2 sm:p-3 bg-[#FFFFFF] rounded-xl flex items-center justify-between'>
                    {/* user image */}
                    <div className='flex items-center gap-x-3'>
                        <img src={userImage} className='shrink-0 w-[60px] h-[60px] xs:w-[70px] xs:h-[70px] sm:w-[80px] sm:h-[80px] border border-[#BBBBBB] shadow-userImage rounded-[3rem]' alt="" />

                            {/* user name and user mobile number */}
                        <div className='font-SulphurPoint font-bold text-base sm:text-lg'>
                            <h1 className='text-[#2D2D2D]'>Yuno Amano </h1>
                            <h2 className='text-[#989898]'>+91 1234567890</h2>
                        </div>
                    </div>

                    

                    {/* right arrow */}

                    <Link to='/userPersonalInfo' className='curos cursor-pointer'>
                        <FaChevronRight className='text-[#A21D3C] text-base sm:text-lg'/>
                    </Link>
                </div>
                <div className='hidden md:block'>
                    {/* user details */}
                    <div className='bg-[#FFFFFF] rounded-xl md:rounded-none my-3 md:my-0 p-3 sm:p-4 md:px-5 flex justify-between items-center'>
                        <div className='flex items-center gap-x-3 md:gap-x-4'>
                            <div>
                                <CiUser className='text-2xl sm:text-[24px] xl:text-[26px] text-[#A21D3C]'/>
                            </div>
                            <h2 className='font-SulphurPoint font-bold text-base sm:text-lg md:text-xl lg:text-[22px] text-[#2D2D2D] md:text-[#A21D3C]'>Personal Details</h2>
                        </div>

                        <Link to='/userDetails'>
                            <FaChevronRight className='text-[#A21D3C] text-base sm:text-lg'/>
                        </Link>
                    </div>
                    <div className='bg-[#FFFFFF] my-1 hidden md:block'>
                        <h1 className='border border-[#DCDCDC] mx-auto w-[93%]'></h1>
                    </div>
                </div>



                {/* glamgo Pro */}
                <div className='bg-[#FFFFFF] rounded-xl md:rounded-none my-3 md:my-0 p-3 sm:p-4 md:px-5 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3 md:gap-x-4'>
                        <div>
                            <IoDiamondOutline className='text-2xl sm:text-[24px] xl:text-[26px] text-[#A21D3C]'/>
                        </div>
                        <h2 className='font-SulphurPoint font-bold text-base sm:text-lg md:text-xl lg:text-[22px] text-[#2D2D2D] md:text-[#A21D3C]'>Glamgo Pro</h2>
                    </div>

                    <Link to='/SilverPro'>
                        <FaChevronRight className='text-[#A21D3C] text-base sm:text-lg'/>
                    </Link>
                </div>
                {/* <span className='border border-[#DCDCDC] w-[60%]s bg-[green]'></span> */}
                <div className='bg-[#FFFFFF] my-1 hidden md:block'>
                    <h1 className='border border-[#DCDCDC] mx-auto w-[93%]'></h1>
                </div>

                {/* Chats Requests*/}
                <div className='bg-[#FFFFFF] rounded-xl md:rounded-none my-3 md:my-0 p-3 sm:p-4 md:px-5 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <div>
                            <BsChatText className='text-xl sm:text-2xl xl:text-[26px] text-[#A21D3C]'/>
                        </div>
                        <h2 className='font-SulphurPoint font-bold text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl text-[#2D2D2D] md:text-[#A21D3C]'>Chats Requests</h2>
                    </div>

                    <Link to='/ChatRequest'>
                        <FaChevronRight className='text-[#A21D3C] text-base sm:text-lg'/>
                    </Link>
                </div>
                <div className='bg-[#FFFFFF] my-1 hidden md:block'>
                    <h1 className='border border-[#DCDCDC] mx-auto w-[93%]'></h1>
                </div>

                {/* My Orders */}
                <div className='bg-[#FFFFFF] rounded-xl md:rounded-none my-3 md:my-0 p-3 sm:p-4 md:px-5 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <div>
                            <PiPackageLight className='text-xl sm:text-2xl xl:text-[26px] text-[#A21D3C]'/>
                        </div>
                        <h2 className='font-SulphurPoint font-bold text-base sm:text-lg md:text-xl lg:text-[22px] text-[#2D2D2D] md:text-[#A21D3C]'>My Orders</h2>
                    </div>

                    <Link to="/myOrders">
                        <FaChevronRight className='text-[#A21D3C] text-base sm:text-lg'/>
                    </Link>
                </div>
                <div className='bg-[#FFFFFF] my-1 hidden md:block'>
                    <h1 className='border border-[#DCDCDC] mx-auto w-[93%]'></h1>
                </div>

                {/* My Wishlisht */}
                <div className='bg-[#FFFFFF] rounded-xl md:rounded-none my-3 md:my-0 p-3 sm:p-4 md:px-5 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <div>
                            <FaRegHeart className='text-xl sm:text-2xl xl:text-[26px] text-[#A21D3C]'/>
                        </div>
                        <h2 className='font-SulphurPoint font-bold text-base sm:text-lg md:text-xl lg:text-[22px] text-[#2D2D2D] md:text-[#A21D3C]'>My Wishlisht</h2>
                    </div>

                    <Link to='/userWishlist'>
                        <FaChevronRight className='text-[#A21D3C] text-base sm:text-lg'/>
                    </Link>
                </div>
                <div className='bg-[#FFFFFF] my-1 hidden md:block'>
                    <h1 className='border border-[#DCDCDC] mx-auto w-[93%]'></h1>
                </div>

                {/* Addresses */}
                <div className='bg-[#FFFFFF] rounded-xl md:rounded-none my-3 md:my-0 p-3 sm:p-4 md:px-5 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <div>
                            <PiAddressBook className='text-2xl sm:text-[26px] xl:text-[26px] text-[#A21D3C]'/>
                        </div>
                        <h2 className='font-SulphurPoint font-bold text-base sm:text-lg md:text-xl lg:text-[22px] text-[#2D2D2D] md:text-[#A21D3C]'>Addresses</h2>
                    </div>

                    <Link to="/Addresses">
                        <FaChevronRight className='text-[#A21D3C] text-base sm:text-lg'/>
                    </Link>
                </div>
                <div className='bg-[#FFFFFF] my-1 hidden md:block'>
                    <h1 className='border border-[#DCDCDC] mx-auto w-[93%]'></h1>
                </div>

                {/* Help & Support */}
                <div className='bg-[#FFFFFF] rounded-xl md:rounded-none my-3 md:my-0 p-3 sm:p-4 md:px-5 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <div>
                            <FiHelpCircle className='text-xl sm:text-2xl xl:text-[26px] text-[#A21D3C]'/>
                        </div>
                        <h2 className='font-SulphurPoint font-bold text-base sm:text-lg md:text-xl lg:text-[22px] text-[#2D2D2D] md:text-[#A21D3C]'>Help & Support</h2>
                    </div>

                    <div>
                        <FaChevronRight className='text-[#A21D3C] text-base sm:text-lg'/>
                    </div>
                </div>

            </div>


            <AppLandingPageBottomNavBar/>
        </div>
    )
}

export default UserProfile
