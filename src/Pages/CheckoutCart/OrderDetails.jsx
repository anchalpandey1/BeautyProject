import React from 'react'
import { useState } from 'react';
import img12 from '../../assets/CheckoutCart/icon-park-outline_down.png'
import img14 from '../../assets/CheckoutCart/300x300.png'
import { NavLink} from 'react-router-dom'

const OrderDetails = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="relative lg:w-64 inline-block my-4 text-left h-fit  rounded-[12px] gap-1 bg-white ">
                <div className=' flex flex-row items-center w-full justify-between p-4 border'>
                    <p className=' text-[17px] font-[700] lg:text-[24px]'>Order Details</p>
                    <img onClick={toggleDropdown} className='w-[24px] h-[24px]'
                        type="button" src={img12} alt="" />

                </div>

                {isOpen && (
                    <div className="origin-top-right absolute flex flex-col gap-5 right-0 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className=' flex justify-between items-center w-full p-2'>
                            <p className='font-[400] text-[18px]' >Bag Total </p>
                            <p className='font-[400] text-[16px]'>₹698</p>
                        </div>
                        <div className=' flex justify-between items-center w-full p-2'>
                            <p className='font-[400] text-[18px]' >Bag Savings </p>
                            <p className='font-[400] text-[16px]'>₹698</p>
                        </div>
                        <div className=' flex justify-between items-center w-full p-2'>
                            <p className='font-[400] text-[18px]' >Coupon savings </p>
                            <p className='font-[400] text-[16px]'>₹0.00</p>
                        </div>
                        <div className=' flex justify-between items-center w-full p-2'>
                            <p className='font-[400] text-[18px]' >Delivery Fee </p>
                            <p className='font-[400] text-[16px] text-[#D66F11]' >Free Delivery </p>
                            <p className='font-[400] text-[16px] line-through'>₹49</p>
                        </div>
                        <div className=' flex justify-between items-center w-full p-2'>
                            <p className='font-[400] text-[18px]' >Bag Total </p>
                            <p className='font-[400] text-[16px]'>₹698</p>
                        </div>
                        
                        <button className='bg-[#A21D3C] text-[#F3EFEF] w-full items-center justify-center rounded-[12px] py-[14px] mb-5  '>
                            <NavLink
                            to="/Shippng"
                            >
                            Checkout
                            </NavLink>
                           
                        </button>
                        <img className=' hidden lg:block ' src={img14} alt="" />
                    </div>
                )}
            </div>
        </>
    )
}

export default OrderDetails