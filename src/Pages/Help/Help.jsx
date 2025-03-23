import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import img7 from '../../assets/Faq/Group 1254.png'
import img8 from '../../assets/Faq/Group 1253.png'
// import { count } from 'console';
import { IoCallOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { GoArrowLeft } from "react-icons/go";


const Help = () => {
    const [Count, setCount] = useState(1)
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <>
            {
                Count === 1 ?
                    <div className=' font-SulphurPoint flex  justify-center gap-5 mt-10'>

                        <div className=' flex  flex-col gap-5  lg:w-[1040px] rounded-[24px] h-vh bg-white p-5'>
                            <div className=' flex justify-center items-center  '>
                                <div className='flex w-[50%] items-center justify-center'>
                                    <p onClick={() => { setCount(1) }} className=' hover:cursor-pointer text-[#A21D3C] text-[16px] lg:text-[24px] font-[700]'>FAQs</p>
                                </div>
                                <div className='flex w-[50%] items-center justify-center'>

                                    <p onClick={() => { setCount(2) }} className='  hover:cursor-pointer text-[#989898]  text-[16px] lg:text-[24px] font-[400] '>Contact Us</p>

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
                                                <IoIosArrowUp className=' text-[24px] text-[#A21D3C]' />
                                                :

                                                <IoIosArrowDown className='text-[24px] text-[#A21D3C]' />

                                        }

                                    </div>

                                </div>
                                <div className={` ${showDropDown ? ' visible' : ' hidden'}  bg-white rounded-[12px]  p-5 text-[18px] font-[400]`}>
                                    <ul className="list-disc">
                                        <li>If you have a Pro Membership, you can enjoy exclusive benefits, including the ability to connect directly with your preferred artists. </li>
                                        <li>If you're not a Pro Member, don't worry! You can still connect with artists by sending a chat request. Simply browse through the artist profiles, find someone whose work you admire, and send a chat request specifying your inquiry or interest in their services. Once the artist accepts your request, you can start chatting and discussing the details. </li>

                                    </ul>
                                </div>
                                <div className=' w-full  border border-[#DCDCDC]'></div>
                                <div className=' flex justify-between'>
                                    <p className='text-[16px] lg:text-[20px] font-[400]'>Can I send attachments or images in a chat request?</p>
                                    <IoIosArrowDown className=' text-[24px] text-[#A21D3C]' />

                                </div>
                                <div className=' w-full  border border-[#DCDCDC]'></div>
                                <div className=' flex justify-between'>
                                    <p className='text-[16px] lg:text-[20px] font-[400]'>How long does it take for an artist to respond to a chat request?</p>
                                    <IoIosArrowDown className=' text-[24px] text-[#A21D3C]' />

                                </div>
                            </div>
                            <div className='bg-[#FFF6F6] p-5 flex flex-col  gap-3'>
                                <p className=' text-[#A21D3C] text-[16px] lg:text-[24px] font-[700]'>Orders</p>
                                <div className=' flex justify-between'>
                                    <p className='text-[16px] lg:text-[20px] font-[400]'>How do i place an order for makeup products?</p>
                                    <IoIosArrowDown className=' text-[24px] text-[#A21D3C]' />



                                </div>
                                <div className=' w-full  border border-[#DCDCDC]'>
                                </div>
                                <div className=' flex justify-between'>
                                    <p className='text-[16px] lg:text-[20px] font-[400]'>Can i modify or cancel my order after its placed?</p>
                                    <IoIosArrowDown className=' text-[24px] text-[#A21D3C]' />

                                </div>
                                <div className=' w-full  border border-[#DCDCDC]'></div>
                                <div className=' flex justify-between'>
                                    <p className='text-[16px] lg:text-[20px] font-[400]'>How can I track the status of my order?</p>
                                    <IoIosArrowDown className=' text-[24px] text-[#A21D3C]' />

                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    Count === 2 ?
                        <div className=' font-SulphurPoint flex flex-row justify-center gap-5 mt-10'>

                            <div className=' flex  flex-col gap-5 rounded-[24px]  lg:w-[1040px] h-vh bg-white p-5'>
                                <div className=' flex justify-center items-center  '>
                                    <div className='flex w-[50%] items-center justify-center'>

                                        <p onClick={() => { setCount(1) }} className=' hover:cursor-pointer text-[#A21D3C] text-[16px] lg:text-[24px] font-[700]'>FAQs</p>

                                    </div>
                                    <div className='flex w-[50%] items-center justify-center'>
                                        <p onClick={() => { setCount(2) }} className=' hover:cursor-pointer text-[#989898]  text-[16px] lg:text-[24px] font-[400] '>Contact Us</p>
                                    </div>
                                </div>
                                <img src={img8} alt="" />
                                <div className=' bg-[#FFF6F6] rounded-[12px] flex gap-5 p-5'>
                                    <IoCallOutline className='text-[30px] text-[#A21D3C]' />
                                    <div className=' text-[16px] lg:text-[20px] font-[700]'>
                                        <p >Call us at </p>
                                        <p>00-234-567-890</p>
                                        <p className=' text-[#989898] text-[10px] lg:text-[18px] font-[400]'>Monday to Saturday : 9am-10pm</p>
                                    </div>
                                </div>
                                <div className=' flex justify-between bg-[#FFF6F6] p-5 items-center'>
                                    <div className='  rounded-[12px] flex gap-5'>
                                        <TfiWrite className='text-[30px] text-[#A21D3C]' />
                                        <div onClick={() => { setCount(3) }} className=' hover:cursor-pointer text-[16px] lg:text-[20px] font-[700]'>
                                            <p >Write to us </p>

                                            <p className=' text-[#989898] text-[18px] font-[400]'>Response within 24 hours</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        :
                        Count === 3 ?
                            <div className=' font-SulphurPoint flex flex-col gap-5'>

                                <div className=' flex gap-10 mt-5'>
                                    <GoArrowLeft onClick={()=>{setCount(2)}} className='  hover:cursor-pointer text-[30px] text-[#A21D3C]' />
                                    <p className=' text-[24px] font-[700]'>Write to us</p>

                                </div>
                                <div className=' flex  justify-center gap-5'>
                                    <div className=' flex  flex-col gap-5 rounded-[24px] mt-10  lg:w-[1040px] h-vh bg-white p-5'>
                                        <p className=' text-[#504949] text-[20px] font-[400]'>We're here to assist you! If you have any questions or concerns, please feel free to reach out to us. </p>
                                        <input className=' border py-4 px-2 w-full rounded-[12px]  border-[#989898] bg-[#F3EFEF] lg:w-[50%]' type="text" placeholder='Email ID' />
                                        <input className=' border py-4 w-full px-2 rounded-[12px] border-[#989898] bg-[#F3EFEF] lg:w-[50%]' type="text" placeholder=' Subject' />
                                        <input className=' h-20  border w-full py-4 px-2 rounded-[12px] border-[#989898] bg-[#F3EFEF] lg:w-[50%]' type="text" placeholder=' Message here' />
                                        <button className=' bg-[#A21D3C] w-full mt-10 text-white text-[16px] font-[700] p-2 rounded-[12px] lg:text-[24px] flex items-center justify-center lg:w-[50%]'>
                                            Submit
                                        </button>
                                    </div>

                                </div>
                            </div>
                            :
                            null
            }
        </>
    )
}

export default Help