import React from 'react'

import GlamgoOnPhoneImg1 from '../../assets/Image/GlamgoOnPhoneImg1.png';
import GlamgoOnPhoneImg2 from '../../assets/Image/GlamgoOnPhoneImg2.png';
import GooglePlayAppleStore from '../../assets/Image/Google-play-Apple-store.png';



const GetGlamgoMobileApp = () => {
    return (
        <div className='hidden w-[80%] lg:[50%] xl:w-[70%] mx-auto my-[5rem] md:block mb-[3rem]'>
            <h3 className='f font-SulphurPoint font-normal leading-[3rem] lg:leading-[4rem] xl:leading-[5rem] text-[50px] lg:text-[70px] xl:text-[80px] text-[#A21D3C]'>Get Glamgo <br /> Mobile App</h3>
            <div className=' flex justify-between'>
                <div className=' min-w-[55%] lg:min-w-[60%] xl:min-w-[65%]'>
                    <p className='my-[3.5rem] lg:my-[5rem] font-SulphurPoint font-normal leading-[1.5rem] text-[#2D2D2D] text-lg lg:text-2xl xl:text-3xl'>Unlock the beauty secrets by <br /> downloading our app today!</p>
                    <div>
                        <img className='w-[10rem] lg:w-[14rem] xl:w-[16rem]' src={GooglePlayAppleStore} alt="" />
                    </div>
                </div>
                <div className=' grow relative'>
                    <img className='w-[7rem] lg:w-[10rem] xl:w-[12rem] absolute top-2 left-[13%] -translate-x-1/2' src={GlamgoOnPhoneImg1} alt="" />
                    <img className='w-[9rem] lg:w-[12.5rem] xl:w-[15rem] absolute top-[-5%] left-[40%] lg:left-[50%] xl:left-[60%] -translate-x-1/2' src={GlamgoOnPhoneImg2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GetGlamgoMobileApp
