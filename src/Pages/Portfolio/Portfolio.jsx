import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import img2 from '../../assets/ArtistDashboard/Component 4.png'
import img3 from '../../assets/ArtistDashboard/Component 5.png'
import img4 from '../../assets/ArtistDashboard/Component 7.png'
import img5 from '../../assets/ArtistDashboard/Group 350.png'
import img6 from '../../assets/Portfolio/Rectangle 591.png'
import img7 from '../../assets/Portfolio/Rectangle 592.png'
import img8 from '../../assets/Portfolio/Rectangle 593.png'
import img9 from '../../assets/Portfolio/Rectangle 601.png'
import img10 from '../../assets/Portfolio/Rectangle 608.png'
import img11 from '../../assets/Portfolio/Rectangle 610.png'
import img12 from '../../assets/Portfolio/Rectangle 609.png'
import img13 from '../../assets/Portfolio/Rectangle 599.png'
import img14 from '../../assets/MyProducts/Group 595.png'
import img15 from '../../assets/MyProducts/fluent_attach-20-regular.png'
import { RiAttachment2 } from "react-icons/ri";
import NavbarArtist from '../../components/Navbar/NavbarArtist'

const Portfolio = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <>
            {/* <NavbarArtist /> */}
            <div className=' lg:w-[80%] w-full right-4 font-SulphurPoint flex '>
                

                <div className=' p-2 lg:p-8 bg-[#F3EFEF] w-full '>

                    <div className={`${showDropDown ? ' hidden' : ' visible'} flex flex-col gap-5`}>


                        <div className={`flex justify-between `} >
                            <div className=' flex  flex-col gap-2'>
                                <p className=' text-[16px] lg:text-[20px] font-[700]'>My Products</p>
                                <p className=' text-[#504949] text-[14px] lg:text-[20px] font-[300]'>(Total Products: 46)</p>
                            </div>
                            <button onClick={() => { setShowDropDown(!showDropDown) }} className=' lg:text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]  h-fit p-4 lg:px-44 border border-[#A21D3C] lg:py-1 rounded-[12px] bg-[#A21D3C] lg:bg-white text-white'>+ Add New Image</button>
                        </div>
                        <div className=' p-2 lg:px-10 lg:py-5 flex justify-between  bg-white rounded-[12px] mt-5'>
                            <div className=' flex flex-col lg:flex-row gap-4 items-center'>
                                <img className=' w-[64px] h-[64px]' src={img2} alt="" />
                                <p className=' text-[20px] font-[700]'>Makeup</p>
                            </div>
                            <div className=' flex flex-col lg:flex-row  gap-4 items-center'>
                                <img className=' w-[64px] h-[64px]' src={img3} alt="" />
                                <p className=' text-[20px] font-[700]'>Hair</p>
                            </div>
                            <div className=' flex flex-col lg:flex-row  gap-4 items-center'>
                                <img className=' w-[64px] h-[64px]' src={img4} alt="" />
                                <p className=' text-[20px] font-[700]'>Skincare</p>
                            </div>
                            <div className=' flex flex-col lg:flex-row  gap-4 items-center'>
                                <img className=' w-[64px] h-[64px]' src={img5} alt="" />
                                <p className=' text-[20px] font-[700]'>Other</p>
                            </div>
                        </div>

                        <div className=' bg-white p-2 lg:p-5 flex flex-col gap-8  '>
                            <div className=' flex lg:flex-row  lg:gap-24  flex-col w-full  '>
                                <div className=' flex lg:gap-24  '>
                                    <img className=' w-[174px] h-[150px] lg:w-[202px] lg:h-[202px]' src={img6} alt="" />
                                    <img className=' w-[174px] h-[150px] lg:w-[202px] lg:h-[202px]' src={img7} alt="" />
                                </div>
                                <div className=' flex  lg:gap-24 '>
                                    <img className=' w-[174px] h-[160px] lg:w-[202px] lg:h-[202px]' src={img8} alt="" />
                                    <img className=' w-[174px] h-[150px] mt-1 lg:w-[202px] lg:h-[202px]' src={img9} alt="" />
                                </div>


                            </div>
                            <div className=' flex  lg:flex-row  lg:gap-24 flex-col  w-full'>
                                <div className=' flex gap-2 lg:gap-24'>
                                    <img className=' w-[174px] h-[150px] lg:w-[202px] lg:h-[202px]' src={img10} alt="" />
                                    <img className=' w-[174px] h-[150px] lg:w-[202px] lg:h-[202px]' src={img11} alt="" />
                                </div>
                                <div className=' flex lg:gap-24'>
                                    <img className=' w-[174px] mt-1 h-[150px] lg:w-[202px] lg:h-[202px]' src={img12} alt="" />
                                    <img className=' w-[174px] h-[160px] lg:w-[202px] lg:h-[202px]' src={img13} alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className={`${showDropDown ? '  visible' : ' hidden '}  h-full w-full mx-auto flex flex-col gap-10`}>
                        <div className=' flex items-center gap-8'>
                            <img className=' w-[24px] h-[24px]' src={img14} alt="" />
                            <p className=' text-[16px] lg:text-[28px] font-[700]'>Add Image</p>
                        </div>
                        <div className=' bg-white rounded-[12px] p-5 flex flex-col gap-5'>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Category<span className=' text-[#A21D3C]'>*</span></span></p>
                                <input className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                            </div>
                            <div className=' flex  flex-col gap-2 '>
                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Upload Shade Image</span></p>
                                <div className=' bg-[#fbf3f3] p-3  rounded-[12px] flex  justify-between'>

                                    <input className=' bg-[#fbf3f3] ' type="text" />
                                    <RiAttachment2 className=' text-[24px] lg:text-[30px] text-[#A21D3C] hover:cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div className='  flex justify-between gap-2 lg:gap-10  px-2 lg:px-10'>
                            <button className=' text-[#504949] border text-[16px] font-[700] lg:text-[24px]  rounded-[12px] border-[#504949] p-2 w-[50%] flex bg-white items-center justify-center '>
                                Cancel
                            </button>
                            <button id='contt' className=' text-white bg-[#A21D3C] text-[16px] font-[700] lg:text-[24px]  rounded-[12px]  p-2 w-[50%] flex items-center justify-center '>
                                Add Image
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio