import React, { useState } from 'react'
import NavbarArtist from '../../components/Navbar/NavbarArtist'
import img1 from '../../assets/ArtistDashboard/icon-park-outline_down.png'
import img2 from '../../assets/ArtistDashboard/Component 4.png'
import img3 from '../../assets/ArtistDashboard/Component 5.png'
import img4 from '../../assets/ArtistDashboard/Component 7.png'
import img5 from '../../assets/ArtistDashboard/Group 350.png'
import img6 from '../../assets/ArtistDashboard/Rectangle 588.png'
import img7 from '../../assets/ArtistDashboard/Rectangle 588 (1).png'
import img8 from '../../assets/ArtistDashboard/Rectangle 588 (2).png'
import img9 from '../../assets/ArtistDashboard/gf.png'
import { FaStar } from "react-icons/fa";
import Sidebar from './Sidebar'
import { SlArrowDown } from "react-icons/sl";

import Charts from './Charts'

const ArtistDashboard = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <>
            {/* <NavbarArtist /> */}
            <div className='   p-2 w-full lg:w-[80%] right-0   font-SulphurPoint flex '>

                <div className='  xl:p-8 bg-[#F3EFEF] w-[95%]  '>
                    <div className=' hidden lg:flex  justify-between '>
                        <div className=''>
                            <p className=' text-[28px] font-[700]'>Hello Artist!</p>
                            <p className='text-[20px] text-[#989898] font-[700]'>13 January, 2024</p>
                        </div>
                        <div className=' relative'>
                            <div className='  bg-[#D66F11] rounded-[24px] flex items-center justify-center gap-8 w-[172px] h-[46px]'>
                                <p className=' text-[20px] font-[400] font-Inter text-white'>Today</p>
                                <SlArrowDown  onClick={() => { setShowDropDown(!showDropDown) }} className=' text-[16px] text-[#F3EFEF] hover:cursor-pointer'/>
                                {/* <img onClick={() => { setShowDropDown(!showDropDown) }} className=' w-[24px] h-[24px] hover:cursor-pointer' src={img1} alt="" /> */}
                            </div>
                            <div className={`absolute bg-[#E5CAD0]  rounded-[12px] w-full top-10 left- ${showDropDown ? ' visible' : ' hidden'}`} >
                                <div className=' text-[16px] font-[700] px-8 py-2 flex flex-col gap-2'>
                                    <p>Today</p>
                                    <p>Weekly</p>
                                    <p>Monthly</p>
                                    <p>Yearly</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* moblie view */}
                    <div className=' flex  lg:hidden flex-col gap-3'>
                        <p className=' text-[28px] font-[700]'>Hello Artist!</p>
                        <div className=' flex  gap-3 '>
                            <div className=' p-2 rounded-[12px] bg-[#D66F11] '>
                                <p className=' text-[20px] font-[400] font-Inter text-white'>Today</p>
                            </div>
                            <div className=' p-2 border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                                <p className=' text-[20px] font-[400] font-Inter '>Weekly</p>
                            </div>
                            <div className=' p-2 border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                                <p className=' text-[20px] font-[400] font-Inter '>Monthly</p>
                            </div>
                            <div className=' p-2 border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                                <p className=' text-[20px] font-[400] font-Inter '>Yearly</p>
                            </div>
                        </div>
                        <p className='text-[20px] text-[#989898] font-[700]'>13 January, 2024</p>
                    </div>
                    <div className=' gap-5 w-[90%] lg:w-full ml-1 lg:ml-0 items-center mt-10  flex flex-col lg:flex-row justify-between'>
                        <div className=' w-full lg:w-[50%] flex lg:flex-col gap-2  lg:gap-5'>
                            <div className=' flex flex-col gap-2 lg:gap-0  lg:flex-row w-full rounded-[12px]  justify-between p-5 bg-white '>
                                <p className=' text-[24px] font-[700] text-center lg:text-start'>Total Earnings</p>
                                <p className=' text-[32px] font-[700] text-center text-[#A21D3C]'>₹ 20,000</p>
                            </div>
                            <div className=' flex flex-col  gap-2 lg:gap-0 lg:flex-row  w-full rounded-[12px]  justify-between p-5 bg-white '>
                                <p className=' text-[24px] font-[700] text-center lg:text-start'>Recent Sales</p>
                                <p className=' text-[32px] font-[700] text-[#A21D3C] text-center'>100</p>
                            </div>

                        </div>
                        <div className=' flex items-center justify-center  rounded-[12px] bg-white lg:py-4  ew-full lg:w-[50%]'>
                            <Charts />
                        </div>

                    </div>

                    <div className=' mt-10 flex justify-between'>
                        <p className=' text-[24px] font-[700]'>My Services</p>
                        <p className=' text-[24px] font-[700] text-[#989898]'>Manage all</p>
                    </div>
                    <div className=' p-2 w-[90%] lg:w-full ml-1 lg:ml-0 lg:px-10 lg:py-5 flex justify-between  bg-white rounded-[12px] mt-5'>
                        <div className=' flex flex-col lg:flex-row gap-4 items-center'>
                            <img className=' w-[64px] h-[64px]' src={img2} alt="" />
                            <p className=' text-[20px] font-[700]'>Makeup</p>
                        </div>
                        <div className=' flex flex-col lg:flex-row  gap-4 items-center'>
                            <img className=' w-[64px] h-[64px]' src={img3} alt="" />
                            <p className=' text-[20px] font-[700]'>Hair</p>
                        </div>
                        <div className=' flex flex-col lg:flex-row  gap-4 items-center'>
                            <img className=' w-[64px] h-[64px]' src={img4} alt="" />
                            <p className=' text-[20px] font-[700]'>Skincare</p>
                        </div>
                        <div className=' flex flex-col lg:flex-row  gap-4 items-center'>
                            <img className=' w-[64px] h-[64px]' src={img5} alt="" />
                            <p className=' text-[20px] font-[700]'>Other</p>
                        </div>
                    </div>
                    <div className=' mt-10 flex justify-between'>
                        <p className=' text-[24px] font-[700]'>My Products</p>
                        <p className=' text-[24px] font-[700] text-[#989898]'>Manage all</p>
                    </div>
                    <div className=' mt-10 flex flex-col lg:flex-row gap-2 justify-between lg:gap-10 '>
                        <div className=' bg-white p-2 flex gap-2'>
                            <img className=' w-[110px] h-[110px]' src={img6} alt="" />
                            <div className=' flex flex-col justify-between'>
                                <div>
                                    <p className=' text-[20px] font-[700]'>NYX Foundation</p>
                                    <p className=' text-[#AA9E9E] text-[20px] font-[700] '>Makeup</p>
                                </div>
                                <p className='text-[20px] font-[700]'>₹2000/-</p>
                            </div>
                            <div className=' flex items-end gap-2'>
                                <FaStar className=' text-[20px] text-[#F6BB35]' />
                                {/* <img className=' w-[20px] h-[20px] ' src={img9} alt="" /> */}
                                <p className=' text-[14px] mt-1 font-[400] font-Inter'>4.5</p>
                            </div>
                        </div>
                        <div className=' bg-white p-2 flex gap-2'>
                            <img className=' w-[110px] h-[110px]' src={img7} alt="" />
                            <div className=' flex flex-col justify-between'>
                                <div>
                                    <p className=' text-[20px] font-[700]'>NYX Foundation</p>
                                    <p className=' text-[#AA9E9E] text-[20px] font-[700] '>Makeup</p>
                                </div>
                                <p className='text-[20px] font-[700]'>₹2000/-</p>
                            </div>
                            <div className=' flex items-end gap-2'>
                                <FaStar className=' text-[20px] text-[#F6BB35]' />
                                {/* <img className=' w-[20px] h-[20px] ' src={img9} alt="" /> */}
                                <p className=' text-[14px] mt-1 font-[400] font-Inter'>4.5</p>
                            </div>
                        </div>
                        <div className=' bg-white p-2 flex gap-2'>
                            <img className=' w-[110px] h-[110px]' src={img8} alt="" />
                            <div className=' flex flex-col justify-between'>
                                <div>
                                    <p className=' text-[20px] font-[700]'>NYX Foundation</p>
                                    <p className=' text-[#AA9E9E] text-[20px] font-[700] '>Makeup</p>
                                </div>
                                <p className='text-[20px] font-[700]'>₹2000/-</p>
                            </div>
                            <div className=' flex items-end gap-2'>
                                <FaStar className=' text-[20px] text-[#F6BB35]' />
                                {/* <img className=' w-[20px] h-[20px] ' src={img9} alt="" /> */}
                                <p className=' text-[14px] mt-1 font-[400] font-Inter'>4.5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtistDashboard