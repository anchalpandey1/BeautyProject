import React from 'react'
import { Link } from 'react-router-dom'

// left arrow icon
import { IoArrowBack } from "react-icons/io5";
// shopping bage
import { FiShoppingBag } from "react-icons/fi";
// rupee icon
import { FaRupeeSign } from "react-icons/fa";

// import userImage from '../../assets/Image/userProfileImage.png';
import product1 from '../../assets/Image/product1.png';
import product2 from '../../assets/Image/product2.png';

import productDeliverIcon from '../../assets/Image/productDeliverIcon.png';
import checkIcon from '../../assets/Image/checkIcon.png';
import removeIcon from '../../assets/Image/removeIcon.png';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Heading from '../../components/Heading/Heading';
import Navbar from '../../components/Navbar/Navbar';



const MyOrders = () => {
    const navigate = useNavigate();

    // redirect to order details page
    const orderDetails = ()=>{
        navigate('/orderDetails')
    }

    const headerData = [
        {page : 'My Profile', pageURL : '/userProfile'},
        {page : 'My Orders', pageURL : '/myOrders'}
    ]



    return (
        <div className='bg-[#F3EFEF] min-h-screen'>
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
                    {/* <h3 className='text-base sm:text-lg font-SulphurPoint font-bold'>Abhigyna Makeovers</h3> */}
                    <h3 className='text-base text-[#504949] sm:text-lg font-SulphurPoint font-bold'>My Orders</h3>
                    <div className='vis invisible'>
                        <FiShoppingBag className='text-2xl sm:text-[28px]'/>
                    </div>
                </div>
            </div>
            <div className=' w-[90%] mx-auto'>

            <div className='flex flex-col gap-y-[1.5rem] mt-4 md:bg-[#FFFFFF] md:rounded-[24px] md:p-[1.5rem]'>
                {/* first card */}
                <div 
                onClick={()=>{orderDetails()}}
                className='cursor-pointer rounded-xl bg-[#FFFFFF] md:bg-[#FFF6F6] p-4 '>
                    <div className='flex gap-2 sm:gap-4 lg:gap-6'>
                        <img className=' shrink-0 h-[110px] w-[110px] lg:w-[140px] lg:h-[140px] rounded-xl border border-[#E9EAEE]' src={product1} alt="" />
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
                <div className='font-SulphurPoint font-bold flex gap-3 pt-3'>
                    <img className='w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]' src={productDeliverIcon} alt="" />
                    <p className='text-sm lg:text-xl text-[#504949]'>Delivery by Tue, 12 Dec</p>
                </div>
            </div>
        
            {/* second card */}
            <div className='rounded-xl bg-[#FFFFFF] md:bg-[#FFF6F6] p-4 '>
                <div className='flex gap-2 sm:gap-4 lg:gap-6'>
                    <img className=' shrink-0 h-[110px] w-[110px] lg:w-[140px] lg:h-[140px] rounded-xl border border-[#E9EAEE]' src={product2} alt="" />
                    <div className='font-SulphurPoint  flex flex-col justify-between py-2'>
                        <h2 className='font-bold text-sm lg:text-lg text-[#504949]'>Venus HD Mascara</h2>
                        <div className='flex gap-4'>
                            <div className='grid grid-cols-2 w-fit h-fit rounded-[5rem] overflow-hidden'>
                                <div className='bg-black w-[9px] h-[9px] lg:w-[20px] lg:h-[20px]'></div>
                                <div className='bg-black w-[9px] h-[9px] lg:w-[20px] lg:h-[20px]'></div>
                                <div className='bg-black w-[9px] h-[9px] lg:w-[20px] lg:h-[20px]'></div>
                                <div className='bg-black w-[9px] h-[9px] lg:w-[20px] lg:h-[20px]'></div>
                            </div>
                            <p className='font-bold text-sm lg:text-lg text-[#504949]'>Deep Black - 3g</p>
                        </div>
                        <div className='flex items-center'>
                            <FaRupeeSign  className='text-sm'/>
                            <h2 className='font-SulphurPoint text-base lg:text-xl font-bold text-[#2D2D2D]'>499/-</h2>
                        </div>
                    </div>
                </div>
                <div className='font-SulphurPoint font-bold flex items-center gap-3 pt-3'>
                    <img src={checkIcon} className='w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]' alt="" />
                    <p className='text-sm lg:text-xl text-[#504949]'>Delivered on Tue, 12 Dec</p>
                </div>
            </div>

            {/* third car */}
            <div className='rounded-xl bg-[#FFFFFF] md:bg-[#FFF6F6] p-4 '>
                    <div className='flex gap-2 sm:gap-4 lg:gap-6'>
                        <img className=' shrink-0 h-[110px] w-[110px] lg:w-[140px] lg:h-[140px] rounded-xl border border-[#E9EAEE]' src={product1} alt="" />
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
                <div className='font-SulphurPoint font-bold flex items-center gap-3 pt-3'>
                    <img className='w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]' src={removeIcon} alt="" />
                    <p className='text-sm lg:text-xl text-[#504949]'>Delivery by Tue, 12 Dec</p>
                </div>
            </div>

            {/* <img src={removeIcon} className='h-[18px] w-[18px]' alt="" /> */}
            </div>
        </div>
        </div>
    )
}

export default MyOrders
