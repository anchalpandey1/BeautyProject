import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from './Sidebar'
import img1 from '../../assets/MyProducts/Icon Search.png'
import img2 from '../../assets/MyProducts/Rectangle 596.png'
import img3 from '../../assets/MyProducts/Rectangle 596 (1).png'
import img4 from '../../assets/MyProducts/fsd.png'
import img5 from '../../assets/MyProducts/Group 595.png'
import img6 from '../../assets/MyProducts/Group 743.png'
import img7 from '../../assets/MyProducts/dsv.png'
import img8 from '../../assets/MyProducts/fluent_attach-20-regular.png'
import img9 from '../../assets/MyProducts/Group 743sc.png'
// import Products from './Products'

const MyProducts = () => {
    const [count, setcount] = useState(1)
    const [showDropDown, setShowDropDown] = useState(false)
    const [show, setShow] = useState(false)
    const [showt, setShowt] = useState(false)
    const [sho, setSho] = useState(false)
    const handleclick = (e) => {
        if (e.target.id === 'cont') {
            setShow(!show)

        }
    }
    const handleclickt = (e) => {
        if (e.target.id === 'contt') {
            setShowt(!showt)

        }

    }



    return (
        <>
            <Navbar />
            <div className=' font-SulphurPoint flex '>
                <div className=' hidden lg:block w-fit'>
                    <Sidebar />

                </div>

                <div className=' p-2 lg:p-8 bg-[#F3EFEF] w-full lg:w-[80%]'>

                    {/* Product 1 page  */}
                    < div className={`flex flex-col gap-5 ${showDropDown ? ' hidden' : ' visible'}`}>
                        <div className=' flex justify-between'>
                            <div className=' flex  flex-col gap-2'>
                                <p className=' text-[16px] lg:text-[20px] font-[700]'>My Products</p>
                                <p className=' text-[#504949] text-[14px] lg:text-[20px] font-[300]'>(Total Products: 46)</p>
                            </div>
                            <button onClick={() => { setShowDropDown(!showDropDown) }} className=' lg:text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]  h-fit p-4 lg:px-44 border border-[#A21D3C] lg:py-1 rounded-[12px] bg-[#A21D3C] lg:bg-white text-white'>+Add Product</button>
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

                    {/* Product 2 nd Page  */}

                    <div className={`${showDropDown ? '  visible' : ' hidden '} ${show ? ' hidden' : '  visible '} flex flex-col gap-5`}>
                        <div className=' flex items-center justify-between'>
                            <div className=' flex items-center gap-8'>
                                <img className=' w-[24px] h-[24px]' src={img5} alt="" />
                                <p className=' text-[16px] lg:text-[28px] font-[700]'>Add Product</p>
                            </div>
                            <img className=' w-[50px] h-[12px] lg:w-[92px] lg:h-[18px]' src={img6} alt="" />
                        </div>
                        <div className='  flex flex-col gap-4  p-5 bg-white'>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Product Name<span className=' text-[#A21D3C]'>*</span></span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Brand Name<span className=' text-[#A21D3C]'>*</span></span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Category<span className=' text-[#A21D3C]'>*</span></span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Product Cost (Rs)<span className=' text-[#A21D3C]'>*</span></span></p>
                                <div className=' bg-[#fbf3f3] p-3 rounded-[12px] flex gap-2'>
                                    <p className=' text-[16px] lg:text-[24px] font-[400] text-[#989898]'>₹</p>
                                    <input className=' bg-[#fbf3f3] ' type="text" />
                                </div>
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Upload Image<span className=' text-[#A21D3C]'>*</span></span></p>
                                <div className=' bg-[#fbf3f3] p-3  rounded-[12px] flex  justify-between'>

                                    <input className=' bg-[#fbf3f3] ' type="text" />
                                    <img className=' lg:w-[30px] lg:h-[30px]  w-[24px] h-[24px]' src={img8} alt="" />
                                </div>
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Stock Quantity<span className=' text-[#A21D3C]'>*</span></span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                            </div>

                        </div>
                        <div className=' flex justify-between gap-2 lg:gap-10  px-2 lg:px-10'>
                            <button className=' text-[#504949] border text-[16px] font-[700] lg:text-[24px]  rounded-[12px] border-[#504949] p-2 w-[50%] flex items-center justify-center '>
                                Cancel
                            </button>
                            <button id='cont' onClick={handleclick} className=' text-white bg-[#A21D3C] text-[16px] font-[700] lg:text-[24px]  rounded-[12px]  p-2 w-[50%] flex items-center justify-center '>
                                Next
                            </button>
                        </div>
                    </div>
                    {/* 3 rd product page  */}
                    <div className={`${show ? '  visible ' : ' hidden '} ${showt ? ' hidden' : ' visible '} flex flex-col gap-5 `}>
                        <div className=' flex items-center justify-between'>
                            <div className=' flex items-center gap-8'>
                                <img className=' w-[24px] h-[24px]' src={img5} alt="" />
                                <p className=' text-[16px] lg:text-[28px] font-[700]'>Add Product</p>
                            </div>
                            <img className=' w-[50px] h-[12px] lg:w-[92px] lg:h-[18px]' src={img7} alt="" />
                        </div>
                        <div className='  flex flex-col gap-4  p-5 bg-white'>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Description<span className=' text-[#A21D3C]'>*</span></span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Skin type</span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                            </div>

                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Preference</span></p>
                                <input className=' bg-[#fbf3f3] p-4 ' type="text" />
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Concern</span></p>
                                <input className=' bg-[#fbf3f3] p-4 ' type="text" />
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Product Ingredients </span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' placeholder='Add details about the components used in the product' type="text" />
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>How to use </span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' placeholder='describe proper application/usage of the product' type="text" />
                            </div>

                        </div>
                        <div className=' flex justify-between gap-2 lg:gap-10  px-2 lg:px-10'>
                            <button className=' text-[#504949] border text-[16px] font-[700] lg:text-[24px]  rounded-[12px] border-[#504949] p-2 w-[50%] flex items-center justify-center '>
                                Cancel
                            </button>
                            <button id='contt' onClick={handleclickt} className=' text-white bg-[#A21D3C] text-[16px] font-[700] lg:text-[24px]  rounded-[12px]  p-2 w-[50%] flex items-center justify-center '>
                                Next
                            </button>
                        </div>
                    </div>

                    {/* 4 th page */}
                    <div className={`${showt ? ' visible ' : ' hidden '} ${show ? ' visible' : ' visible '} flex flex-col gap-5 `}>
                        <div className=' flex items-center justify-between'>
                            <div className=' flex items-center gap-8'>
                                <img className=' w-[24px] h-[24px]' src={img5} alt="" />
                                <p className=' text-[16px] lg:text-[28px] font-[700]'>Add Product</p>
                            </div>
                            <img className=' w-[50px] h-[12px] lg:w-[92px] lg:h-[18px]' src={img9} alt="" />
                        </div>
                        <div className=' bg-white rounded-[12px]  p-8'>
                            <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Does the product come in multiple shades?<span className=' text-[#A21D3C]'>*</span></span></p>
                            <div className=' mt-2 flex gap-2'>
                                <input onClick={() => { setSho(!sho) }} type="radio" />
                                <p className=' text-[20px] font-[400]'>Yes</p>

                            </div>
                            <div className=' mt-2 flex gap-2'>
                                <input type="radio" />
                                <p className=' text-[20px] font-[400]'>No</p>

                            </div>

                            <div className={` ${sho ? ' visible ' : ' hidden '} mt-4 flex flex-col gap-3`}>
                                <div className=' flex  flex-col gap-2 '>
                                    <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Shade Name<span className=' text-[#A21D3C]'>*</span></span></p>
                                    <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                                </div>
                                <div className=' flex  flex-col gap-2 '>
                                    <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Upload Shade Image</span></p>
                                    <div className=' bg-[#fbf3f3] p-3  rounded-[12px] flex  justify-between'>

                                        <input className=' bg-[#fbf3f3] ' type="text" />
                                        <img className=' lg:w-[30px] lg:h-[30px]  w-[24px] h-[24px]' src={img8} alt="" />
                                    </div>
                                </div>
                                <button className=' text-white bg-[#A21D3C] text-[12px] font-[700] lg:text-[18px]  rounded-[12px]  p-2  flex items-center justify-center '>
                                    + Add Shade
                                </button>
                            </div>

                        </div>
                        <div className=' flex justify-between gap-2 lg:gap-10  px-2 lg:px-10'>
                            <button className=' text-[#504949] border text-[16px] font-[700] lg:text-[24px]  rounded-[12px] border-[#504949] p-2 w-[50%] flex bg-white items-center justify-center '>
                                Cancel
                            </button>
                            <button id='contt' onClick={handleclickt} className=' text-white bg-[#A21D3C] text-[16px] font-[700] lg:text-[24px]  rounded-[12px]  p-2 w-[50%] flex items-center justify-center '>
                                Save
                            </button>
                        </div>
                    </div>


                </div>


            </div >

        </>
    )
}

export default MyProducts