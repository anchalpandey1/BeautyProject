import React from 'react'

// import whatsapp and calling icon
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephoneMinus } from "react-icons/bs";

// import social media icons.
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import logo from '../../assets/Image/Logo.png'

import instagramLogo from '../../assets/Image/instagram-logo.png'
import facebookLogo from '../../assets/Image/facebook-logo.png'
import youtubeLogo from '../../assets/Image/youtube-logo.png'
// import required images.
import appleStore from '../../assets/Image/Apple_Store.png';
import playStore from '../../assets/Image/Play_Store.png';
const Footer = () => {
    return (
        <div className='hidden md:block w-full h-[500px] lg:h-[540px] bg-[#A21D3C] shadow-FooterBox'>
            <div className="w-[95%] lg:w-[95%] mx-auto py-[3rem]">
            
                <div className="flex justify-between">
                    {/* first column */}
                    <div className="grow lg:grow-0">
                        <img src={logo} className='w-[180px] h-fit lg:w-[200px] lg:h-[95px]  rounded-[30px]' alt="" />

                        {/* contact us */}
                        <div className='font-SulphurPoint font-normal text-[#FFFFFF] my-[1rem] pl-[1rem] lg:pl-[2rem]'>
                            <p className='text-lg lg:text-xl py-1'>Contact Us</p>

                            {/* contact via whatsApp */}
                            <div className='flex items-center gap-x-2 py-3'>
                                <FaWhatsapp className='text-lg lg:text-[22px]'/>
                                <p className='text-sm lg:text-base whitespace-nowrap'>+91 9014423456 </p>
                            </div>

                            {/* contact via calling */}
                            <div className='flex items-center gap-x-2 py-3'>
                                <BsTelephoneMinus className='text-lg lg:text-[22px]'/>
                                <p className='text-sm lg:text-base whitespace-nowrap'>+91 9876543213</p>
                            </div>

                            {/* contact via social media */}
                            <div className='flex gap-x-3 lg:gap-x-6 items-center my-[2rem]'>
                                <img src={instagramLogo} className='w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]' alt="" />
                                <img src={facebookLogo} className='w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]' alt="" />
                                <img src={youtubeLogo} className='w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]' alt="" />

                            </div>
                        </div>
                    </div>


                    {/* second column */}
                    <div className="font-SulphurPoint font-normal text-[#FFFFFF] px-[1rem] lg:px-[2rem] pt-[1.5rem]">
                        <h3 className='text-lg whitespace-nowrap lg:text-xl pb-1'>Popular Categories</h3>
                        <div className='w-[150px] lg:w-[180px] border-t-[1px] border-[#FFFFFFCC] my-1'></div>
                        <ul className='my-5'>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Makeup</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Skincare</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Bridal Makeup</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Nail care</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Hair</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Eyelash Extension</p>
                            </li>
                        </ul>
                    </div>


                    {/* third column */}
                    <div className="font-SulphurPoint font-normal text-[#FFFFFF] px-[10px] lg:px-[2rem] pt-[1.5rem]">
                        <h3 className='text-lg lg:text-xl pb-1'>Links</h3>
                        <div className='w-[150px] lg:w-[180px] border-t-[1px] border-[#FFFFFFCC] my-1'></div>
                        <ul className='my-5'>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>About Us</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Terms & Conditions</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>FAQ</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Privacy Policy</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Cancellation & Return Policy</p>
                            </li>
                            <li>
                                <p className='text-base lg:text-lg leading-7 lg:leading-9'>Eyelash Extension</p>
                            </li>
                        </ul>
                    </div>

                    {/* Download App column */}
                    <div className='font-SulphurPoint font-normal text-[#FFFFFF] px-[10px] pt-[1.5rem]'>
                        <p className='text-lg lg:text-xl'>Download App</p>
                        <div className='w-[150px] lg:w-[180px] border-t-[1px] border-[#FFFFFFCC] my-1'></div>
                        <div className='flex flex-col gap-y-3 lg:gap-y-7 my-7'>
                            <img src={appleStore} className='w-[120px] h-fit lg:w-[147px] lg:h-[47px]' alt="apple_store" />
                            <img src={playStore} className='w-[120px] h-fit lg:w-[147px] lg:h-[47px]' alt="play_store" />
                        </div>
                    </div>
                </div>

                 {/* end line */}
                        <div className='w-[93%] mx-auto border-t-[1px] border-[#FFFFFFCC] my-6'></div>

                {/* company rights */}
                <div className='font-SulphurPoint font-normal text-lg lg:text-xl text-[#FFFFFFCC] text-center'>
                    © 2023 All rights reserved. Glamgo Ltd.
                </div>

            </div>

        </div>
    )
}

export default Footer
