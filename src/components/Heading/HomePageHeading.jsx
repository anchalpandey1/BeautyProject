import React from 'react'

import { Link } from 'react-router-dom'

// filter icon
import filterIcon from  '../../assets/Image/filter_icon.png'
// diamond icon
import { IoDiamondOutline } from "react-icons/io5";
// serch icon
import { CiSearch } from "react-icons/ci";

const HomePageHeading = () => {
    // const headerData = [
    //     {page : 'My Profile', pageURL : '/userProfile'}
    // ]

    return (
        <div className="bg-[#F3F3F3] w-[90%] mx-auto h-full block md:hidden py-2">
            {/* text here */}
            <div className='font-SulphurPoint mt-[0.5rem]'>
                <p className='font-bold text-2xl text-[#000000]'>Hello</p>
                <p className='font-normal text-base text-[#989898]' >Welcome to Glamgo!</p>

                {/* search bar */}
                <div className='my-[1rem]  bg-[#F3F3F3]
                    w-[100%] overflow-hidden flex justify-between items-center'
                    >
                        
                    <div className='shadow-SearchBar flex items-center gap-2 w-[80%] px-2 text-xl h-[48px] rounded-xl bg-[#FFFFFF]'>
                        <CiSearch className='text-[#291f1f]'/>
                        <input 
                        type="text" placeholder='Search...' 
                        className='placeholder-[#989898] text-base w-[80%] text-[#989898] font-SulphurPoint font-normal outline-none bg-[#FFFFFF]' />
                    </div>

                    {/* icon */}
                    <Link to="/filterMobileScreen" className='w-[48px] h-[48px] bg-[#A21D3C] rounded-xl flex justify-center items-center cursor-pointer'>
                        {/* < RxHamburgerMenu className='text-[#FFFFFF] text-2xl'/> */}
                        <img className='w-[24px] h-[24px]' src={filterIcon} alt="" />
                    </Link>
            </div>
            </div>
        </div>
    )
}

export default HomePageHeading
