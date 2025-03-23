import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'
import img6 from '../../assets/ChatRequest/Icon Search.png'
import img7 from '../../assets/ChatRequest/Vector 15.png'
import img8 from '../../assets/ChatRequest/Rectangle 588.png'
import img9 from '../../assets/ChatRequest/Rectangle 587.png'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'


const ChatRequest = () => {
    const headerData = [
        {page : 'My Profile', pageURL : '/userProfile'},
        {page : 'Chat Requests', pageURL : '/ChatRequest'}
    ]
    return (
        <>
            <Navbar />
            <div className='bg-[#F3EFEF] font-SulphurPoint '>
                <Heading pageNavigation={headerData}/>

                {/* h-[672px] w-[1040px] */}
                <div className='flex items-center justify-center'>
                    <div className='bg-white p-6 lg:p-10  flex flex-col gap-10 mt-10 '>
                        <div className=' flex gap-2 p-3 shadow-xl items-center'>
                            <img className=' w-[24px] h-[24px]' src={img6} alt="" />
                            <input className=' w-full' type="text" placeholder='Search...' />
                        </div>
                        <img src={img7} alt="" />
                        <div className=' p-3 shadow-lg flex justify-between'>
                            <div className=' flex flex-row gap-2 items-center'>
                               
                                <img className=' w-[50px] h-[50px]' src={img8} alt="" />
                                <p className=' text-[16px] lg:text-[20px]  font-[700]'>Abhigyna Makeovers</p>
                               
                            </div>
                            <div className=' hover:cursor-pointer flex flex-col gap-2'>
                            <NavLink
                                to="/Chat"
                                >
                                <p className='text-[#989898] text-[16px] font-[400]'>11:00AM</p>
                                <div className=' h-[24px] w-[24px] flex justify-center rounded-full items-center  bg-[#A21D3C]'>
                                    <p className='  text-white'>1</p>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className=' p-3 shadow-lg flex justify-between'>
                            <div className=' flex gap-2 items-center'>
                                <img className=' w-[50px] h-[50px]' src={img9} alt="" />
                                <p className=' text-[16px] lg:text-[20px]  font-[700]'>Luxe Hairstyling and Makeover</p>
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <p className='text-[#989898] text-[16px] font-[400]'>11:00AM</p>
                                <div className=' h-[24px] w-[24px] flex justify-center rounded-full items-center  bg-[#A21D3C]'>
                                    <p className='  text-white'>1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatRequest