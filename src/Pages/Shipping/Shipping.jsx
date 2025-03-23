import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'

import img6 from '../../assets/Shipping/carbon_delivery-parcel.png'
import img7 from '../../assets/Shipping/Vector 20.png'
import img8 from '../../assets/Shipping/fluent_payment-32-regular.png'
import img9 from '../../assets/Shipping/Group.png'
import img10 from '../../assets/Shipping/ion_home.png'
import img11 from '../../assets/Shipping/tabler_edit.png'
import img12 from '../../assets/Shipping/Vector (1).png'


import Hero from './Hero'
import ShipOr from './ShipOr'
import img14 from '../../assets/CheckoutCart/300x300.png'
import { NavLink } from 'react-router-dom'
import AdMo from './AdMo'


const Shipping = () => {
    
    const [showMyModel, setShowMyModel] = useState(false)
    const handleOnClose = () => {
        setShowMyModel(false)
        document.body.style.overflow = 'auto';
    }
    const showModelBox = () => {
        setShowMyModel(true)
        document.body.style.overflow = 'hidden';
    }
    return (
        <>
            <Navbar />
            <div className='bg-[#F3EFEF] font-SulphurPoint'>
                <Hero />
                <div className='  flex justify-center     gap-6'>

                    <div className='  mt-4 font-SulphurPoint '>
                        <div className='bg-white  flex flex-row justify-between p-5 items-center gap-1 lg:gap-4'>


                            <div className=' flex flex-col items-center'>
                                <img className='w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]' src={img6} alt="" />
                                <p className='  lg:text-[24px] font-[700] text-[#D66F11]'>Shipping</p>
                            </div>
                            <img className='  w-[30px] lg:w-[60px] h-1' src={img7} alt="" />
                            <div className=' flex flex-col items-center'>
                                <img className='w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]' src={img8} alt="" />
                                <p className=' lg:text-[24px] font-[400]'>Payment</p>
                            </div>
                            <img className='  w-[30px] lg:w-[60px] h-1' src={img7} alt="" />
                            <div className=' flex flex-col items-center'>
                                <img className='w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]' src={img9} alt="" />
                                <p className=' lg:text-[24px] font-[400]'>Confirmation</p>
                            </div>
                        </div>
                        <div className=' bg-white mt-5  text-[#989898] text-[18px] font-[400] p-5 flex flex-col gap-3 '>
                            <div className=' flex justify-between items-center'>
                                <div className=' flex flex-row gap-2 '>
                                    <img className=' w-[24px] h-[24px]' src={img10} alt="" />
                                    <p className='text-[#504949] text-[19px] font-[700]'>Home</p>
                                </div>
                                <div className='flex flex-row gap-1 hover:cursor-pointer' onClick={ () => {showModelBox()}}>
                                    <img className=' w-[18px] h-[18px]' src={img11} alt="" />
                                    <p className='text-[#504949] text-[14px] font-[700]'>Edit</p>
                                </div>
                                

                            </div>
                            <p>Yuno Amano</p>
                            <p>+91 1234567890</p>
                            <p>12, Starwood Heights, sector 34, New Delhi, Delhi IN - 110052 </p>

                        </div>
                        <div className=' bg-white mt-5  text-[#989898] tetx-[18px] font-[400] p-5 flex flex-col gap-3 '>
                            <div className=' flex justify-between items-center'>
                                <div className=' flex flex-row gap-2 '>
                                    <img className=' w-[24px] h-[24px]' src={img12} alt="" />
                                    <p className='text-[#504949] text-[19px] font-[700]'>Office</p>
                                </div>
                                <div className='flex flex-row gap-1 hover:cursor-pointer' onClick={ () => {showModelBox()}}>
                                    
                                    <img className=' w-[18px] h-[18px]' src={img11} alt="" />
                                    <p className='text-[#504949] text-[14px] font-[700]'>Edit</p>
                                </div>
                            </div>
                            <p>Yuno Amano</p>
                            <p>+91 1234567890</p>
                            <p>12, Starwood Heights, sector 34, New Delhi, Delhi IN - 110052 </p>

                        </div>
                        <button onClick={ () => {showModelBox()}} className=' text-[22px] font-[900] w-full items-center justify-center p-2 bg-white  text-[#A21D3C] mt-5 border border-[#A21D3C]'>
                            + Add New Address
                        </button>
                        <button className=' text-[24px] font-[700] w-full items-center justify-center p-2 text-white mt-5 border bg-[#A21D3C]'>
                            <NavLink
                                to="/Payment"
                            >
                                Proceed to Payment
                            </NavLink>

                        </button>

                    </div>

                    <ShipOr />

                </div>
                <AdMo onClose={handleOnClose} visible={showMyModel} />
            </div>
        </>
    )
}

export default Shipping