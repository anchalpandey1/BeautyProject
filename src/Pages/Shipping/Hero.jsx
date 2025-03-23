import React from 'react'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'

const Hero = () => {
    return (
        <>
            <div className=' w-full h-[84px] shadow-lg  items-center flex justify-between px-5'>
                <div className=' flex flex-row  gap-8 lg:gap-10 items-center'>
                    <img className=' w-[60px] h-[60px]' src={img1} alt="" />
                    <span className=' font-SulphurPoint font-[700] text-[18px] lg:text-[28px]'>
                        Checkout
                    </span>
                </div>
                <div className=' flex flex-row gap-2 items-center'>
                    <img className=' w-[60px] h-[60px]' src={img2} alt="" />
                    <img className=' hidden lg:block h-[30px] ' src={img3} alt="" />
                    <img className=' hidden lg:block w-[60px] h-[60px]' src={img4} alt="" />
                    <img className=' hidden lg:block h-[30px] ' src={img3} alt="" />
                    <img className=' hidden lg:block w-[60px] h-[60px]' src={img5} alt="" />
                </div>

            </div>
        </>
    )
}

export default Hero