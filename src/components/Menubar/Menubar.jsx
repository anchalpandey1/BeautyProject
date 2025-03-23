import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoMdPerson } from "react-icons/io";
import { PiChatCircleTextFill } from "react-icons/pi";
import { IoDiamond } from "react-icons/io5";
import { BiSolidHelpCircle } from "react-icons/bi";
import { RiLogoutCircleRFill } from "react-icons/ri";

const Menubar = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    }
    if (!visible) return null;
    return (
        <>
            <div

                className="fixed inset-0 bg-black bg-opacity-25 font-SulphurPoint backdrop-blur-sm h-screen ">
                <div className="bg-[#F3EFEF] px-5 py-8 rounded w-72">
                    <div className=' flex flex-col justify-between '>
                        <div className=' flex  flex-col gap-2'>
                            <div className=' flex items-center gap-20'>
                                <RxCross2 id='container'
                                    onClick={handleOnClose} className=' text-[24px]' />
                                <p className=' text-[24px] font-[400] '>Menu</p>
                            </div>
                            <div className=' mt-10 flex items-center gap-5'>
                                <IoMdPerson className='text-[24px] text-[#D66F11]' />
                                <p className='  text-[24px] font-[700]'>Profile</p>
                            </div>
                            <div className=' flex items-center gap-5'>
                                <PiChatCircleTextFill className='text-[24px] text-[#D66F11]' />
                                <p className='  text-[24px] font-[700]'>Chat Requests</p>
                            </div>
                            <div className=' flex items-center gap-5'>
                                <IoDiamond className='text-[24px] text-[#D66F11]' />
                                <p className='  text-[24px] font-[700]'>Glamgo pro</p>
                            </div>
                            <div className=' flex items-center gap-5'>
                                <BiSolidHelpCircle className='text-[24px] text-[#D66F11]' />
                                <p className='  text-[24px] font-[700]'>Help & Support</p>
                            </div>

                        </div>
                        <div className=' mt-80 flex items-center gap-5'>
                            <RiLogoutCircleRFill className=' text-[24px] text-[#D66F11]' />
                            <p className=' text-[24px] font-[400] '>Logout</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Menubar