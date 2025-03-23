import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../Shipping/Hero'
import img9 from '../../assets/Shipping/Group.png'
import img6 from '../../assets/Payment/Group 317 (1).png'
import img7 from '../../assets/Shipping/Vector 20.png'
import img8 from '../../assets/Payment/fluent_payment-32-regular.png'
import img14 from '../../assets/Payment/fluent_phone-20-regular.png'
import img10 from '../../assets/Payment/fluent_payment-48-regular.png'
import img11 from '../../assets/Payment/fluent_building-bank-48-regular.png'
import img12 from '../../assets/Payment/material-symbols-light_payments-outline.png'
import img13 from '../../assets/Payment/icon-park-outline_down.png'
import ShipOr from '../Shipping/ShipOr'
import img15 from '../../assets/CheckoutCart/300x300.png'
import { NavLink } from 'react-router-dom'

const Payment = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className='  flex justify-center  items-center lg:items-start  gap-6  font-SulphurPoint'>
               
                <div className=' flex flex-col gap-4  mt-4 font-SulphurPoint'>
                    <div className='bg-white p-5 rounded-[12px] flex flex-row items-center lg:gap-4'>


                        <div className=' flex flex-col items-center'>
                            <img className=' w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]' src={img6} alt="" />
                            <p className=' lg:text-[24px] font-[400] text-[#3BA30F] '>Shipping</p>
                        </div>
                        <img className=' w-[30px] lg:w-[60px] h-1' src={img7} alt="" />
                        <div className=' flex flex-col items-center'>
                            <img className=' w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]' src={img8} alt="" />
                            <p className='lg:text-[24px] font-[700] text-[#D66F11]'>Payment</p>
                        </div>
                        <img className=' w-[30px] lg:w-[60px] h-1' src={img7} alt="" />
                        <div className=' flex flex-col items-center'>
                            <img className='  w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]' src={img9} alt="" />
                            <p className='lg:text-[24px] font-[400]'>Confirmation</p>
                        </div>
                    </div>
                    <div className=' rounded-[12px] flex justify-between items-center bg-white p-4'>
                        <div className=' flex items-center flex-row gap-3'>
                            <img className=' w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' src={img14} alt="" />
                            <p className=' text-[18px] lg:text-[24px] font-[700]'>UPI</p>
                        </div>
                        <img className='w-[24px] h-[24px]' src={img13} alt="" />
                    </div>
                    <div className=' rounded-[12px] flex justify-between items-center bg-white p-4'>
                        <div className=' flex items-center flex-row gap-3'>
                            <img className=' w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' src={img10} alt="" />
                            <p className=' text-[18px] lg:text-[24px] font-[700]'>Credit/Debit Card</p>
                        </div>
                        <img className='w-[24px] h-[24px]' src={img13} alt="" />
                    </div>
                    <div className=' rounded-[12px] flex justify-between items-center bg-white p-4'>
                        <div className=' flex items-center flex-row gap-3'>
                            <img className=' w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' src={img11} alt="" />
                            <p className=' text-[18px] lg:text-[24px] font-[700]'>Net Banking</p>
                        </div>
                        <img className='w-[24px] h-[24px]' src={img13} alt="" />
                    </div>
                    <div className=' rounded-[12px] flex justify-between items-center bg-white p-4'>
                        <div className=' flex items-center flex-row gap-3'>
                            <img className=' w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' src={img12} alt="" />
                            <p className=' text-[18px] lg:text-[24px] font-[700]'>Cash on Delivery</p>
                        </div>
                        <img className='w-[24px] h-[24px]' src={img13} alt="" />
                    </div>

                    <button className='  text-[18px] lg:text-[24px] font-[700] w-full items-center justify-center p-2 text-white mt-5 border bg-[#A21D3C]'>
                        <NavLink
                            to="/"
                        >
                            Place Order
                        </NavLink>

                    </button>

                </div>

                <ShipOr />
               
            </div>
        </>
    )
}

export default Payment