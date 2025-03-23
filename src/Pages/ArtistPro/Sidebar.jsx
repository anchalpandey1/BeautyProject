import React from 'react'
import img1 from '../../assets/MyProducts/humbleicons_dashboard.png'
import img2 from '../../assets/Sidebar/ic_baseline-miscellaneous-services.png'
import img3 from '../../assets/ArtistDashboard/Vector (1).png'

import img4 from '../../assets/ArtistPro/ion_diamond-outline.png'
import img5 from '../../assets/ArtistPro/formkit_help (1).png'
import img6 from '../../assets/Sidebar/majesticons_logout-half-circle.png'
import img7 from '../../assets/Sidebar/Vector 10.png'
import img8 from '../../assets/Portfolio/dashicons_portfolio.png'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className=' hidden lg:block bg-white font-SulphurPoint'>
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
                <div className=' flex  gap-3 p-10'>
                    <img className=' w-[24px] h-[24px]' src={img3} alt="" />
                    <NavLink
                        to="/MyProducts"
                    >
                        <p className=' text-[#989898] text-[24px] font-[700]'>My Products</p>
                    </NavLink>
                </div>
                
                <img src={img7} alt="" />
                <div className=' flex  ml-10  gap-3 p-10'>
                    <img className=' w-[32px] h-[32px]' src={img4} alt="" />
                    <p className='text-[#A21D3C] text-[24px] font-[700]'>Glamgo Pro</p>

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