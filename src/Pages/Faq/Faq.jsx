import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'
import img6 from '../../assets/Faq/Vector 15.png'
import img7 from '../../assets/Faq/Group 1254.png'

import img8 from '../../assets/Faq/icon-park-outline_down.png'
import img9 from '../../assets/Faq/Vector (1).png'

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from 'react-router-dom'

const Faq = () => {
    const [showDropDown, setShowDropDown] = useState(false)
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

                <div className=' flex  justify-center gap-5 mt-10'>

                    <div className=' flex  flex-col gap-5  lg:w-[1040px] rounded-[24px] h-vh bg-white p-5'>
                        <div className=' flex justify-center items-center  '>
                            <div className='flex w-[50%] items-center justify-center'>
                                <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700]'>FAQs</p>
                            </div>
                            <div className='flex w-[50%] items-center justify-center'>
                                <NavLink to="/ContactToUs" >
                                    <p className=' text-[#989898]  text-[16px] lg:text-[24px] font-[400] '>Contact Us</p>
                                </NavLink>
                            </div>
                        </div>
                        <img src={img7} alt="" />
                        <div className='bg-[#FFF6F6] p-5 flex flex-col  gap-3'>
                            <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700]'>Connecting with an artist</p>
                            <div className='  flex justify-between items-center'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>How do I connect with an artist?</p>
                                <div className=' cursor-pointer ' onClick={() => {
                                    setShowDropDown(!showDropDown)
                                }}>{
                                        showDropDown ?
                                            <img className=' hover:cursor-pointer w-[24px] h-[24px]' src={img8} alt="" />
                                            :
                                            <img className=' hover:cursor-pointer w-[15px] h-[10px] mr-1' src={img9} alt="" />

                                    }

                                </div>

                            </div>
                            <div className={` ${showDropDown ? ' visible' : ' hidden'}  bg-white rounded-[12px]  p-5 text-[18px] font-[400]`}>
                                <ul className="list-disc">
                                    <li>If you have a Pro Membership, you can enjoy exclusive benefits, including the ability to connect directly with your preferred artists. </li>
                                    <li>If you're not a Pro Member, don't worry! You can still connect with artists by sending a chat request. Simply browse through the artist profiles, find someone whose work you admire, and send a chat request specifying your inquiry or interest in their services. Once the artist accepts your request, you can start chatting and discussing the details. </li>

                                </ul>
                            </div>
                            <img src={img6} alt="" />
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>Can I send attachments or images in a chat request?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />

                            </div>
                            <img src={img6} alt="" />
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>How long does it take for an artist to respond to a chat request?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />

                            </div>
                        </div>
                        <div className='bg-[#FFF6F6] p-5 flex flex-col  gap-3'>
                            <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700]'>Orders</p>
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>How do i place an order for makeup products?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />



                            </div>
                            <img src={img6} alt="" />
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>Can i modify or cancel my order after its placed?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />

                            </div>
                            <img src={img6} alt="" />
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>How can I track the status of my order?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Faq