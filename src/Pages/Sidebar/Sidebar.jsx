import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdMiscellaneousServices } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { PiFolderNotchOpenLight } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { NavLink, Outlet } from 'react-router-dom';
import img7 from '../../assets/Sidebar/Vector 10.png'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { removeAuthentication } from '../../features/user/authSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // API url for artist logout
    const logoutapiURL = 'https://glamgo.onrender.com/api/v1/artist/logout';

    // integrate api for artist logout
    const artistLogout = async()=>{

            try {
                const response = await axios.get(logoutapiURL , {withCredentials:true});

                if(response.data.success){

                    // it will remove authentication value from local stroage 
                    dispatch(removeAuthentication())

                    // it will redirect to the landing page
                    navigate('/',{replace : true})
                }
                else{
                    console.log('success is false')
                }

            } catch (error) {
                // Handle error here
                if (error.response) {
                // The request was made, but the server responded with an error status code
                console.error('Error response from server:', error.response.status, error.response.data);
                } else if (error.request) {
                // The request was made, but no response was received
                console.error('No response received from server:', error.request);
                } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the request:', error.message);
                }
            }
    }


    return (
        <>
            <div className='  sticky top-0  hidden  lg:block w-1/5   bg-white font-SulphurPoint'>
                <NavLink
                    to="/admin/Dashboard"
                    className={({ isActive }) => `${isActive ? "text-[#A21D3C]  " : "text-[#989898]"}`}

                >
                    <div className=' flex  items-center   gap-3 p-10'>
                        <LuLayoutDashboard className=' text-[30px] ' />

                        <p className=' text-[24px] font-[700]'>Dashboard</p>

                    </div>
                </NavLink>
                <div className=' w-[90%] border border-[#DCDCDC] mx-auto '>

                </div>
                <NavLink
                    to="/admin/MyServices"
                    className={({ isActive }) => `${isActive ? "text-[#A21D3C] " : "text-[#989898]"}`}

                >
                    <div className=' flex  items-center  gap-3 p-10'>
                        <MdMiscellaneousServices className=' text-[30px] ' />
                        <p className=' text-[24px] font-[700]'>My Services</p>

                    </div>
                </NavLink>
                <div className=' w-[90%] border border-[#DCDCDC] mx-auto '></div>
                <NavLink
                    to="/admin/MyProducts"
                    className={({ isActive }) => `${isActive ? "text-[#A21D3C] " : "text-[#989898]"}`}

                >
                    <div className=' flex items-center  gap-3 p-10'>
                        <CiShop className=' text-[30px] ' />

                        <p className='  text-[24px] font-[700]'>My Products</p>

                    </div>
                </NavLink>

                <div className=' w-[90%] border border-[#DCDCDC] mx-auto '></div>
                <NavLink
                    to="/admin/Portfolio"
                    className={({ isActive }) => `${isActive ? "text-[#A21D3C] " : "text-[#989898]"}`}

                >
                    <div className=' flex  items-center   gap-3 p-10'>
                        <PiFolderNotchOpenLight className=' text-[30px] ' />
                        <p className=' text-[24px] font-[700]'>My Portfolio</p>

                    </div>
                </NavLink>
                <div className=' w-[90%] border border-[#DCDCDC] mx-auto '></div>
                <NavLink
                    to="/admin/Pro"
                    className={({ isActive }) => `${isActive ? "text-[#A21D3C] " : "text-[#989898]"}`}

                >
                    <div className=' flex items-center    gap-3 p-10'>
                        <IoDiamondOutline className=' text-[30px] ' />
                        <p className=' text-[24px] font-[700]'>Glamgo Pro</p>

                    </div>
                </NavLink>
                <div className=' w-[90%] border border-[#DCDCDC] mx-auto '></div>
                <NavLink
                    to="/admin/Help"
                    className={({ isActive }) => `${isActive ? "text-[#A21D3C] " : "text-[#989898]"}`}

                >
                    <div className=' flex  items-center  gap-3 p-10'>
                        <MdHelpOutline className=' text-[30px] ' />
                        <p className=' text-[24px] font-[700]'>Help & Support</p>

                    </div>
                </NavLink>
                <div className=' w-[90%] border border-[#DCDCDC] mx-auto '></div>
                <div
                    // className={({ isActive }) => `${isActive ? "text-[#A21D3C] " : "text-[#989898]"}`}
                    className='text-[#989898]'

                >
                    <div 
                    onClick={artistLogout}
                    className='cursor-pointer flex  items-center  gap-3 p-10'>
                        <IoMdLogOut className=' text-[30px] ' />
                        <p className=' text-[24px] font-[700]'>Logout</p>
                    </div>
                </div>

            </div>
           


        </>
    )
}

export default Sidebar;
