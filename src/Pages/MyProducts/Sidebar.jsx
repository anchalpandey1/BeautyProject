import React from 'react'
import img1 from '../../assets/MyProducts/humbleicons_dashboard.png'
import img2 from '../../assets/Sidebar/ic_baseline-miscellaneous-services.png'
import img3 from '../../assets/MyProducts/solar_shop-linear.png'
import img4 from '../../assets/Sidebar/dashicons_portfolio.png'
import img5 from '../../assets/Sidebar/ion_diamond-outline.png'
import img6 from '../../assets/Sidebar/majesticons_logout-half-circle.png'
import img7 from '../../assets/Sidebar/Vector 10.png'
import img8 from '../../assets/ArtistDashboard/Vector (1).png'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className=' bg-white font-SulphurPoint'>
                <div className=' flex   gap-3 p-10'>
                    <img className=' w-[30px] h-[30px]' src={img1} alt="" />
                    <NavLink
                        to="/ArtistDashboard"
                    >
                        <p className='text-[#989898] text-[24px] font-[700]'>Dashboard</p>
                    </NavLink>


                </div>
                <img src={img7} alt="" />
                <div className=' flex   gap-3 p-10'>
                    <img className=' w-[24px] h-[24px]' src={img2} alt="" />
                    <p className='text-[#989898] text-[24px] font-[700]'>My Services</p>

                </div>
                <img src={img7} alt="" />
                <div className=' flex  ml-10 gap-3 p-10'>
                    <img className=' w-[30px] h-[30px]' src={img3} alt="" />
                    <p className='text-[#A21D3C] text-[24px] font-[700]'>My Products</p>

                </div>
                <img src={img7} alt="" />
                <div className=' flex  hover:cursor-pointer  items-center gap-3 p-10'>
                    <img className=' w-[24px] h-[24px]' src={img8} alt="" />
                    <NavLink
                        to="/Portfolio"
                    >
                        <p className='text-[#989898] text-[24px] font-[700]'>My Portfolio</p>
                    </NavLink>
                </div>
                <img src={img7} alt="" />
                <div className=' flex   gap-3 p-10'>
                    <img className=' w-[24px] h-[24px]' src={img4} alt="" />
                    <NavLink
                    to="/ArtistPro"
                    >
                    <p className='text-[#989898] text-[24px] font-[700]'>Glamgo Pro</p>
                    </NavLink>
                    

                </div>
                <img src={img7} alt="" />
                <div className=' flex   gap-3 p-10'>
                    <img className=' w-[24px] h-[24px]' src={img5} alt="" />
                    <p className='text-[#989898] text-[24px] font-[700]'>Help & Support</p>

                </div>
                <img src={img7} alt="" />
                <div className=' flex   gap-3 p-10'>
                    <img className=' w-[24px] h-[24px]' src={img6} alt="" />
                    <p className='text-[#989898] text-[24px] font-[700]'>Logout</p>

                </div>
            </div>
        </>
    )
}

export default Sidebar