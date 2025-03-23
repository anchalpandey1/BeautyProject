import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'
import img6 from '../../assets/PlatinumPro/Rectangle 651.png'
import img7 from '../../assets/SliverPro/ion_diamond-outline.png'
import img8 from '../../assets/PlatinumPro/Group 397.png'
import img9 from '../../assets/SliverPro/Vector (1).png'
import img10 from '../../assets/SliverPro/Vector 15 (1).png'
import img11 from '../../assets/SliverPro/Product Details.png'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'

const PlatinumPro = () => {
    const headerData = [
        {page : 'My Profile', pageURL : '/userProfile'},
        {page : 'Personal Details ', pageURL : '/userPersonalInfo'}
    ]
    return (
        <>
            <Navbar />
            <div className='bg-[#F3EFEF] font-SulphurPoint '>
                <Heading pageNavigation={headerData} />

                <div className=' flex flex-row justify-center gap-5 mt-10'>

                    <div className=' flex  flex-col gap-5  '>
                        <div className=' lg:w-[1040px] rounded-[24px] h-vh hidden lg:flex justify-between bg-gradient-to-r from-[#E7CFFF] '>
                            <div className=' w-[50%] pt-20 px-10 flex flex-col gap-10'>
                                <div className=' text-[16px] lg:text-[24px] font-[700]'>
                                    <p >Hi Yuno,</p>
                                    <p>Unlock the Platinum benefits!</p>
                                </div>
                                <div className=' flex  gap-5'>
                                    <NavLink to="/SilverPro"><button className=' border border-[#BEBEBE] rounded-[12px] text-[#989898]  bg-white flex justify-center px-10 py-2 items-center p-2 text-[18px] font-[700]'>Sliver</button>
                                    </NavLink>
                                    <NavLink
                                        to="/GoldPro"><button className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center py-2   px-10 text-[18px] font-[400] text-[#989898] '>Gold</button>
                                    </NavLink>
                                    <NavLink
                                        to="/PlatinumPro"><button className=' border ml-2 border-[#A86AE1] rounded-[12px] bg-[#FFF] flex justify-center items-center scale-125 p-2 px-10  text-[20px] font-[700] '>Platinum</button>
                                    </NavLink>
                                </div>
                                <button className=' bg-[#A21D3C] text-[16px] lg:text-[24px] font-[700] text-white p-2 rounded-[12px]'>
                                    Go Platinum
                                </button>
                            </div>
                            <div className=' w-[50%]'>
                                <img src={img6} alt="" />
                            </div>
                        </div>
                        <div className='  lg:hidden w-full bg-PlatinumPro bg-no-repeat bg-cover  bg-center h-80 '>
                            <div className=' bg-gradient-to-t from-[#E7CFFF] relative flex h-full w-full  gap-2 flex-col  text-[24px]  font-[700]'>
                                <p className=' absolute left-10 min-[200px]:bottom-24  min-[317px]:bottom-14' >Hi Yuno,</p>
                                <p className='  absolute left-10 bottom-5' >Unlock the Platinum benefits!</p>
                            </div>
                        </div>
                        <div className=' lg:hidden flex items-center justify-center gap-5'>
                            <NavLink to="/SilverPro"><button className=' border border-[#BEBEBE] rounded-[12px] text-[#989898]  bg-white flex justify-center px-5 py-2 items-center p-2 text-[12px] font-[700]'>Sliver</button>
                            </NavLink>
                            <NavLink
                                to="/GoldPro"><button className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center py-2   px-5 text-[12px] font-[400] text-[#989898] '>Gold</button>
                            </NavLink>
                            <NavLink
                                to="/PlatinumPro"><button className=' border ml-2 border-[#A86AE1] rounded-[12px] bg-[#FFF] flex justify-center items-center scale-125 p-2 px-5  text-[14px] font-[700] '>Platinum</button>
                            </NavLink>
                        </div>
                        <div className=' bg-white rounded-[24px] flex flex-col gap-5 p-5 lg:p-10 lg:w-[920px]'>
                            <div className=' flex justify-between'>
                                <p className=' text-[24px] font-[700] text-[#A21D3C]'>Rs. 499 /mo</p>
                                <img className=' w-[30px] h-[30px]' src={img7} alt="" />
                            </div>
                            <div className=' flex gap-4 items-center'>
                                <img className='w-[16px] h-[16px]' src={img8} alt="" />
                                <p className=' text-[18px] font-[400]'>150 Reward Points</p>
                            </div>
                            <div className=' flex gap-4 items-center'>
                                <img className='w-[16px] h-[16px]' src={img8} alt="" />
                                <p className=' text-[18px] font-[400]'>Access to exclusive makeup Artists</p>
                            </div>
                            <div className=' flex gap-4 items-center'>
                                <img className='w-[16px] h-[16px]' src={img8} alt="" />
                                <p className=' text-[18px] font-[400]'>Additional Discounts</p>
                            </div>

                        </div>
                        <div className=' bg-white rounded-[24px] flex flex-col gap-5 p-5 lg:p-10 lg:w-[920px]'>
                            <p className=' text-[#A21D3C]  text-[24px] font-[700]'>FAQs</p>
                            <div className=' flex items-center justify-center'>
                                <div className=' bg-[#FFF6F6] rounded-[12px] lg:w-[880px] '>
                                    <div className=' flex justify-between gap-2 p-5'>
                                        <p className=' text-[20px] font-[400]'>What is the Pro Subscription and what does it offer?</p>
                                        <img className=' mt-2 w-[12px] h-[8px]' src={img9} alt="" />
                                    </div>
                                    <img src={img10} alt="" />
                                    <div className=' flex justify-between gap-2 p-5'>
                                        <p className=' text-[20px] font-[400]'>How do I subscribe to a Pro Plan?</p>
                                        <img className=' mt-2 w-[12px] h-[8px]' src={img9} alt="" />
                                    </div>
                                    <img src={img10} alt="" />
                                    <div className=' flex justify-between gap-2 p-5'>
                                        <p className=' text-[20px] font-[400]'>What are the differences between Silver, Gold, and Platinum Tiers?</p>
                                        <img className=' mt-2 w-[12px] h-[8px]' src={img9} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className=' flex gap-4 items-center'>
                                <p className=' text-[20px] font-[700] text-[#A21D3C]'>View more FAQs </p>
                                <NavLink
                                to= '/ProFaq'>

                                
                                <img  className=' w-[14px] h-[14px]' src={img11} alt="" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlatinumPro