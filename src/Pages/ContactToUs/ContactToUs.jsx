import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'
import img7 from '../../assets/ContactToUs/Group 1253.png'
import img8 from '../../assets/ContactToUs/fluent_call-48-regular.png'
import img9 from '../../assets/ContactToUs/ci_note-edit.png'
import img10 from '../../assets/ContactToUs/icon-park-outline_down.png'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from 'react-router-dom'

const ContactToUs = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#F3EFEF] font-SulphurPoint '>
                <div className=' w-full h-[84px] shadow-lg  items-center flex justify-between px-5'>
                    <div className=' flex flex-row  gap-3 lg:gap-10 items-center'>
                        <img className=' w-[60px] h-[60px]' src={img1} alt="" />
                        <div className=' flex items-center text-[16px]  lg:text-[20px]  gap-1 font-[700]'>
                            <p>My Profile</p>
                            <MdOutlineArrowForwardIos />
                            <p>Help & Support</p>
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

                <div className=' flex flex-row justify-center gap-5 mt-10'>

                    <div className=' flex  flex-col gap-5 rounded-[24px]  lg:w-[1040px] h-vh bg-white p-5'>
                        <div className=' flex justify-center items-center  '>
                            <div className='flex w-[50%] items-center justify-center'>
                                <NavLink to= "/Faq">
                                <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700]'>FAQs</p>
                                </NavLink>
                            </div>
                            <div className='flex w-[50%] items-center justify-center'>
                                <p className=' text-[#989898]  text-[16px] lg:text-[24px] font-[400] '>Contact Us</p>
                            </div>
                        </div>
                        <img src={img7} alt="" />
                        <div className=' bg-[#FFF6F6] rounded-[12px] flex gap-5 p-5'>
                            <img className=' h-[30px] w-[30px]' src={img8} alt="" />
                            <div className=' text-[16px] lg:text-[24px] font-[700]'>
                                <p >Call us at </p>
                                <p>00-234-567-890</p>
                                <p className=' text-[#989898] text-[10px] lg:text-[18px] font-[400]'>Monday to Saturday : 9am-10pm</p>
                            </div>
                        </div>
                        <div className=' flex justify-between bg-[#FFF6F6] p-5 items-center'>
                            <div className='  rounded-[12px] flex gap-5'>
                                <img className=' h-[30px] w-[30px]' src={img8} alt="" />
                                <div className=' text-[16px] lg:text-[24px] font-[700]'>
                                    <p >Write to us </p>
                                    
                                    <p className=' text-[#989898] text-[18px] font-[400]'>Response within 24 hours</p>
                                </div>
                            </div>
                            <NavLink 
                            to="/WriteToUs">
                            <img className=' w-[24px] h-[24px]' src={img10} alt="" />
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactToUs