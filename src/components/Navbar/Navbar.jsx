import React from 'react'
import img1 from '../../assets/Navbar/Rectangle 609.png'
import img2 from '../../assets/Navbar/circum_mobile-3.png'
import img3 from '../../assets/Navbar/formkit_help.png'
import img4 from '../../assets/Navbar/Vector (1).png'
import img5 from '../../assets/Navbar/Vector 76.png'
import img6 from '../../assets/Navbar/Icon.png'
import img7 from '../../assets/Navbar/Icon (2).png'
import img8 from '../../assets/Navbar/Icon (1).png'
import { IoIosArrowDown } from "react-icons/io";

import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className=' hidden font-SulphurPoint px-10 lg:flex justify-between items-center text-white bg-[#A21D3C]'>
                <Link to='/'><img className='w-[200px] h-[78px]' src={img1} alt="" /></Link>
                <div className='text-[20px] font-[400] flex  gap-6 items-center'>    
                    {/*  Home  */}
                    <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `${isActive ? 'text-2xl font-bold' : 'text-xl text-normal'}`
                            } 
                        >
                            <p>Home</p>
                    </NavLink>

                    {/*  Artist  */}
                    <NavLink
                            to="/allArtist"
                            end
                            className={({ isActive }) =>
                                `${isActive ? 'text-2xl font-bold' : 'text-xl text-normal'}`
                            } 
                        >
                            <p>Artists</p>
                    </NavLink>

                    {/*  Products  */}
                    <NavLink
                            to="/product"
                            end
                            className={({ isActive }) =>
                                `${isActive ? 'text-2xl font-bold' : 'text-xl text-normal'}`
                            } 
                        >
                            <p>Shop</p>
                    </NavLink>

                    {/*  About us  */}
                    <NavLink
                            to="/aboutus"
                            end
                            className={({ isActive }) =>
                                `${isActive ? 'text-2xl font-bold' : 'text-xl text-normal'}`
                            } 
                        >
                            <p>About us</p>
                    </NavLink>

                    {/*  About us  */}
                    <NavLink
                            to="/ContactToUs"
                            end
                            className={({ isActive }) =>
                                `${isActive ? 'text-2xl font-bold' : 'text-xl text-normal'}`
                            } 
                        >
                            <p>Contact</p>
                    </NavLink>

                </div>

                <div className=' bg-[#AD3853] text-[20px] p-3 rounded-[28px] font-[400] items-center flex gap-5'>
                    <div className=' flex gap-2 items-center'>
                        <img className='w-[24px] h-[24px]' src={img2} alt="" />
                        <p>Get App</p>
                    </div>
                    <img className='h-[30px]' src={img5} alt="" />
                    <div className=' flex gap-2 items-center'>
                        <img className='w-[24px] h-[24px]' src={img3} alt="" />
                        <p>Help</p>
                    </div>
                </div>
            </div>
            <div className=' bg-[#A31F3E]  items-center p-5 flex lg:hidden justify-between'>
                <div><img className='w-[24px] h-[20px]' src={img6} alt="" /></div>
                <div><img className=' w-[120px] h-[50px]' src={img1} alt="" /></div>
                <div className=' flex gap-5'>
                    <img className=' w-[24px] h-[24px]' src={img7} alt="" />
                    <img  className=' w-[24px] h-[24px]' src={img8} alt="" />
                </div>
            </div>
        </>
    )
}

export default Navbar