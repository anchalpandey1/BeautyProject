import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import img6 from '../../assets/Faq/Vector 15.png'


import img8 from '../../assets/Faq/icon-park-outline_down.png'

const ProFaq = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#F3EFEF] font-SulphurPoint '>
                <div className=' w-full h-[84px] shadow-lg  items-center flex justify-between px-5'>
                    <div className=' flex flex-row  gap-3 lg:gap-10 items-center'>
                        <img className=' w-[60px] h-[60px]' src={img1} alt="" />
                        <div className=' flex items-center text-[12px]  lg:text-[20px] gap-1 font-[700]'>
                            <p>My Profile</p>
                            <MdOutlineArrowForwardIos />
                            <p>Glamgo Pro</p>
                            <MdOutlineArrowForwardIos />
                            <p>FAQs</p>
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

                    <div className=' flex  flex-col gap-5  lg:w-[1040px] rounded-[24px] h-vh bg-white py-5 px-10'>

                    <p className='text-[#A21D3C]  text-[16px] lg:text-[24px] font-[700]'>FAQs</p>
                        <div className='bg-[#FFF6F6] rounded-[12px] p-5 flex flex-col  gap-3'>
                           
                            <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700]'>Pro Details</p>
                            <div className='  flex justify-between items-center'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>What is the Pro Subscription and what does it offer?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />

                            </div>

                            <img src={img6} alt="" />
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>How do I subscribe to a Pro Plan?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />

                            </div>
                            <img src={img6} alt="" />
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>What are the differences between Silver, Gold, and Platinum Tiers?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />

                            </div>
                        </div>
                        <div className='bg-[#FFF6F6] rounded-[12px] p-5 flex flex-col  gap-3'>
                            <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700]'>Silver Tier</p>
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>What benefits does the Silver Tier offer?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />



                            </div>
                            <img src={img6} alt="" />
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>How much does the Silver Tier cost?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />

                            </div>
                            <img src={img6} alt="" />
                            <div className=' flex justify-between'>
                                <p className='text-[16px] lg:text-[20px] font-[400]'>Can I upgrade from Silver to a higher tier?</p>
                                <img className=' w-[24px] h-[24px]' src={img8} alt="" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProFaq