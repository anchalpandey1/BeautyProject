import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/CheckoutCart/Group 595.png'
import img2 from '../../assets/CheckoutCart/Group 593.png'
import img3 from '../../assets/CheckoutCart/Vector 76.png'
import img4 from '../../assets/CheckoutCart/Group 255.png'
import img5 from '../../assets/CheckoutCart/Group 254.png'
import { MdOutlineArrowForwardIos } from "react-icons/md";

const WriteToUs = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#F3EFEF] font-SulphurPoint '>
                <div className=' w-full h-[84px] shadow-lg  items-center flex justify-between px-5'>
                    <div className=' flex flex-row  gap-3 lg:gap-10 items-center'>
                        <img className=' w-[60px] h-[60px]' src={img1} alt="" />
                        <div className=' flex items-center text-[16px]  lg:text-[20px] gap-1 font-[700]'>
                            <p>My Profile</p>
                            <MdOutlineArrowForwardIos />
                            <p>Chat Requests</p>
                        </div>
                    </div>
                    <div className=' flex flex-row gap-2 items-center'>
                        <img className=' w-[60px] h-[60px]' src={img2} alt="" />
                        <img className=' hidden lg:block h-[30px] ' src={img3} alt="" />
                        <img className=' hidden lg:block w-[60px] h-[60px]' src={img4} alt="" />
                        <img className=' hidden lg:block h-[30px] ' src={img3} alt="" />
                        <img className=' hidden lg:block w-[60px] h-[60px]' src={img5} alt="" />
                    </div>

                </div>

                <div className=' flex  justify-center gap-5 mt-10'>
                    <div className=' flex  flex-col gap-5 rounded-[24px] mt-10  lg:w-[1040px] h-vh bg-white p-5'>
                        <p className=' text-[#504949] text-[20px] font-[400]'>We're here to assist you! If you have any questions or concerns, please feel free to reach out to us. </p>
                        <input className=' border py-4 px-2 rounded-[12px]  border-[#989898] bg-[#F3EFEF] lg:w-[50%]' type="text" placeholder='Email ID' />
                        <input className=' border py-4 px-2 rounded-[12px] border-[#989898] bg-[#F3EFEF] lg:w-[50%]' type="text" placeholder=' Subject' />
                        <input className=' h-20  border py-4 px-2 rounded-[12px] border-[#989898] bg-[#F3EFEF] lg:w-[50%]' type="text" placeholder=' Message here' />
                        <button className=' bg-[#A21D3C] mt-10 text-white text-[16px] font-[700] p-2 rounded-[12px] lg:text-[24px] flex items-center justify-center lg:w-[50%]'>
Submit
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default WriteToUs