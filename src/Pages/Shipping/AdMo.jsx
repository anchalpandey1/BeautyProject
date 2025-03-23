import React from 'react'
import img13 from '../../assets/Shipping/basil_cross-outline.png'

const AdMo = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    }
    if (!visible) return null;
    return (
        <>
            <div className=' fixed inset-0 bg-opacity-25 backdrop-blur-sm flex items-center justify-center font-SulphurPoint  flex-col gap-3 p-2 lg:p-10 bg-white  '>
                <div className=' flex justify-between w-full lg:w-[45%] '>
                    <p className=' text-[16px] lg:text-[30px] font-[700]'>Add a new address</p>
                    <img id='container' className=' w-[30px] h-[30px] hover:cursor-pointer' onClick={handleOnClose} src={img13} alt="" />
                </div>
                <div className='  flex flex-col gap-4'>


                    <input type="text" placeholder='Full Name' className=' w-[95%] mt-2 p-4 rounded-[12px] border border-gray-400' />
                    <input type="text" placeholder='Mobile Number' className=' w-[95%]  p-4 rounded-[12px] border border-gray-400' />
                    <div className=' flex flex-row gap:2 lg:gap-10 w-[95%]'>
                        <input type="text" placeholder='Pin Code' className=' w-[95%]  p-4 rounded-[12px] border border-gray-400' />
                        <input type="text" placeholder='City' className=' w-[95%]  p-4 rounded-[12px] border border-gray-400' />
                        <input type="text" placeholder='State' className=' w-[95%]  p-4 rounded-[12px] border border-gray-400' />
                    </div>
                    <input type="text" placeholder='House/Flat No/Office No' className=' w-[95%] mt-2 p-4 rounded-[12px] border border-gray-400' />
                    <input type="text" placeholder='Area/Road/Colony' className='  h-28 w-[95%] mt-2 p-4 rounded-[12px] border border-gray-400' />
                    <p className=' text-[24px] font-[700] text-[#504949]'>Address Type</p>
                    <div className=' text-[18px] font-[700] flex justify-between'>
                        <div className=' flex gap-1'>
                            <input className=' color-[#C96810]' type="radio" />
                            <p>Home</p>
                        </div>
                        <div className='  flex gap-1'>
                            <input className=' ' type="radio" />
                            <p>Office</p>
                        </div>
                        <div className=' flex gap-1'>
                            <input type="radio" />
                            <p>Others</p>
                        </div>
                    </div>
                    <button className=' w-full text-[24px] font-[700] text-white bg-[#A21D3C] p-2 rounded-[12px] flex items-center justify-center'>
                        Save Address
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdMo