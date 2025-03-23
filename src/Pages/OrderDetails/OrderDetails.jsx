import React, { useState } from 'react'

// rupee icon
import { FaRupeeSign } from "react-icons/fa";
// icon for track 
import { MdContentCopy } from "react-icons/md";
// drop down icon
import { FaChevronDown } from "react-icons/fa6";
// drop up icon
import { FaChevronUp } from "react-icons/fa6";
// left arrow icon
import { IoArrowBack } from "react-icons/io5";
// shopping bage
import { FiShoppingBag } from "react-icons/fi";


import { Link } from 'react-router-dom';


import product1 from '../../assets/Image/product1.png';
import productDeliverIcon from '../../assets/Image/productDeliverIcon.png';

import Stepper from "../../components/MyModel/Stepper";
import Heading from '../../components/Heading/Heading';
import Navbar from '../../components/Navbar/Navbar';

const OrderDetails = () => {
    const headerData = [
        {page : 'My Profile', pageURL : '/userProfile'},
        {page : 'My Orders', pageURL : '/myOrders'}
    ]

    // hide and display drop down button
    const [showDropDown , setShowDropDown] = useState(false)
    return (
        // entire width of my profile
        <div className='w-full min-h-screen bg-[#F3EFEF]'>
            <div className='hidden md:block'>
                <Navbar/>
            </div>
            <Heading  pageNavigation={headerData} />
            {/* artist navbar */}
            <div className='shadow-ArtistNavbar md:hidden h-[3rem] sm:h-[4rem] '>
                <div className='w-[87%]s mx-auto flex justify-between items-center text-[#2D2D2D] h-full'>
                    <Link to='/userProfile'>
                        <IoArrowBack className='text-2xl sm:text-[28px]'/>
                    </Link>
                    <h3 className='text-base text-[#504949] sm:text-lg font-SulphurPoint font-bold'>My Orders</h3>
                    <div className='vis invisible'>
                        <FiShoppingBag className='text-2xl sm:text-[28px]'/>
                    </div>
                </div>
            </div>

            {/* outer box */}
            <div className='borders border-black w-[90%] lg:w-[50%]s max-w-[600px] md:max-w-[800px] lg:max-w-[900px] mx-auto flex flex-col md:flex-row md:gap-4 lg:gap-8'>

                {/* box1 */}
                <div>
                    {/* box1 1 */}
                    <div className='flex flex-col gap-y-4 mb-4 lg:mb-6'>
                        {/* box1 1 1 */}
                        <div 
                className='cursor-pointer rounded-xl bg-[#FFFFFF] p-4 '>
                    <div className='flex gap-2 sm:gap-4 lg:gap-6'>
                        <img className=' shrink-0 h-[110px] w-[110px] lg:w-[140px] lg:h-[140px] rounded-xl borders border-[#E9EAEE]' src={product1} alt="" />
                        <div className='font-SulphurPoint  flex flex-col justify-between py-2'>
                            <h2 className='font-bold text-lg lg:text-xl text-[#2D2D2D]'>NYX Eyeshadow-Dreamy Glow</h2>
                            <div className='flex gap-4'>
                                <div className='grid grid-cols-2 w-fit h-fit gap-[0.3px] rounded-[5rem] overflow-hidden'>
                                <div className='bg-[#9F5B44] w-[9px] h-[9px] lg:w-[20px] lg:h-[20px]'></div>
                                <div className='bg-[#C96861] w-[9px] h-[9px] lg:w-[20px] lg:h-[20px]'></div>
                                <div className='bg-[#F8DABA] w-[9px] h-[9px] lg:w-[20px] lg:h-[20px]'></div>
                                <div className='bg-[#E0AB89] w-[9px] h-[9px] lg:w-[20px] lg:h-[20px]'></div>
                            </div>
                            <p className='font-bold text-sm lg:text-lg text-[#504949]'>Dreamy Glow - 3g</p>
                        </div>
                        <div className='flex items-center'>
                            <FaRupeeSign  className='text-sm'/>
                            <h2 className='font-SulphurPoint text-base lg:text-xl font-bold text-[#2D2D2D]'>499/-</h2>
                        </div>
                    </div>
                </div>
            </div>
        

                        {/* box 1 1 2 */}
                        <div className='bg-[#FFFFFF] rounded-xl p-3 xs:p-4 lg:px-5 '>
                            <div className='font-SulphurPoint font-bold flex gap-3'>
                                <img className='w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]' src={productDeliverIcon} alt="" />
                                <p className='text-sm lg:text-xl text-[#504949]'>Delivery by Tue, 12 Dec</p>
                            </div>
                            <div>
                            <Stepper/>
                            </div>

                            {/* <div className='borders border-black'>
                                <div className='font-SulphurPoint font-normal'>
                                    <div className='py-1'>
                                        <p className='text-[#2D2D2D] text-sm md:text-base lg:text-lg leading-none'>Confirmed</p>
                                        <p className='text-[#989898] text-xs md:text-sm lg:text-base leading-none'>08 Dec, 2023</p>
                                    </div>
                                    <div className='py-1'>
                                        <p className='text-[#2D2D2D] text-sm md:text-base lg:text-lg leading-none'>Packed</p>
                                        <p className='text-[#989898] text-xs md:text-sm lg:text-base leading-none'>08 Dec, 2023</p>
                                    </div>
                                    <div className='py-1'>
                                        <p className='text-[#2D2D2D] text-sm md:text-base lg:text-lg leading-none'>Shipped</p>
                                        <p className='text-[#989898] text-xs md:text-sm lg:text-base leading-none'>08 Dec, 2023</p>
                                    </div>
                                    <div className='py-1'>
                                        <p className='text-[#2D2D2D] text-sm md:text-base lg:text-lg leading-none'>Out for Delivery</p>
                                        <p className='text-[#989898] text-xs md:text-sm lg:text-base leading-none'>08 Dec, 2023</p>
                                    </div>
                                    <div className='py-1'>
                                        <p className='text-[#2D2D2D] text-sm md:text-base lg:text-lg leading-none'>Delivered</p>
                                        <p className='text-[#989898] text-xs md:text-sm lg:text-base leading-none'>08 Dec, 2023</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* box1 2 */}
                    <div className='md:bg-[#FFFFFF] rounded-[24px] p-2'>
                        <div className='px-3'>
                            <div className='flex justify-between font-SulphurPoint font-normal text-xs md:text-lg textt-[#989898]'>
                                <p>Courier</p>
                                <p>Tracking ID</p>
                            </div>
                            <div className='flex justify-between font-SulphurPoint font-normal font-sm text-[#504949]'>
                                <p>Delhivery</p>
                                <div className='flex items-center gap-x-2'>
                                    <p>ABCD1234WND</p>
                                    <div>
                                        <MdContentCopy className='text-[#A21D3C] text-sm md:text-base cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border border-[#A21D3C] bg-[#FFFFFF] rounded-[10px] p-2 cursor-pointer my-2'>
                            <p className='f font-SulphurPoint font-bold text-center text-base text-[#A21D3C]'>Track Order</p>
                        </div>
                    </div>
                </div>

                {/* box2 */}
                <div className=' bg-[#FFFFFF]s md:max-w-[260px] lg:max-w-[320px] flex flex-col-reverse md:flex-col gap-y-4 md:gap-4'>
                    {/* box2 1 */}
                    <div className='bg-[#FFFFFF] rounded-xl border-black p-3 xs:p-4 md:p-4 lg:px-5'>
                        <div className='flex justify-between items-center rounded-xl'>
                            <h4 className='font font-SulphurPoint font-bold text-lg md:text-xl xl:text-2xl text-[#2D2D2D]'>Order Details</h4>
                            <div 
                            onClick={()=>{setShowDropDown(!showDropDown)}}
                            className='cursor-pointer hidden md:block text-[#A21D3C]'
                            >
                                {
                                    showDropDown ? 
                                    < FaChevronUp />
                                    : 
                                    < FaChevronDown/>
                                }
                            </div>
                        </div>
                        

                        <div className={`relatives  mt-[-38%]s bg-[#FFFFFF]ss mb-[-40%]s relatives ssz-10 md:${showDropDown? 'visible': 'hidden'} bg-green-900s font-SulphurPoint`}>
                        <div className='md:border border-[#DCDCDC] my-1 md:my-2 w-full'></div>
                            <div className='font-SulphurPoint py-2'>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-[#504949] text-base md:text-lg lg:text-xl font-bold'>Bag Total</h4>
                                    <div className='font-normal text-[#2D2D2D] text-base md:text-[17px] lg:text-lg flex items-center justify-center'>
                                        <FaRupeeSign className='text-sm lg:text-base'/>
                                        <h4 className='font-normal'>698</h4>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-[#504949] text-base md:text-lg lg:text-xl font-bold'>Bag Savings</h4>
                                    <div className='font-normal text-[#2D2D2D] text-base md:text-[17px] lg:text-lg flex items-center justify-center'>
                                        <FaRupeeSign className='text-sm lg:text-base'/>
                                        <h4 className='font-normal'>698</h4>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-[#504949] text-base md:text-lg lg:text-xl font-bold'>Coupons Savings</h4>
                                    <div className='font-normal text-[#2D2D2D] text-base md:text-[17px] lg:text-lg flex items-center justify-center'>
                                        <FaRupeeSign className='text-sm lg:text-base'/>
                                        <h4 className='font-normal'>698</h4>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-[#504949] text-base md:text-lg lg:text-xl font-bold'>Delivery Fee</h4>
                                    <div className='font-normal text-[#2D2D2D] text-base md:text-[17px] lg:text-lg flex items-center justify-center'>
                                        <FaRupeeSign className='text-sm lg:text-base'/>
                                        <h4 className='font-normal'>698</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='md:border border-[#DCDCDC] my-1 md:my-2 w-full'></div>
                            
                            <div>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-[#504949] text-base md:text-[17px] lg:text-lg font-bold'>Bag Total</h4>
                                    <div className='font-normal text-[#2D2D2D] text-base md:text-[17px] lg:text-lg flex items-center justify-center'>
                                        <FaRupeeSign className='text-sm lg:text-base'/>
                                        <h4 className='font-normal'>698</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='md:border border-[#DCDCDC] my-1 md:my-2 w-full'></div>
                            
                            <div>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-[#504949] text-base md:text-[17px] lg:text-lg font-bold'>Bag Total</h4>
                                    <h4 className='text-[#504949] text-base md:text-[17px] lg:text-lg font-bold'>Cash on delivery</h4>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* box2 2 */}
                    <div className='bg-[#FFFFFF] rounded-xl p-3 xs:p-4 lg:px-5 font-SulphurPoint'>
                        <h4 className='f font-bold text-base md:text-lg lg:text-xl text-[#504949]'>Shipping Address</h4>
                        <h4 className='f font-bold text-sm md:text-base lg:text-lg text-[#504949]'>Yuno Amano</h4>
                        <h4 className='font-normal text-sm md:text-base lg:text-lg text-[#989898]'>12, Starwood Heights, sector 34, New Delhi, Delhi IN - 110052 </h4>
                        <h4 className='font-normal text-sm md:text-base lg:text-lg text-[#989898]'>Phone: +00 1234567890</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;



