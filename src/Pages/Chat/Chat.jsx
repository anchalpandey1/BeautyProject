import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'
import img6 from '../../assets/ChatRequest/Icon Search.png'
import img7 from '../../assets/ChatRequest/Rectangle 588.png'
import img8 from '../../assets/ChatRequest/Rectangle 587.png'
import img9 from '../../assets/ChatRequest/Vector 15.png'
import img10 from '../../assets/Chat/charm_tick-double.png'
import img11 from '../../assets/Chat/Group 259.png'
import img12 from '../../assets/Chat/icon _mic_.png'
import img13 from '../../assets/Chat/gallery.png'
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Chat = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#F3EFEF] font-SulphurPoint '>
                <div className=' w-full h-[84px] shadow-lg  items-center flex justify-between px-5'>
                    <div className=' flex flex-row  gap-3 lg:gap-10 items-center'>
                        <img className=' w-[60px] h-[60px]' src={img1} alt="" />
                        <div className=' flex items-center text-[16px]  lg:text-[20px] gap-1 font-[700]'>
                            <p>My Profile</p>
                            <MdOutlineArrowForwardIos />
                            <p>Chat Requests</p>
                        </div>
                    </div>
                    <div className=' flex flex-row gap-2 items-center'>
                        <img className=' w-[60px] h-[60px]' src={img2} alt="" />
                        <img className=' hidden lg:block h-[30px] ' src={img3} alt="" />
                        <img className=' hidden lg:block w-[60px] h-[60px]' src={img4} alt="" />
                        <img className=' hidden lg:block h-[30px] ' src={img3} alt="" />
                        <img className=' hidden lg:block w-[60px] h-[60px]' src={img5} alt="" />
                    </div>

                </div>
                <div className=' flex items-center justify-center '>
                    <div className=' bg-white w-full p-5 lg:p-0 lg:w-[1040px]  flex flex-row rounded-[24px] mt-10'>
                        <div className=' hidden lg:flex flex-col gap-5 p-5 w-[456px] border '>
                            <div className=' p-2 flex gap-2 shadow-lg'>

                                <img className=' w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]' src={img6} alt="" />
                                <input type="text" placeholder='Search' />
                            </div>
                            <img className='w-full' src={img9} alt="" />
                            <div className=' flex justify-between items-center border p-2'>
                                <div className=' flex flex-row gap-1 items-center'>
                                    <img className=' w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]' src={img7} alt="" />
                                    <p className=' text-[16px] font-[700]'>Abhigyna Makeovers</p>
                                </div>
                                <div className=' flex flex-col gap-3'>
                                    <p className='text-[#989898] text-[16px] font-[400]'>11:00 AM</p>
                                    <div className='  rounded-full bg-[#A21D3C] flex items-center justify-center  w-[24px] h-[24px] '>
                                        <p className=' text-white text-[16px] font-[700]'>1</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-between items-center border p-2'>
                                <div className=' flex flex-row gap-1 items-center'>
                                    <img className=' w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]' src={img8} alt="" />
                                    <p className=' text-[16px] font-[700]'>Abhigyna Makeovers</p>
                                </div>
                                <div className=' flex flex-col gap-3'>
                                    <p className='text-[#989898] text-[16px] font-[400]'>11:00 AM</p>
                                    <div className=' rounded-full bg-[#A21D3C] flex items-center justify-center  w-[24px] h-[24px] '>
                                        <p className=' text-white  text-[16px] font-[700]'>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-[#FAFAFA] px-2 py-4 w-full lg:w-[596px]'>
                            <div className=' flex flex-row gap-1 items-center'>
                                <img className=' w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]' src={img7} alt="" />
                                <p className=' text-[16px] font-[700]'>Abhigyna Makeovers</p>
                            </div>
                            <div className=' flex flex-col bg-[#F3EFEF] ' >
                                <p className=' text-center text-[#989898] my-10'>Today 12:39 pm</p>
                                <div className=' flex flex-col  gap-10 w-full'>
                                    <div className=' font-Roboto  w-fit bg-white p-3 flex items-end gap-1 rounded-[12px]'>
                                        <p className=' text-[12px] text-[#2D2D2D] font-[100]'>Welcome to Abhigyna makeovers, you requested for an enquiry about our makeup service</p>
                                        <p className='text-[#989898] text-[10px] font-[400]'>12:39</p>
                                    </div>

                                    <div>
                                        <div className='font-Roboto w-fit   float-right rounded-[12px] flex flex-row my-10  gap-1 bg-white p-3'>
                                            <p className='text-[12px] text-[#2D2D2D] font-[100]'>Hello I wanted to enquire about your
                                                Bridal Makeup Service..  </p>
                                            
                                        </div>
                                    </div>
                                    <div className=' bg-white p-3 flex justify-between '>
                                        <div className='flex gap-2'>
                                            <img className=' w-[42px] h-[42px]' src={img11} alt="" />
                                            <input type="text" placeholder='Type a message' />
                                        </div>
                                        <div className=' flex gap-2'>
                                            <img className=' w-[16px] h-[28px]' src={img12} alt="" />
                                            <img className=' w-[24px] h-[24px]' src={img13} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat