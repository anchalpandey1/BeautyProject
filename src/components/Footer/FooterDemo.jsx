// Footer section of the website.


import React from 'react'

// import required images.
import appleStore from '../../assets/Image/Apple_Store.png';
import playStore from '../../assets/Image/Play_Store.png';


// import whatsapp and calling icon
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephoneMinus } from "react-icons/bs";

// import social media icons.
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterDemo = () => {
    return (
        <div className='w-full h-[520px] bg-[#F7F7F7] py-16'>
            {/* here is content of footer section */}
            {/* here you can adjust the width */}
            <div className='w-[80%] mx-auto border border-black'>
                <div className="flex justify-between">
                    {/* 
                        first column. 
                        here is 1. makeup hub logo, 2. contact us.
                    */}
                    <div className='grow 2xl:w-[30%] 2xl:grow-0'>
                        {/* website logo */}
                        <h2 className='font-Poppins font-bold text-[40px] text-[#102861] leading-none pb-2'>Makeup hub</h2>
                        {/* contact us */}
                        <div className=' my-5 pl-9 font-Roboto font-normal text-[#414141]'>
                            <p className='text-xl py-1'>Contact Us</p>

                            {/* contact via whatsApp */}
                            <div className='flex items-center gap-1 py-3'>
                                <FaWhatsapp className='w-[22px] h-[22px] text-[#414141]'/>
                                <p className='text-base'>+919014423456 </p>
                            </div>

                            {/* contact via calling */}
                            <div className='flex items-center gap-1 py-3'>
                                <BsTelephoneMinus className='w-[22px] h-[22px] text-[#414141]'/>
                                <p className='text-base'>+919876543213 </p>
                            </div>

                            {/* contact via social media */}
                            <div className='flex gap-x-9 items-center my-6'>
                                <PiInstagramLogoFill className='text-[#AF2CB2] w-[26px] h-[26px]'/>
                                <FaFacebookF className='text-[#102861] w-[15px] h-[26px]'/>
                                <FaYoutube className='text-[#D91717] w-[29px] h-[19px]' />
                            </div>
                        </div>

                        
                    </div>

                    {/* Popular Categories columm */}
                    <div className='font-Roboto font-normal text-[#414141] px-8'>
                        <p className='text-xl'>Popular Categories</p>
                        <div className='w-[175px] border-t-[3px] border-[#666666] my-1'></div>
                        <ul className='my-5'>
                            <li className='leading-9 text-base'>Makeup services</li>
                            <li className='leading-9 text-base'>Makeup courses</li>
                            <li className='leading-9 text-base'>cosmetics</li>
                            <li className='leading-9 text-base'>eye makeup</li>
                            <li className='leading-9 text-base'>Top brands</li>
                        </ul>
                    </div>

                    {/* Customer Services column */}
                    <div className='font-Roboto font-normal text-[#414141] px-8'>
                        <p className='text-xl'>Customer Services</p>
                        <div className='w-[167px] border-t-[3px] border-[#666666] my-1'></div>
                        <ul className='my-5'>
                            <li className='leading-9 text-base'>About Us</li>
                            <li className='leading-9 text-base'>Terms & Conditions</li>
                            <li className='leading-9 text-base'>FAQ</li>
                            <li className='leading-9 text-base'>Privacy Policy</li>
                            <li className='leading-9 text-base'>Cancellation & Return Policy</li>
                        </ul>
                    </div>

                    {/* Download App column */}
                    <div className='font-Roboto font-normal text-[#414141] px-8'>
                        <p className='text-xl'>Download App</p>
                        <div className='w-[121px] border-t-[3px] border-[#666666] my-1'></div>
                        <div className='flex flex-col gap-y-7 pt-7'>
                            <img src={appleStore} className='w-[147px] h-[47px]' alt="apple_store" />
                            <img src={playStore} className='w-[147px] h-[47px]' alt="play_store" />
                        </div>
                    </div>
                </div>

                {/* end line */}
                <div className='w-[93%] mx-auto border-t-[1px] border-[#414141] my-6'></div>

                {/* company rights */}
                <div className='font-Roboto font-normal text-xl text-[#414141] text-center'>
                    © 2023 All rights reserved. Makeup hub  Ltd.
                </div>
            </div>
        </div>
    )
}

export default FooterDemo;
