import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import img6 from '../../assets/ArtistPro/SliverPro/Rectangle 651.png'
import img7 from '../../assets/ArtistPro/SliverPro/ion_diamond-outline.png'
import img8 from '../../assets/ArtistPro/SliverPro/Group 317.png'
import img9 from '../../assets/ArtistPro/SliverPro/Vector (1).png'
import img10 from '../../assets/ArtistPro/SliverPro/Vector 15 (1).png'
import img11 from '../../assets/ArtistPro/SliverPro/Product Details.png'
import img61 from '../../assets/ArtistPro/GoldPro/Rectangle 652.png'
import img71 from '../../assets/ArtistPro/SliverPro/ion_diamond-outline.png'
import img81 from '../../assets/ArtistPro/GoldPro/Group 398.png'
import img91 from '../../assets/ArtistPro/SliverPro/Vector (1).png'
import img101 from '../../assets/ArtistPro/SliverPro/Vector 15 (1).png'
import img111 from '../../assets/ArtistPro/SliverPro/Product Details.png'
import img62 from '../../assets/ArtistPro/PlatinumPro/Rectangle 651.png'
import img72 from '../../assets/ArtistPro/SliverPro/ion_diamond-outline.png'
import img82 from '../../assets/ArtistPro/PlatinumPro/Group 397.png'
import img92 from '../../assets/ArtistPro/SliverPro/Vector (1).png'
import img102 from '../../assets/ArtistPro/SliverPro/Vector 15 (1).png'
import img112 from '../../assets/ArtistPro/SliverPro/Product Details.png'
import { MdCheckCircle } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import NavbarArtist from '../../components/Navbar/NavbarArtist'
const Pro = () => {
    const [count, setcount] = useState(1)
    return (
        <>

            {/* <NavbarArtist /> */}
            <div className='  lg:w-[80%] right-10 font-SulphurPoint flex '>
                

                <div className=' p-2 lg:p-8 bg-[#F3EFEF] w-full '>
                    {
                        count === 1 ?
                            // Sliver Pro
                            <div className=' flex flex-row justify-center gap-5 '>

                                <div className=' flex  flex-col gap-5  '>
                                    <div className=' hidden lg:w-[1040px] rounded-[24px] h-vh lg:flex justify-between bg-gradient-to-r from-[#DFDDDD] '>
                                        <div className=' w-[50%] pt-20 px-10 flex flex-col gap-10'>
                                            <div className=' text-[16px] lg:text-[24px] font-[700]'>
                                                <p >Hi Yuno,</p>
                                                <p>Unlock the Silver benefits!</p>
                                            </div>
                                            <div className=' flex  gap-5'>
                                                <button onClick={() => { setcount(1) }} className=' border border-[#BEBEBE] rounded-[12px] scale-125  bg-white flex justify-center px-10 py-2 items-center p-2 text-[20px] font-[700]'>Sliver</button>
                                                <button onClick={() => { setcount(2) }} className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center p-2 px-10 text-[18px] font-[400] text-[#989898] '>Gold</button>
                                                <button onClick={() => { setcount(3) }} className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center p-2 px-10  text-[18px] font-[400] text-[#989898]'>Platinum</button>
                                                
                                            </div>
                                            <button className=' bg-[#A21D3C] text-[16px] lg:text-[24px] font-[700] text-white p-2 rounded-[12px]'>
                                                Go Silver
                                            </button>
                                        </div>
                                        <div className=' w-[50%]'>
                                            <img src={img6} alt="" />
                                        </div>
                                    </div>
                                    {/* md: screem view  */}
                                    <div className='  lg:hidden w-full bg-SliverPro bg-no-repeat bg-cover  bg-center h-80 '>
                                        <div className=' bg-gradient-to-t from-[#DFDDDD] relative flex h-full w-full  gap-2 flex-col  text-[24px]  font-[700]'>
                                            <p className=' absolute left-10 min-[200px]:bottom-24  min-[317px]:bottom-14' >Hi Yuno,</p>
                                            <p className='  absolute left-10 bottom-5' >Unlock the Silver benefits!</p>
                                        </div>
                                    </div>
                                    <div className='lg:hidden flex items-center justify-center  gap-5'>
                                        <button onClick={() => { setcount(1) }} className=' border border-[#BEBEBE] rounded-[12px] scale-125  bg-white flex justify-center px-5 py-2 items-center p-2 text-[14px] font-[700]'>Sliver</button>
                                        <button onClick={() => { setcount(2) }} className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center p-2 px-5 text-[12px] font-[400] text-[#989898] '>Gold</button>
                                        <button onClick={() => { setcount(3) }} className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center p-2 px-5  text-[12px] font-[400] text-[#989898]'>Platinum</button>
                                        
                                    </div>


                                    <div className=' bg-white rounded-[24px] flex flex-col gap-5 p-5 lg:p-10 lg:w-[920px]'>
                                        <div className=' flex justify-between'>
                                            <p className=' text-[24px] font-[700] text-[#A21D3C]'>Rs. 299 /mo</p>
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
                                                <div className=' flex justify-between  gap-2 p-5 '>
                                                    <p className=' text-[20px] font-[400]'>What is the Pro Subscription and what does it offer?</p>
                                                    <img className=' w-[12px] h-[8px] mt-2' src={img9} alt="" />
                                                </div>
                                                <img src={img10} alt="" />
                                                <div className=' flex justify-between  gap-2 p-5 '>
                                                    <p className=' text-[20px] font-[400]'>How do I subscribe to a Pro Plan?</p>
                                                    <img className=' w-[12px] h-[8px] mt-2' src={img9} alt="" />
                                                </div>
                                                <img src={img10} alt="" />
                                                <div className=' flex justify-between  gap-2 p-5 '>
                                                    <p className=' text-[20px] font-[400]'>What are the differences between Silver, Gold, and Platinum Tiers?</p>
                                                    <img className=' w-[12px] h-[8px] mt-2' src={img9} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' flex gap-4 items-center'>
                                            <p className=' text-[20px] font-[700] text-[#A21D3C]'>View more FAQs </p>
                                            <NavLink
                                                to='/ProFaq'>


                                                <img className=' w-[14px] h-[14px]' src={img11} alt="" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            count === 2 ?
                                // Gold Pro
                                <div className=' flex flex-row justify-center gap-5 '>

                                    <div className=' flex  flex-col gap-5  '>
                                        <div className='lg:w-[1040px] rounded-[24px] h-vh hidden  lg:flex justify-between bg-gradient-to-r from-[#EAD98E] '>
                                            <div className=' w-[50%] pt-20 px-10 flex flex-col gap-10'>
                                                <div className=' text-[16px] lg:text-[24px] font-[700]'>
                                                    <p >Hi Yuno,</p>
                                                    <p>Unlock the Gold benefits!</p>
                                                </div>
                                                <div className=' flex  gap-5'>
                                                   <button onClick={() => { setcount(1) }} className=' border border-[#BEBEBE] rounded-[12px] text-[#989898]  bg-white flex justify-center px-10 py-2 items-center p-2 text-[18px] font-[700]'>Sliver</button>
                                                    <button onClick={() => { setcount(2) }} className=' border border-[#D1BA3F] rounded-[12px] bg-[#FFF] flex justify-center items-center py-2  scale-125 px-10 text-[20px] font-[400] text-[#55222E] '>Gold</button>
                                                    <button onClick={() => { setcount(3) }} className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center p-2 px-10  text-[18px] font-[400] text-[#989898]'

                                                        >Platinum</button>
                                                    
                                                </div>
                                                <button className=' bg-[#A21D3C] text-[16px] lg:text-[24px] font-[700] text-white p-2 rounded-[12px]'>
                                                    Go Gold
                                                </button>
                                            </div>
                                            <div className=' w-[50%]'>
                                                <img src={img61} alt="" />
                                            </div>
                                        </div>
                                        <div className='  lg:hidden w-full bg-GoldPro bg-no-repeat bg-cover  bg-center h-80 '>
                                            <div className='  relative bg-gradient-to-t from-[#EAD98E] flex h-full w-full  gap-2 flex-col  text-[24px]  font-[700]'>
                                                <p className=' absolute left-10 min-[200px]:bottom-24  min-[317px]:bottom-14' >Hi Yuno,</p>
                                                <p className='  absolute left-10 bottom-5' >Unlock the Gold benefits!</p>
                                            </div>
                                        </div>
                                        <div className=' lg:hidden flex items-center justify-center  gap-5'>
                                            <button  onClick={() => { setcount(1) }} className=' border border-[#BEBEBE] rounded-[12px] text-[#989898]  bg-white flex justify-center px-5 py-2 items-center p-2 text-[12px] font-[700]'>Sliver</button>
                                            <button  onClick={() => { setcount(2) }} className=' border border-[#D1BA3F] rounded-[12px] bg-[#FFF] flex justify-center items-center py-2  scale-125 px-5 text-[14px] font-[400] text-[#55222E] '>Gold</button>
                                            <button  onClick={() => { setcount(3) }} className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center p-2 px-5  text-[12px] font-[400] text-[#989898]'

                                                >Platinum</button>
                                           
                                        </div>
                                        <div className=' bg-white rounded-[24px] flex flex-col gap-5 lg:p-10 p-5 lg:w-[920px]'>
                                            <div className=' flex justify-between'>
                                                <p className=' text-[24px] font-[700] text-[#A21D3C]'>Rs. 499 /mo</p>
                                                <img className=' w-[30px] h-[30px]' src={img71} alt="" />
                                            </div>
                                            <div className=' flex gap-4 items-center'>
                                                <img className='w-[16px] h-[16px]' src={img81} alt="" />
                                                <p className=' text-[18px] font-[400]'>150 Reward Points</p>
                                            </div>
                                            <div className=' flex gap-4 items-center'>
                                                <img className='w-[16px] h-[16px]' src={img81} alt="" />
                                                <p className=' text-[18px] font-[400]'>Access to exclusive makeup Artists</p>
                                            </div>
                                            <div className=' flex gap-4 items-center'>
                                                <img className='w-[16px] h-[16px]' src={img81} alt="" />
                                                <p className=' text-[18px] font-[400]'>Additional Discounts</p>
                                            </div>

                                        </div>
                                        <div className=' bg-white rounded-[24px] flex flex-col gap-5 p-5 lg:p-10 lg:w-[920px]'>
                                            <p className=' text-[#A21D3C]  text-[24px] font-[700]'>FAQs</p>
                                            <div className=' flex items-center justify-center'>
                                                <div className=' bg-[#FFF6F6] rounded-[12px] lg:w-[880px] '>
                                                    <div className=' flex justify-between p-5 gap-2'>
                                                        <p className=' text-[20px] font-[400]'>What is the Pro Subscription and what does it offer?</p>
                                                        <img className=' mt-2 w-[12px] h-[8px]' src={img91} alt="" />
                                                    </div>
                                                    <img src={img101} alt="" />
                                                    <div className=' flex justify-between p-5 gap-2'>
                                                        <p className=' text-[20px] font-[400]'>How do I subscribe to a Pro Plan?</p>
                                                        <img className=' mt-2 w-[12px] h-[8px]' src={img91} alt="" />
                                                    </div>
                                                    <img src={img101} alt="" />
                                                    <div className=' flex justify-between p-5 gap-2'>
                                                        <p className=' text-[20px] font-[400]'>What are the differences between Silver, Gold, and Platinum Tiers?</p>
                                                        <img className=' mt-2 w-[12px] h-[8px]' src={img9} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=' flex gap-4 items-center'>
                                                <p className=' text-[20px] font-[700] text-[#A21D3C]'>View more FAQs </p>
                                                <NavLink
                                                    to='/ProFaq'>


                                                    <img className=' w-[14px] h-[14px]' src={img111} alt="" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                count === 3 ?
                                    // Platinum Pro 
                                    <div className=' flex flex-row justify-center gap-5 '>

                                        <div className=' flex  flex-col gap-5  '>
                                            <div className=' lg:w-[1040px] rounded-[24px] h-vh hidden lg:flex justify-between bg-gradient-to-r from-[#E7CFFF] '>
                                                <div className=' w-[50%] pt-20 px-10 flex flex-col gap-10'>
                                                    <div className=' text-[16px] lg:text-[24px] font-[700]'>
                                                        <p >Hi Yuno,</p>
                                                        <p>Unlock the Platinum benefits!</p>
                                                    </div>
                                                    <div className=' flex  gap-5'>
                                                        <button onClick={() => { setcount(1) }} className=' border border-[#BEBEBE] rounded-[12px] text-[#989898]  bg-white flex justify-center px-10 py-2 items-center p-2 text-[18px] font-[700]'>Sliver</button>
                                                        <button onClick={() => { setcount(2) }} className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center py-2   px-10 text-[18px] font-[400] text-[#989898] '>Gold</button>
                                                       <button onClick={() => { setcount(3) }} className=' border ml-2 border-[#A86AE1] rounded-[12px] bg-[#FFF] flex justify-center items-center scale-125 p-2 px-10  text-[20px] font-[700] '>Platinum</button>
                                                        
                                                    </div>
                                                    <button className=' bg-[#A21D3C] text-[16px] lg:text-[24px] font-[700] text-white p-2 rounded-[12px]'>
                                                        Go Platinum
                                                    </button>
                                                </div>
                                                <div className=' w-[50%]'>
                                                    <img src={img62} alt="" />
                                                </div>
                                            </div>
                                            <div className='  lg:hidden w-full bg-PlatinumPro bg-no-repeat bg-cover  bg-center h-80 '>
                                                <div className=' bg-gradient-to-t from-[#E7CFFF] relative flex h-full w-full  gap-2 flex-col  text-[24px]  font-[700]'>
                                                    <p className=' absolute left-10 min-[200px]:bottom-24  min-[317px]:bottom-14' >Hi Yuno,</p>
                                                    <p className='  absolute left-10 bottom-5' >Unlock the Platinum benefits!</p>
                                                </div>
                                            </div>
                                            <div className=' lg:hidden flex items-center justify-center gap-5'>
                                               <button  onClick={() => { setcount(1) }} className=' border border-[#BEBEBE] rounded-[12px] text-[#989898]  bg-white flex justify-center px-5 py-2 items-center p-2 text-[12px] font-[700]'>Sliver</button>
                                               <button  onClick={() => { setcount(2) }} className=' border border-[#BEBEBE] rounded-[12px] bg-[#FFF] flex justify-center items-center py-2   px-5 text-[12px] font-[400] text-[#989898] '>Gold</button>
                                               <button  onClick={() => { setcount(3) }} className=' border ml-2 border-[#A86AE1] rounded-[12px] bg-[#FFF] flex justify-center items-center scale-125 p-2 px-5  text-[14px] font-[700] '>Platinum</button>
                                                
                                            </div>
                                            <div className=' bg-white rounded-[24px] flex flex-col gap-5 p-5 lg:p-10 lg:w-[920px]'>
                                                <div className=' flex justify-between'>
                                                    <p className=' text-[24px] font-[700] text-[#A21D3C]'>Rs. 499 /mo</p>
                                                    <img className=' w-[30px] h-[30px]' src={img72} alt="" />
                                                </div>
                                                <div className=' flex gap-4 items-center'>
                                                    <img className='w-[16px] h-[16px]' src={img82} alt="" />
                                                    <p className=' text-[18px] font-[400]'>150 Reward Points</p>
                                                </div>
                                                <div className=' flex gap-4 items-center'>
                                                    <img className='w-[16px] h-[16px]' src={img82} alt="" />
                                                    <p className=' text-[18px] font-[400]'>Access to exclusive makeup Artists</p>
                                                </div>
                                                <div className=' flex gap-4 items-center'>
                                                    <img className='w-[16px] h-[16px]' src={img82} alt="" />
                                                    <p className=' text-[18px] font-[400]'>Additional Discounts</p>
                                                </div>

                                            </div>
                                            <div className=' bg-white rounded-[24px] flex flex-col gap-5 p-5 lg:p-10 lg:w-[920px]'>
                                                <p className=' text-[#A21D3C]  text-[24px] font-[700]'>FAQs</p>
                                                <div className=' flex items-center justify-center'>
                                                    <div className=' bg-[#FFF6F6] rounded-[12px] lg:w-[880px] '>
                                                        <div className=' flex justify-between gap-2 p-5'>
                                                            <p className=' text-[20px] font-[400]'>What is the Pro Subscription and what does it offer?</p>
                                                            <img className=' mt-2 w-[12px] h-[8px]' src={img92} alt="" />
                                                        </div>
                                                        <img src={img102} alt="" />
                                                        <div className=' flex justify-between gap-2 p-5'>
                                                            <p className=' text-[20px] font-[400]'>How do I subscribe to a Pro Plan?</p>
                                                            <img className=' mt-2 w-[12px] h-[8px]' src={img92} alt="" />
                                                        </div>
                                                        <img src={img102} alt="" />
                                                        <div className=' flex justify-between gap-2 p-5'>
                                                            <p className=' text-[20px] font-[400]'>What are the differences between Silver, Gold, and Platinum Tiers?</p>
                                                            <img className=' mt-2 w-[12px] h-[8px]' src={img92} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=' flex gap-4 items-center'>
                                                    <p className=' text-[20px] font-[700] text-[#A21D3C]'>View more FAQs </p>
                                                    <NavLink
                                                        to='/ProFaq'>


                                                        <img className=' w-[14px] h-[14px]' src={img112} alt="" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null
                    }
                </div>
            </div>
        </>
    )
}

export default Pro