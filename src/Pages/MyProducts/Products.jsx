import React from 'react'
import img1 from '../../assets/MyProducts/Icon Search.png'
import img2 from '../../assets/MyProducts/Rectangle 596.png'
import img3 from '../../assets/MyProducts/Rectangle 596 (1).png'
import img4 from '../../assets/MyProducts/fsd.png'

const Products = () => {
    return (
        <>
            <div className=' p-2 lg:p-8 bg-[#F3EFEF] w-full lg:w-[80%]'>

                <div className=' flex flex-col gap-5'>
                    <div className=' flex justify-between'>
                        <div className=' flex  flex-col gap-2'>
                            <p className=' text-[16px] lg:text-[20px] font-[700]'>My Products</p>
                            <p className=' text-[#504949] text-[14px] lg:text-[20px] font-[300]'>(Total Products: 46)</p>
                        </div>
                        <button className=' lg:text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]  h-fit p-4 lg:px-44 border border-[#A21D3C] lg:py-1 rounded-[12px] bg-[#A21D3C] lg:bg-white text-white'>+Add Product</button>
                    </div>
                    <div className=' flex gap-1 bg-white p-2 rounded-[12px]'>
                        <img className=' w-[16px] h-[16px]' src={img1} alt="" />
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div className=' flex  lg:hidden justify-between '>
                        <div className=' p-2 flex items-center justify-center  rounded-[12px] bg-[#D66F11] '>
                            <p className=' text-[16px] font-[400] font-Inter text-white'>All</p>
                        </div>
                        <div className=' p-1 flex items-center justify-center  rounded- border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                            <p className=' text-[16px] font-[400] font-Inter '>Hair</p>
                        </div>
                        <div className=' p-1 flex items-center justify-center  rounded- border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                            <p className=' text-[16px] font-[400] font-Inter '>Makeup</p>
                        </div>
                        <div className=' p-1 flex items-center justify-center  rounded- border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                            <p className=' text-[16px] font-[400] font-Inter '>Skincare</p>
                        </div>
                        <div className=' p-1 flex items-center justify-center  rounded- border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                            <p className=' text-[16px] font-[400] font-Inter '>Nails</p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <div className=' p-3 flex justify-between bg-white'>
                            <div className=' flex gap-2'>
                                <img className=' w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]' src={img2} alt="" />
                                <div>
                                    <p className=' text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]'>NYX Eyeshadow</p>
                                    <p className=' text-[#989898] text-[14px] lg:text-[20px] font-[400]'>Eyes</p>
                                    <p className=' text-[18px] lg:text-[32px] font-[700]'>₹499/-</p>
                                </div>

                            </div>
                            <div className=' flex flex-col  justify-between'>
                                <button className='p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-white bg-[#A21D3C]'>
                                    Edit
                                </button>
                                <button className=' p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-[#504949]  border border-[#504949]'>
                                    Delete
                                </button>

                            </div>
                        </div>
                        <div className=' p-3 flex justify-between bg-white'>
                            <div className=' flex gap-2'>
                                <img className=' w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]' src={img3} alt="" />
                                <div>
                                    <p className=' text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]'>Syagi - Face Mist</p>
                                    <p className=' text-[#989898] text-[14px] lg:text-[20px] font-[400]'>Skincare</p>
                                    <p className=' text-[18px] lg:text-[32px] font-[700]'>₹114999/-</p>
                                </div>

                            </div>
                            <div className=' flex flex-col  justify-between'>
                                <button className='p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-white bg-[#A21D3C]'>
                                    Edit
                                </button>
                                <button className=' p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-[#504949]  border border-[#504949]'>
                                    Delete
                                </button>

                            </div>
                        </div>
                        <div className=' p-3 flex justify-between bg-white'>
                            <div className=' flex gap-2'>
                                <img className=' w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]' src={img4} alt="" />
                                <div>
                                    <p className=' text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]'>Venus HD Mascara</p>
                                    <p className=' text-[#989898] text-[14px] lg:text-[20px] font-[400]'>Eyes</p>
                                    <p className=' text-[18px] lg:text-[32px] font-[700]'>₹749/-</p>
                                </div>

                            </div>
                            <div className=' flex flex-col  justify-between'>
                                <button className='p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-white bg-[#A21D3C]'>
                                    Edit
                                </button>
                                <button className=' p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-[#504949]  border border-[#504949]'>
                                    Delete
                                </button>

                            </div>
                        </div>
                        <div className=' p-3 flex justify-between bg-white'>
                            <div className=' flex gap-2'>
                                <img className=' w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]' src={img2} alt="" />
                                <div>
                                    <p className=' text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]'>NYX Foundation</p>
                                    <p className=' text-[#989898] text-[14px] lg:text-[20px] font-[400]'>Face</p>
                                    <p className=' text-[18px] lg:text-[32px] font-[700]'>₹699/-</p>
                                </div>

                            </div>
                            <div className=' flex flex-col  justify-between'>
                                <button className='p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-white bg-[#A21D3C]'>
                                    Edit
                                </button>
                                <button className=' p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-[#504949]  border border-[#504949]'>
                                    Delete
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Products